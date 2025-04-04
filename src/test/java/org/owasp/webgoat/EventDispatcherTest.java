import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class EventDispatcherTest {

    @Test
    void testDispatchEvent() {
        // Arrange
        EventDispatcher eventDispatcher = new EventDispatcher();
        String event = "UserRegistered";

        // Act
        boolean result = eventDispatcher.dispatchEvent(event);

        // Assert
        assertTrue(result);
    }

    // Add more test methods for other functionalities
}