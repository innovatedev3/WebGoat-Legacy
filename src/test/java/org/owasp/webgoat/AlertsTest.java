import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class AlertsTest {

    @Test
    void testAddAlert() {
        // Arrange
        Alerts alerts = new Alerts();
        String alertMessage = "Test alert message";

        // Act
        boolean result = alerts.addAlert(alertMessage);

        // Assert
        assertTrue(result);
    }

    // Add more test methods for other functionalities
}