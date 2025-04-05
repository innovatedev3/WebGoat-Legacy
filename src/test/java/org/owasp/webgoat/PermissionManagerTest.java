import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class PermissionManagerTest {

    @Test
    void testGrantPermission() {
        // Arrange
        PermissionManager permissionManager = new PermissionManager();
        String username = "testUser";
        String permission = "read";

        // Act
        boolean result = permissionManager.grantPermission(username, permission);

        // Assert
        assertTrue(result);
    }

    @Test
    void testRevokePermission() {
        // Arrange
        PermissionManager permissionManager = new PermissionManager();
        String username = "testUser";
        String permission = "read";

        // Act
        boolean result = permissionManager.revokePermission(username, permission);

        // Assert
        assertTrue(result);
    }

    // Add more test methods for other functionalities
}