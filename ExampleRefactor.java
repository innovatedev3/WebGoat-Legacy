// Refactored to use Java 17 features
// Example: Using switch expressions
switch (day) {
    case MONDAY, FRIDAY, SUNDAY -> System.out.println("Weekend");
    case TUESDAY -> System.out.println("Tuesday");
    default -> System.out.println("Midweek");
}

// Example: Using text blocks
String json = """
    {
        "name": "John",
        "age": 30
    }
""";

// Example: Pattern matching for instanceof
if (obj instanceof String s) {
    System.out.println(s.toUpperCase());
}

// Example: Using records
public record Person(String name, int age) {}

// Example: Using sealed classes
public sealed class Shape permits Circle, Rectangle {}
public final class Circle extends Shape {}
public final class Rectangle extends Shape {}

// Example: Enhanced try-with-resources
try (var resource = new BufferedReader(new FileReader("file.txt"))) {
    System.out.println(resource.readLine());
}

// Example: Stream API enhancements
List<String> list = Stream.of("a", "b", "c").toList();

// Example: Compact number formatting
NumberFormat formatter = NumberFormat.getCompactNumberInstance(Locale.US, NumberFormat.Style.SHORT);
System.out.println(formatter.format(1000));

// Example: Immutable collections
List<String> immutableList = List.of("a", "b", "c");