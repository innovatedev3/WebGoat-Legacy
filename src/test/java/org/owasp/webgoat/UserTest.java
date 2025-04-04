import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class UserTest {

    @Test
    void testUserInitialization() {
        // Arrange
        User user = new User("testUser", "password123");

        // Act
        String username = user.getUsername();

        // Assert
        assertEquals("testUser", username);
    }

    // Add more test methods for other functionalities
}