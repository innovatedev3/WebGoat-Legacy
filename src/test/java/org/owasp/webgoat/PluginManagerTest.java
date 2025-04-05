import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class PluginManagerTest {

    @Test
    void testInstallPlugin() {
        // Arrange
        PluginManager pluginManager = new PluginManager();
        String pluginName = "SecurityPlugin";

        // Act
        boolean result = pluginManager.installPlugin(pluginName);

        // Assert
        assertTrue(result);
    }

    // Add more test methods for other functionalities
}