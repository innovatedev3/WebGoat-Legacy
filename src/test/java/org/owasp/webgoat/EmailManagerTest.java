import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class EmailManagerTest {

    @Test
    void testSendEmail() {
        // Arrange
        EmailManager emailManager = new EmailManager();
        String recipient = "test@example.com";
        String subject = "Test Email";
        String body = "This is a test email.";

        // Act
        boolean result = emailManager.sendEmail(recipient, subject, body);

        // Assert
        assertTrue(result);
    }

    // Add more test methods for other functionalities
}