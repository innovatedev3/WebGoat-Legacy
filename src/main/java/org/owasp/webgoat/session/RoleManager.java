import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

// Example of using switch expressions
public class RoleManager {
    private static final Logger logger = LoggerFactory.getLogger(RoleManager.class);

    public String getRoleDescription(String role) {
        return switch (role) {
            case "admin" -> "Administrator with full access";
            case "user" -> "Regular user with limited access";
            case "guest" -> "Guest with minimal access";
            default -> "Unknown role";
        };
    }

    public void assignRole(String username, String role) {
        try {
            // Logic to assign role
        } catch (Exception e) {
            logger.error("Failed to assign role '{}' to user '{}'.", role, username, e);
        }
    }

    public void removeRole(String username, String role) {
        try {
            // Logic to remove role
        } catch (Exception e) {
            logger.error("Failed to remove role '{}' from user '{}'.", role, username, e);
        }
    }
}