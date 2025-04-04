import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class SecurityTest {

    @Test
    void testEncryption() {
        // Arrange
        Security security = new Security();
        String plainText = "password123";

        // Act
        String encryptedText = security.encrypt(plainText);

        // Assert
        assertNotNull(encryptedText);
        assertNotEquals(plainText, encryptedText);
    }

    // Add more test methods for other functionalities
}