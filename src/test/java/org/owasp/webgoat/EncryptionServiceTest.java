import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class EncryptionServiceTest {

    @Test
    void testEncryptData() {
        // Arrange
        EncryptionService encryptionService = new EncryptionService();
        String plainText = "SensitiveData123";

        // Act
        String encryptedData = encryptionService.encryptData(plainText);

        // Assert
        assertNotNull(encryptedData);
        assertNotEquals(plainText, encryptedData);
    }

    // Add more test methods for other functionalities
}