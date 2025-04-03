// Refactored to use switch expressions
public String getDayType(String day) {
    return switch (day.toLowerCase()) {
        case "saturday", "sunday" -> "Weekend";
        default -> "Weekday";
    };
}