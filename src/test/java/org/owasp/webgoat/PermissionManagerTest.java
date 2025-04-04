import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class PermissionManagerTest {

    @Test
    void testGrantPermission() {
        // Arrange
        PermissionManager permissionManager = new PermissionManager();
        String userId = "user123";
        String permission = "READ";

        // Act
        boolean result = permissionManager.grantPermission(userId, permission);

        // Assert
        assertTrue(result);
    }

    // Add more test methods for other functionalities
}