import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class EncryptionManagerTest {

    @Test
    void testEncryptData() {
        // Arrange
        EncryptionManager encryptionManager = new EncryptionManager();
        String plainText = "SensitiveData123";

        // Act
        String encryptedData = encryptionManager.encryptData(plainText);

        // Assert
        assertNotNull(encryptedData);
        assertNotEquals(plainText, encryptedData);
    }

    // Add more test methods for other functionalities
}