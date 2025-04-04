import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class FileStorageTest {

    @Test
    void testSaveFile() {
        // Arrange
        FileStorage fileStorage = new FileStorage();
        String fileName = "testFile.txt";
        String content = "This is a test file.";

        // Act
        boolean result = fileStorage.saveFile(fileName, content);

        // Assert
        assertTrue(result);
    }

    // Add more test methods for other functionalities
}