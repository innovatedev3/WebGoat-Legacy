import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class AnnouncementsTest {

    @Test
    void testAddAnnouncement() {
        // Arrange
        Announcements announcements = new Announcements();
        String announcementMessage = "Test announcement message";

        // Act
        boolean result = announcements.addAnnouncement(announcementMessage);

        // Assert
        assertTrue(result);
    }

    // Add more test methods for other functionalities
}