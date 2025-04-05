import java.io.FileWriter;
import java.io.IOException;

public class DataExporter {

    public boolean exportData(String format, Vector<Option> options, String filePath) {
        if ("CSV".equalsIgnoreCase(format)) {
            String csvData = ECSFactory.exportToCSV(options);
            try (FileWriter writer = new FileWriter(filePath)) {
                writer.write(csvData);
                return true;
            } catch (IOException e) {
                e.printStackTrace();
                return false;
            }
        }
        // Add support for other formats if needed
        return false;
    }
}