# Brieffly

Brieffly is an innovative platform designed to summarize complex formulas and concepts into concise, easy-to-understand cards. The app is built to help students quickly revise formulas and key concepts, especially for competitive exams like IIT JEE, by generating summaries in less than 60 words per formula.
---
## Overview
![briefflyoverview](https://github.com/user-attachments/assets/b60c53fd-6a0b-45b6-8105-acb4b9ea4e38)
![backendbrieffly](https://github.com/user-attachments/assets/20475e6b-f208-44e4-b8f2-b7c66db04bb9)
---
## Features

- **Frontend**: The user interface, which allows users to interact with the platform, request formulas, and view generated cards.
- **Backend**: Handles the processing of requests from the frontend, interacts with APIs and databases, and returns the necessary data to the frontend.
- **Gemini API Integration**: The Gemini API is used to generate and return formula summaries based on the chapter requests sent by the client.
- **Appwrite Database**: Manages and stores user data, including formula requests, ensuring that personalized data can be fetched and displayed efficiently.
- **Automatic DB Clearance**: If the database is inactive for 60 minutes, it clears itself to save space and ensures data regeneration when needed.

## System Flow

1. **Client Interaction**: 
   - The client sends a request for a specific chapter.
   - The backend processes this request and interacts with the Gemini API.
   
2. **Formula Generation**:
   - The first few cards are generated quickly and sent to the client.
   - The Gemini API gradually increases its speed for subsequent requests.
   
3. **Database Storage**:
   - If the requested cards already exist in the database, they are retrieved from there and sent back to the client.
   - If the DB remains idle for 60 minutes, it is automatically cleared. Once cleared, the content will regenerate if requested again.

## API Overview

- **Gemini API**: Handles formula generation and card creation based on client chapter requests.
- **Appwrite DB**: Stores user-related data and tracks formula requests to improve response times for repeat requests.

## Development Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/hegdeadithyak/Brieffly.git
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

## Deployment

Brieffly is designed to work seamlessly on cloud platforms and can be deployed using services like **Vercel**.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests on our GitHub repository. Let’s work together to improve the learning experience!

## License

Brieffly is open-source and available under the MIT License.
