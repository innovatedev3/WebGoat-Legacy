import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class AnnouncementsManagerTest {

    @Test
    void testCreateAnnouncement() {
        // Arrange
        AnnouncementsManager manager = new AnnouncementsManager();
        String announcement = "System maintenance scheduled for tomorrow.";

        // Act
        boolean result = manager.createAnnouncement(announcement);

        // Assert
        assertTrue(result);
    }

    // Add more test methods for other functionalities
}