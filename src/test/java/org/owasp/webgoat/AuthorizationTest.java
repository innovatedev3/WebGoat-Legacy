import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class AuthorizationTest {

    @Test
    void testAccessControl() {
        // Arrange
        Authorization authz = new Authorization();
        String role = "admin";
        String resource = "dashboard";

        // Act
        boolean hasAccess = authz.hasAccess(role, resource);

        // Assert
        assertTrue(hasAccess);
    }

    // Add more test methods for other functionalities
}