import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class FeatureManager {
    private static final Logger logger = LoggerFactory.getLogger(FeatureManager.class);

    public void enableFeature(String featureName) {
        try {
            // Logic to enable feature
        } catch (Exception e) {
            logger.error("Failed to enable feature: {}", featureName, e);
        }
    }

    public void disableFeature(String featureName) {
        try {
            // Logic to disable feature
        } catch (Exception e) {
            logger.error("Failed to disable feature: {}", featureName, e);
        }
    }
}