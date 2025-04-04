import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class TrainingTest {

    @Test
    void testAddTraining() {
        // Arrange
        Training training = new Training();
        String trainingTitle = "Test Training";

        // Act
        boolean result = training.addTraining(trainingTitle);

        // Assert
        assertTrue(result);
    }

    // Add more test methods for other functionalities
}