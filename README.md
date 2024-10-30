# Brieffly

**Brieffly** is an interactive platform designed to help students memorize and test their understanding of complex formulas and concepts in a dynamic way. Rather than simply summarizing formulas, Brieffly transforms learning into an engaging experience with customizable quizzes that prompt users to recall and apply formulas accurately. Built especially for competitive exams like IIT JEE, Brieffly generates questions using AI, ensuring that each quiz is unique and prevents students from memorizing fixed answers. This adaptive approach helps students truly understand and retain knowledge, as they can’t rely on rote memorization.

## Overview

**Brieffly** combines memorization techniques with quizzes to enhance learning, focusing on key formulas and concepts. It prompts users to define concepts, write down formulas, and take tests for better retention, improving their revision and test readiness.

### Features

#### **Frontend**:
- A user-friendly interface where users can take quizzes, test their memory, and check their understanding of formulas.
- A quiz feature where users are tested to recall and fill in formulas in **latex for ease of user**.
- Personalized testing experience based on the user’s progress and formula history.
  
#### **Backend**:
- Processes requests from the frontend, interacts with the Gemini API for generating test content, and interacts with Appwrite DB to track user progress and responses.
- Handles formula generation, test creation, and user-specific performance tracking.

#### **Gemini API Integration**:
- Used to dynamically generate formula-based quizzes, testing users on their ability to define and recall formulas accurately.
  
#### **Appwrite Database**:
- Stores user-related data, including test progress, past formula requests, and quiz history.
- Tracks user performance to customize future tests based on their strengths and weaknesses.

#### **Client Interaction**:
- Users start by selecting chapters or topics for their quizzes.
- The backend processes the request and uses the Gemini API to generate quiz questions focused on concept definitions and formula recall.
  
#### **Quiz Generation**:
- Users are presented with interactive quizzes where they are prompted to either define concepts or write down formulas from memory.
- Quiz difficulty adjusts dynamically based on the user’s progress.
  
#### **Database Storage**:
- User performance, including their scores, correct answers, and mistakes, are tracked in the Appwrite database.
- When the DB remains idle for 60 minutes, it is automatically cleared to optimize storage, but users can regenerate content and resume testing at any time.

## API Overview

#### **Gemini API**:
- Powers formula quiz generation, creating unique and challenging questions for users based on their topic selection.

#### **Appwrite DB**:
- Manages user-specific data, storing quiz results, formula recall scores, and user progress to provide a personalized learning experience.

## Development Setup

Clone the repository:

```bash
git clone https://github.com/hegdeadithyak/Brieffly.git
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Deployment

**Brieffly** is designed for easy cloud deployment and is currently deployed using services like Vercel for seamless scalability and performance.

## Contributing

Contributions are welcome! Whether it’s feature suggestions, bug reports, or code contributions, feel free to submit issues or pull requests on our GitHub repository. Let’s work together to enhance the memorization experience for students!

## License

**Brieffly** is open-source and available under the MIT License.


GitHub Repo: [Brieffly](https://github.com/hegdeadithyak/Brieffly)

---

# Video


https://github.com/user-attachments/assets/174f521f-fb64-4964-a96a-840d277f2077




## Contributors

- **Adithya Hegde Kota** ([@hegdeadithyak](https://github.com/hegdeadithyak))
  ![hegdeadithyak's Commits](https://github.com/user-attachments/assets/ec9bae78-1e78-4ec8-8703-59475a13f96b)
- **Honey Gyani** ([@honeygyani](https://github.com/honeygyani)![honeygyani's Commits](https://github.com/user-attachments/assets/c8884f30-2c48-4aea-b892-03951d11470b)

  
