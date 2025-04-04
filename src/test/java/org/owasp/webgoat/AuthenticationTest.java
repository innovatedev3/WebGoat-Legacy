import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class AuthenticationTest {

    @Test
    void testLoginSuccess() {
        // Arrange
        Authentication auth = new Authentication();
        String username = "testUser";
        String password = "password123";

        // Act
        boolean result = auth.login(username, password);

        // Assert
        assertTrue(result);
    }

    // Add more test methods for other functionalities
}