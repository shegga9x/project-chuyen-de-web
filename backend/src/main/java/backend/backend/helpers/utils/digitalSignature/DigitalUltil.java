package backend.backend.helpers.utils.digitalSignature;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDType1Font;

import backend.backend.helpers.payload.response.OrderItemResponse;
import backend.backend.persitence.entities.Account;

@SuppressWarnings("deprecated")
public class DigitalUltil {

    // static String[][] headerContent = {{"ProductName", "CustomerId", "Email",
    // "ToTalPrice"}};

    public static String[][] append(String[][] a, String[][] b) {
        String[][] result = new String[a.length + b.length][];
        System.arraycopy(a, 0, result, 0, a.length);
        System.arraycopy(b, 0, result, a.length, b.length);
        return result;
    }

    public static double getTotalPrice(List<OrderItemResponse> orderItems) {
        double result = 0;
        for (OrderItemResponse orderItem : orderItems) {
            result = result + (orderItem.getProduct().getPrice() * orderItem.getQuantity()) + orderItem.getShippingPrice();
        }
        return result;
    }

    public static String[][] createContent(List<OrderItemResponse> orderItems, Account account) {
        String[][] result = {{"ProductId", "CustomerId", "Email", "Quantity", "Price", "ShippingPrice"}};
        // insert mấy trường dài quá như product name là bị lỗi, éo bít sửa sao
        for (OrderItemResponse orderItem : orderItems) {
            String totalPrice = String.valueOf(orderItem.getProduct().getPrice());
            String[][] data = {{orderItem.getProduct().getIdProduct().toString(),
                    account.getIdAccount().toString(),
                    account.getEmail(),
                    String.valueOf(orderItem.getQuantity()),
                    totalPrice,
                    String.valueOf(orderItem.getShippingPrice())}};
            result = append(result, data);
        }
        return result;
    }

    public static ByteArrayInputStream createPDF(List<OrderItemResponse> orderItems, Account account) throws Exception {
        try (PDDocument doc = new PDDocument()) {
            PDPage myPage = new PDPage();
            doc.addPage(myPage);
            try (PDPageContentStream cont = new PDPageContentStream(doc, myPage)) {
                cont.beginText();

                cont.setFont(PDType1Font.TIMES_ROMAN, 12);
                cont.setLeading(14.5f);
                cont.newLineAtOffset(30, 700);
                cont.showText("Order Report");
                cont.endText();

                // create Content
                String[][] content = createContent(orderItems, account);

                drawTable(myPage, cont, 690, 30, content);
                cont.beginText();

                cont.setFont(PDType1Font.TIMES_ROMAN, 12);
                cont.setLeading(14.5f);
                cont.newLineAtOffset(30, 640 - 22 * orderItems.size());
                cont.showText("ToTal Price: " + getTotalPrice(orderItems));
                cont.endText();

            }
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            doc.save(out);
            doc.close();
            return new ByteArrayInputStream(out.toByteArray());
        }

    }

    public static void drawTable(PDPage page,

                                 PDPageContentStream contentStream, float y, float margin,

                                 String[][] content) throws IOException {

        final int rows = content.length;

        final int cols = content[0].length;

        final float rowHeight = 20f;

        final float tableWidth = page.getMediaBox().getWidth() - (2 * margin);

        final float tableHeight = rowHeight * rows;

        final float colWidth = tableWidth / (float) cols;

        final float cellMargin = 2f;

        // draw the rows

        float nexty = y;

        for (int i = 0; i <= rows; i++) {

            contentStream.drawLine(margin, nexty, margin + tableWidth, nexty);

            nexty -= rowHeight;

        }

        // draw the columns

        float nextx = margin;

        for (int i = 0; i <= cols; i++) {

            contentStream.drawLine(nextx, y, nextx, y - tableHeight);

            nextx += colWidth;

        }

        // now add the text

        contentStream.setFont(PDType1Font.HELVETICA_BOLD, 8);

        float textx = margin + cellMargin;

        float texty = y - 15;

        for (int i = 0; i < content.length; i++) {

            for (int j = 0; j < content[i].length; j++) {

                String text = content[i][j];

                contentStream.beginText();

                contentStream.newLineAtOffset(textx, texty);

                contentStream.showText(text.replace("\n", "").replace("\r", ""));

                contentStream.endText();

                textx += colWidth;

            }

            texty -= rowHeight;

            textx = margin + cellMargin;

        }

    }

}
