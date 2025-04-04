import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class CacheManagerTest {

    @Test
    void testAddToCache() {
        // Arrange
        CacheManager cacheManager = new CacheManager();
        String key = "user123";
        String value = "John Doe";

        // Act
        boolean result = cacheManager.addToCache(key, value);

        // Assert
        assertTrue(result);
    }

    // Add more test methods for other functionalities
}