import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class MetricsManagerTest {

    @Test
    void testRecordMetric() {
        // Arrange
        MetricsManager metricsManager = new MetricsManager();
        String metricName = "PageLoadTime";
        double value = 1.23;

        // Act
        boolean result = metricsManager.recordMetric(metricName, value);

        // Assert
        assertTrue(result);
    }

    // Add more test methods for other functionalities
}