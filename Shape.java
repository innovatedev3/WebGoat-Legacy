// Refactored to use sealed classes
public sealed class Shape permits Circle, Rectangle {
    // ...existing code...
}

public final class Circle extends Shape {
    // ...existing code...
}

public final class Rectangle extends Shape {
    // ...existing code...
}