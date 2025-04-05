import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class SchedulerManagerTest {

    @Test
    void testScheduleTask() {
        // Arrange
        SchedulerManager schedulerManager = new SchedulerManager();
        String taskName = "DatabaseCleanup";
        String cronExpression = "0 0 * * *";

        // Act
        boolean result = schedulerManager.scheduleTask(taskName, cronExpression);

        // Assert
        assertTrue(result);
    }

    // Add more test methods for other functionalities
}