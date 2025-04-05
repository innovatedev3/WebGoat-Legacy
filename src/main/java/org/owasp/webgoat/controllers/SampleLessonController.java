package org.owasp.webgoat.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/sample")
public class SampleLessonController {

    @GetMapping("/details")
    public String getLessonDetails() {
        return "Sample Lesson: This is a REST API endpoint for the Sample Lesson.";
    }
}