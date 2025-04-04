import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class SchedulerTest {

    @Test
    void testScheduleTask() {
        // Arrange
        Scheduler scheduler = new Scheduler();
        String taskName = "Backup";
        String cronExpression = "0 0 * * *";

        // Act
        boolean result = scheduler.scheduleTask(taskName, cronExpression);

        // Assert
        assertTrue(result);
    }

    // Add more test methods for other functionalities
}