package org.owasp.webgoat.lessons;

import org.owasp.webgoat.session.WebSession;
import org.owasp.webgoat.session.WebgoatContext;

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
}