import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class NotificationManagerTest {

    @Test
    void testSendNotification() {
        // Arrange
        NotificationManager notificationManager = new NotificationManager();
        String userId = "user123";
        String message = "You have a new message.";

        // Act
        boolean result = notificationManager.sendNotification(userId, message);

        // Assert
        assertTrue(result);
    }

    // Add more test methods for other functionalities
}