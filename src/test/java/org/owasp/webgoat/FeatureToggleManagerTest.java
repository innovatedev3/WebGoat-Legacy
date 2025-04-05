import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class FeatureToggleManagerTest {

    @Test
    void testEnableFeature() {
        // Arrange
        FeatureToggleManager featureToggleManager = new FeatureToggleManager();
        String featureName = "DarkMode";

        // Act
        boolean result = featureToggleManager.enableFeature(featureName);

        // Assert
        assertTrue(result);
    }

    // Add more test methods for other functionalities
}