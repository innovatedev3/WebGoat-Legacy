import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class RoleManagerTest {

    @Test
    void testAddRole() {
        // Arrange
        RoleManager roleManager = new RoleManager();
        String roleName = "admin";

        // Act
        boolean result = roleManager.addRole(roleName);

        // Assert
        assertTrue(result);
    }

    @Test
    void testAssignRole() {
        // Arrange
        RoleManager roleManager = new RoleManager();
        String username = "testUser";
        String role = "admin";

        // Act
        boolean result = roleManager.assignRole(username, role);

        // Assert
        assertTrue(result);
    }

    @Test
    void testRemoveRole() {
        // Arrange
        RoleManager roleManager = new RoleManager();
        String roleName = "admin";

        // Act
        boolean result = roleManager.removeRole(roleName);

        // Assert
        assertTrue(result);
    }

    // Add more test methods for other functionalities
}