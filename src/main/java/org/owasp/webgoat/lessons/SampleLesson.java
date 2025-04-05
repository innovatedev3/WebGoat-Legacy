package org.owasp.webgoat.lessons;

import org.owasp.webgoat.session.WebSession;
import org.owasp.webgoat.session.WebgoatContext;
import java.io.FileWriter;
import java.io.IOException;

public class SampleLesson extends Lesson {

    @Override
    public String getDefaultLessonPlan() {
        return "lessons/sample/sample.html";
    }

    @Override
    public Category getDefaultCategory() {
        return Category.INJECTION;
    }

    @Override
    public void handleRequest(WebSession session, WebgoatContext context) {
        // Add lesson logic here
    }

    @Override
    public String getTitle() {
        return "Sample Lesson";
    }

    public String exportLessonData() {
        return "{\"title\": \"Sample Lesson\", \"category\": \"Injection\"}";
    }

    public void exportData(String data, String filePath) {
        try (FileWriter writer = new FileWriter(filePath)) {
            writer.write(data);
            System.out.println("Data exported successfully to " + filePath);
        } catch (IOException e) {
            System.err.println("Error exporting data: " + e.getMessage());
        }
    }
}