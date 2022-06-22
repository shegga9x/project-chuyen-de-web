package backend.backend.helpers.utils.digitalSignature;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;

import backend.backend.helpers.utils.SubUtils;
import backend.backend.persitence.entities.Account;
import backend.backend.persitence.entities.OrderItem;
import backend.backend.persitence.model.UserDetailCustom;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDType1Font;

public class DigitalUltil {

//    static String[][] headerContent = {{"ProductName", "CustomerId", "Email", "ToTalPrice"}};

    public static String[][] append(String[][] a, String[][] b) {
        String[][] result = new String[a.length + b.length][];
        System.arraycopy(a, 0, result, 0, a.length);
        System.arraycopy(b, 0, result, a.length, b.length);
        return result;
    }

    public static String[][] createContent(List<OrderItem> orderItems, Account account) {
        String[][] result = {{"ProductId", "CustomerId", "Email", "ToTalPrice"}};
        // insert mấy trường dài quá như product name là bị lỗi, éo bít sửa sao
        for (OrderItem orderItem : orderItems) {
            String[][] data = {{orderItem.getProduct().getIdProduct().toString(),
                    account.getIdAccount().toString(),
                    account.getEmail(),
                    orderItem.getProduct().getPrice().toString()}};
            result = append(result, data);

        }
        return result;
    }


    public static ByteArrayInputStream createPDF(List<OrderItem> orderItems, Account account) throws Exception {
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

                //create Content
                String[][] content = createContent(orderItems, account);
                System.out.println(content[0][0]);

                drawTable(myPage, cont, 690, 30, content);

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
