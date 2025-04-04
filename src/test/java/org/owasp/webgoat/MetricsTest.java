import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class MetricsTest {

    @Test
    void testRecordMetric() {
        // Arrange
        Metrics metrics = new Metrics();
        String metricName = "response_time";
        double value = 123.45;

        // Act
        boolean result = metrics.recordMetric(metricName, value);

        // Assert
        assertTrue(result);
    }

    // Add more test methods for other functionalities
}