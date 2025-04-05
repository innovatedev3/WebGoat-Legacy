import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class NotificationsManagerTest {

    @Test
    void testSendNotification() {
        // Arrange
        NotificationsManager notificationsManager = new NotificationsManager();
        String recipient = "user@example.com";
        String message = "You have a new alert.";

        // Act
        boolean result = notificationsManager.sendNotification(recipient, message);

        // Assert
        assertTrue(result);
    }

    // Add more test methods for other functionalities
}