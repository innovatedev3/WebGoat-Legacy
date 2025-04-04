import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class TokenManagerTest {

    @Test
    void testGenerateToken() {
        // Arrange
        TokenManager tokenManager = new TokenManager();
        String userId = "user123";

        // Act
        String token = tokenManager.generateToken(userId);

        // Assert
        assertNotNull(token);
        assertTrue(token.contains(userId));
    }

    // Add more test methods for other functionalities
}