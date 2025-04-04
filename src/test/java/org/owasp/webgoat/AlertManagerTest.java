import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class AlertManagerTest {

    @Test
    void testCreateAlert() {
        // Arrange
        AlertManager alertManager = new AlertManager();
        String alertMessage = "System maintenance scheduled.";

        // Act
        boolean result = alertManager.createAlert(alertMessage);

        // Assert
        assertTrue(result);
    }

    // Add more test methods for other functionalities
}