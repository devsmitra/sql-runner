# Online SQL Queries Runner

## Introduction

This project is a web-based application that allows users to run SQL queries directly in their browser. Built using React and TypeScript, the application features a mock backend with predefined datasets. Users can execute SQL queries and view results in a structured format. The application is deployed on Vercel and can be accessed [here](https://sql-runner-pi.vercel.app/).

## Data Mocking

All the data in the application is mocked and predefined. The application does not connect to any real database. This is done to simulate a real-world scenario where users can run queries on a database without having to set up a backend server.

## Demo

### [Live Preview Link](https://sql-runner-pi.vercel.app/)

### [Demo Video](https://youtu.be/SnrYZb5P5L4)

## Key Features

### System Overview

- System Health Page to check application and backend server status.
- List of databases and tables for easy selection.
- Predefined queries for each table, accessible by clicking the table name.
- Schema view for each table, accessible via the eye icon.

### Database Views

- **List of Database Views**:
  - View all available database views.
  - By clicking on a database view, users can see the list of tables available in that view.
  - By clicking on a table, users can see the schema of that table.

### Query Execution & Management

- **Tab-based view**: Execute multiple queries while maintaining context.
- **Rich SQL Editor**:
  - Syntax highlighting and auto-completion.
  - Quick execution with keyboard shortcut (**Ctrl + Enter**).
  - **Options**:
    - **Run Query**: Executes the SQL query and displays the result in a structured format.
    - **Clear Query**: Clears the query editor to allow users to start fresh without manually deleting text.
    - **Save Query**: Saves the current query for future reference, allowing easy access to frequently used SQL commands.
    - **Expand Editor**: Toggles between full-screen and normal view to enhance readability and user experience.
- **Results Display**:
  - Table view with searching capabilities.
  - Export results in CSV or JSON format for easy data sharing and analysis.
  - Display of total and visible result counts to provide clarity on query outputs.

### Saved Queries & History

- **Saved Queries**:
  - View all saved queries in a structured list.
  - Load saved queries into the editor for execution with a single click.
  - Delete saved queries with confirmation prompts to prevent accidental removal.
  - Receive toast notifications for query-related actions.
- **Query History**:
  - Automatically log all executed queries with timestamps for easy tracking.
  - Manage query history with options to delete entries after confirmation.
  - Reload past queries into the editor by clicking on them for re-execution.

### Performance Enhancements

- **Lazy loading**: Load components only when needed, ensuring faster initial load times and better responsiveness.
- **Local storage**: Store user queries locally for persistence across sessions, enabling seamless continuation of work.
- **Infinite scroll & virtualization**: Efficiently handle large datasets, allowing smooth scrolling and quick access to results without performance degradation.
- **Dynamic routing**: Maintain session state and enable query sharing via URLs, limited to database views due to the mock backend setup.

## Frameworks & Libraries Used

- **React** - A powerful frontend library for building interactive user interfaces.
- **TypeScript** - Provides static type checking to enhance code reliability and maintainability.
- **Tailwind CSS + DaisyUI** - A utility-first CSS framework with component-based styling for a modern UI.
- **react-codemirror** - A lightweight, easy-to-use code editor for SQL queries with syntax highlighting and auto-completion.
- **react-virtuoso** - A virtualized list component that optimizes rendering for large datasets, improving performance and efficiency.

## Performance & Optimization

- **Lighthouse Score**: 100%
<img width="1725" alt="Screenshot 2025-03-09 at 12 31 14 AM" src="https://github.com/user-attachments/assets/0ec0300c-85f9-4e4c-9d6d-394f10267873" />
<img width="1721" alt="Screenshot 2025-03-09 at 12 31 00 AM" src="https://github.com/user-attachments/assets/03283f10-b9cd-434e-93b4-7cc1f0770dcd" />


- Optimized for fast performance with a lightweight architecture.
- Lazy-loaded components to improve responsiveness and initial load times by loading only necessary elements when required.
- Infinite scroll and virtualization for efficient rendering of large datasets, ensuring smooth query execution and result display.

## Additional Enhancements

- Tooltip for action buttons to provide context and guidance to users.
- Robust error handling to prevent crashes and unexpected failures.
- System health page to monitor application status and ensure smooth operation.
- Toast notifications for key user actions to provide instant feedback.
- Confirmation dialogs for query deletions to prevent accidental data loss.
- Keyboard shortcuts for improved efficiency and faster query execution.

## Future Enhancements

- **Responsive Design**: Optimize for mobile screens to improve usability across devices, enabling users to run queries on the go. Currently, the application is designed with the assumption that users will primarily access it on desktops, laptops, or tablets.
- **Dark Mode**: Introduce a dark theme for a more comfortable viewing experience, especially in low-light environments.
- **UX Improvements**: Enhance overall usability, navigation, and design consistency.
- **Data Import**: Allow users to import external datasets for deeper analysis.
- **Accessiblity**: Improve accessibility features to cater to a wider audience, including users with disabilities.
- **I18n Support**: Add multi-language support to make the application accessible to users from different regions.

## Development

### Prerequisites

- Latest version of Node.js installed.
- A code editor (e.g., Visual Studio Code).
- A web browser to run the application.

### Development Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/devsmitra/sql-runner.git
   ```
2. Navigate to the project folder:
   ```sh
   cd sql-runner
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
5. Open [http://localhost:5173/](http://localhost:5173/) in your browser to view the application.


### Directory Structure
    .
    ├── src                       # Source files
    │   ├── assets                # Icons, fonts, and other assets
    │   │     └── Icons           # Icons directory
    │   ├── components            # Reusable components
    │   │     ├── Layout          # Layout components
    │   │     ├── QueryEditor     # SQL query editor components
    │   │     ├── DataGrid        # Data grid components
    │   │     ├── List            # List components
    │   │     ├── Modal           # Modal components
    │   │     ├── Tabs            # Tab components
    │   │     ├── Toast           # Toast components
    │   │     └── ...             # Other components
    │   ├── contexts              # Context providers
    │   ├── pages                 # Application pages
    │   │     ├── Dashboard       # Dashboard page
    │   │     ├── Database        # Database views page
    │   │     └── SaveAndHistory  # Saved queries and history page
    │   ├── routes                # Application routes
    │   │     ├── databases       # Database views routes
    │   │     ├── saveAnHistory   # Saved queries and history routes
    │   │     └── ...             # Other routes
    │   ├── services              # API services
    │   │     ├── database        # Database service
    │   │     ├── query           # Query service
    │   │     └── storage         # Local storage service
    │   ├── utils                 # Utility functions
    │   │     ├── debounce        # Debounce utility
    │   │     └── files           # File utility for exporting data
    │   ├── App.css               # Application styles and tailwind CSS
    │   └── App.tsx               # Main application component
    ├── public                    # Public files
    ├── .gitignore
    ├── package.json
    ├── README.md
    └── tsconfig.json
