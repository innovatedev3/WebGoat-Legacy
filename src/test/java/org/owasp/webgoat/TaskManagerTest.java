import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class TaskManagerTest {

    @Test
    void testAddTask() {
        // Arrange
        TaskManager taskManager = new TaskManager();
        String taskName = "GenerateReport";

        // Act
        boolean result = taskManager.addTask(taskName);

        // Assert
        assertTrue(result);
    }

    // Add more test methods for other functionalities
}