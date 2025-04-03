import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class HelperManager {
    private static final Logger logger = LoggerFactory.getLogger(HelperManager.class);

    public void executeHelperTask(String taskName) {
        try {
            // Logic to execute helper task
        } catch (Exception e) {
            logger.error("Failed to execute helper task: {}", taskName, e);
        }
    }
}