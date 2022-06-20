package backend.backend.helpers.utils.digitalSignature;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDType1Font;

public class DigitalUltil {

        public static ByteArrayInputStream createPDF() throws Exception {
                try (PDDocument doc = new PDDocument()) {
                        PDPage myPage = new PDPage();
                        doc.addPage(myPage);
                        try (PDPageContentStream cont = new PDPageContentStream(doc, myPage)) {
                                cont.beginText();

                                cont.setFont(PDType1Font.TIMES_ROMAN, 12);
                                cont.setLeading(14.5f);

                                cont.newLineAtOffset(25, 700);
                                String line1 = "World War II (often abbreviated to WWII or WW2), "
                                                + "also known as the Second World War,";
                                cont.showText(line1);

                                cont.newLine();

                                String line2 = "was a global war that lasted from 1939 to 1945, "
                                                + "although related conflicts began earlier.";
                                cont.showText(line2);
                                cont.newLine();

                                String line3 = "It involved the vast majority of the world's "
                                                + "countries—including all of the great powers—";
                                cont.showText(line3);
                                cont.newLine();

                                String line4 = "eventually forming two opposing military "
                                                + "alliances: the Allies and the Axis.";
                                cont.showText(line4);
                                cont.newLine();

                                cont.endText();
                        }
                        ByteArrayOutputStream out = new ByteArrayOutputStream();
                        doc.save(out);
                        doc.close();
                        return new ByteArrayInputStream(out.toByteArray());
                }

        }

}
