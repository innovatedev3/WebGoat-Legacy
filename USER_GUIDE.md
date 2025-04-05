# WebGoat-Legacy User Guide

## Introduction
WebGoat-Legacy is an educational tool designed to teach web application security. This guide will help you set up, use, and explore the features of the application.

## Table of Contents
- [Introduction](#introduction)
- [System Requirements](#system-requirements)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Features](#features)
- [Troubleshooting](#troubleshooting)
- [FAQ](#faq)
- [Contact and Support](#contact-and-support)

## System Requirements
- Java 17 or higher
- Maven 3.6 or higher
- A modern web browser (e.g., Chrome, Firefox)

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/your-repo/webgoat-legacy.git
   ```
2. Navigate to the project directory:
   ```
   cd WebGoat-Legacy
   ```
3. Build and run the application:
   ```
   mvn clean install
   mvn spring-boot:run
   ```

## Getting Started
1. Open your browser and navigate to `http://localhost:8080`.
2. Log in with the default credentials:
   - Username: `guest`
   - Password: `guest`
3. Explore the lessons and challenges to learn about web application security.

## Features
- Hands-on lessons for common web vulnerabilities (e.g., SQL Injection, XSS).
- Interactive challenges to test your skills.
- Detailed explanations and solutions for each lesson.

## Troubleshooting
- **Issue**: Application fails to start.
  - **Solution**: Ensure Java and Maven are installed and properly configured.
- **Issue**: Unable to log in.
  - **Solution**: Verify the default credentials or reset the database.

## FAQ
- **Q**: Can I use this application in a production environment?
  - **A**: No, WebGoat-Legacy is intentionally insecure and should only be used for educational purposes.
- **Q**: How do I reset the lessons?
  - **A**: Restart the application or reset the database.

## Contact and Support
For questions or issues, please open an issue on GitHub or contact us at support@example.com.