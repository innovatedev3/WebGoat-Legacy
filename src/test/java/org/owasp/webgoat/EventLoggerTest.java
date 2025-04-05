import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class EventLoggerTest {

    @Test
    void testLogEvent() {
        // Arrange
        EventLogger eventLogger = new EventLogger();
        String event = "User logged in";

        // Act
        boolean result = eventLogger.logEvent(event);

        // Assert
        assertTrue(result);
    }

    // Add more test methods for other functionalities
}