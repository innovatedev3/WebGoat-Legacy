import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

import java.util.Vector;

class DataExporterTest {

    @Test
    void testExportData() {
        // Arrange
        DataExporter dataExporter = new DataExporter();
        String format = "CSV";

        // Act
        boolean result = dataExporter.exportData(format);

        // Assert
        assertTrue(result);
    }

    @Test
    void testExportToCSV() {
        // Arrange
        Vector<Option> options = new Vector<>();
        Option option1 = new Option("Value1");
        option1.setAttribute("value", "Value1");
        option1.setAttribute("selected", "true");
        options.add(option1);

        Option option2 = new Option("Value2");
        option2.setAttribute("value", "Value2");
        option2.setAttribute("selected", "false");
        options.add(option2);

        DataExporter dataExporter = new DataExporter();
        String filePath = "test_output.csv";

        // Act
        boolean result = dataExporter.exportData("CSV", options, filePath);

        // Assert
        assertTrue(result);
    }

    // Add more test methods for other functionalities
}