import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class FeedbackManagerTest {

    @Test
    void testSubmitFeedback() {
        // Arrange
        FeedbackManager feedbackManager = new FeedbackManager();
        String feedbackMessage = "Great training session!";

        // Act
        boolean result = feedbackManager.submitFeedback(feedbackMessage);

        // Assert
        assertTrue(result);
    }

    // Add more test methods for other functionalities
}