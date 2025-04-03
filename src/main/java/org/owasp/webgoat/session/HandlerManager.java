import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class HandlerManager {
    private static final Logger logger = LoggerFactory.getLogger(HandlerManager.class);

    public void handleRequest(String request) {
        try {
            // Logic to handle request
        } catch (Exception e) {
            logger.error("Failed to handle request: {}", request, e);
        }
    }
}