import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class ResourceManagerTest {

    @Test
    void testAddResource() {
        // Arrange
        ResourceManager resourceManager = new ResourceManager();
        String resourceName = "Server1";

        // Act
        boolean result = resourceManager.addResource(resourceName);

        // Assert
        assertTrue(result);
    }

    // Add more test methods for other functionalities
}