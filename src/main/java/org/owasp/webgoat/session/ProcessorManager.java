import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ProcessorManager {
    private static final Logger logger = LoggerFactory.getLogger(ProcessorManager.class);

    public void processTask(String taskName) {
        try {
            // Logic to process task
        } catch (Exception e) {
            logger.error("Failed to process task: {}", taskName, e);
        }
    }
}