import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

/**
 * Unit tests for the {@link EventLogger} class.
 * This class verifies the functionality of logging events.
 */
class EventLoggerTest {

    /**
     * Tests the {@link EventLogger#logEvent(String)} method.
     * Ensures that an event is successfully logged.
     */
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