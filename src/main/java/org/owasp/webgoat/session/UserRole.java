// Example of using sealed classes
public sealed interface UserRole permits AdminRole, UserRole, GuestRole {
}

public final class AdminRole implements UserRole {
    // ...existing code...
}

public final class UserRole implements UserRole {
    // ...existing code...
}

public final class GuestRole implements UserRole {
    // ...existing code...
}