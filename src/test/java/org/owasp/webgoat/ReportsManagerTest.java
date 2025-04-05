import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class ReportsManagerTest {

    @Test
    void testGenerateReport() {
        // Arrange
        ReportsManager reportsManager = new ReportsManager();
        String reportType = "Weekly";

        // Act
        String result = reportsManager.generateReport(reportType);

        // Assert
        assertNotNull(result);
        assertTrue(result.contains("Weekly"));
    }

    // Add more test methods for other functionalities
}