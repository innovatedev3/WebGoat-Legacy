import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ServiceManager {
    private static final Logger logger = LoggerFactory.getLogger(ServiceManager.class);

    public void startService(String serviceName) {
        try {
            // Logic to start service
        } catch (Exception e) {
            logger.error("Failed to start service: {}", serviceName, e);
        }
    }

    public void stopService(String serviceName) {
        try {
            // Logic to stop service
        } catch (Exception e) {
            logger.error("Failed to stop service: {}", serviceName, e);
        }
    }
}