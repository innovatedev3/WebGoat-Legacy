import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class TaskManager {
    private static final Logger logger = LoggerFactory.getLogger(TaskManager.class);

    public void executeTask(String taskName) {
        try {
            // Logic to execute task
        } catch (Exception e) {
            logger.error("Failed to execute task: {}", taskName, e);
        }
    }
}