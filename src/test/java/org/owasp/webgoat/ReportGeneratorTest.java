import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class ReportGeneratorTest {

    @Test
    void testGenerateReport() {
        // Arrange
        ReportGenerator reportGenerator = new ReportGenerator();
        String reportType = "Monthly";

        // Act
        String result = reportGenerator.generateReport(reportType);

        // Assert
        assertNotNull(result);
        assertTrue(result.contains("Monthly"));
    }

    // Add more test methods for other functionalities
}