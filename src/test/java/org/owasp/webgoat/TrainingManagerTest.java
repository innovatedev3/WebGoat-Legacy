import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class TrainingManagerTest {

    @Test
    void testAddTraining() {
        // Arrange
        TrainingManager trainingManager = new TrainingManager();
        String trainingTitle = "Cybersecurity Basics";

        // Act
        boolean result = trainingManager.addTraining(trainingTitle);

        // Assert
        assertTrue(result);
    }

    // Add more test methods for other functionalities
}