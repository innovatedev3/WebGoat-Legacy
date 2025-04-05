import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class AccessManagerTest {

    @Test
    void testGrantAccess() {
        // Arrange
        AccessManager accessManager = new AccessManager();
        String userId = "user123";
        String resource = "dashboard";

        // Act
        boolean result = accessManager.grantAccess(userId, resource);

        // Assert
        assertTrue(result);
    }

    // Add more test methods for other functionalities
}