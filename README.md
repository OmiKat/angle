# Easy Task (Angular)

Easy Task is a simple task management app built with Angular 21 and standalone components.
It lets you select a user, view that user's tasks, add new tasks through a modal dialog, and mark tasks as complete.

## Features

- User list with active user selection state
- Per-user task filtering
- Add task dialog with title, summary, and due date
- Complete task action to remove a task from the list
- In-memory task management via a shared Angular service

## Tech Stack

- Angular 21 (standalone components)
- TypeScript
- Angular Forms (`ngModel`) for the add-task form
- Vitest via Angular's unit test builder

## Prerequisites

- Node.js (LTS recommended)
- npm

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Open the app:

```text
http://localhost:4200/
```

## Available Scripts

- `npm start`: Run the app in development mode (`ng serve`)
- `npm run build`: Build the app for production
- `npm run watch`: Build in watch mode using development configuration
- `npm test`: Run unit tests

## Project Structure

```text
src/
	app/
		app.ts                  # Root component (user selection + task area)
		app.html                # Root template
		header/                 # Top header component
		user/                   # User item component
		task/                   # Task feature area
			task.ts               # Task container per selected user
			tasks.service.ts      # In-memory task state and task operations
			new-task/             # Add task dialog component
			usertasks/            # Single task item component
		ui/
			card/                 # Reusable card wrapper component
		dummyUsers.ts           # Seed users
		dummyTask.ts            # Seed tasks
	assets/
		users/                  # User avatars
```

## App Behavior

- The root component (`App`) renders the list of users.
- Selecting a user displays that user's tasks.
- Clicking `Add Task` opens a centered dialog.
- Submitting the form creates a task in `TaskService` and closes the dialog.
- Clicking `Complete` removes the task from the in-memory list.

## Testing Notes

Run tests with:

```bash
npm test
```

The default starter test in `src/app/app.spec.ts` includes a title assertion that may not match this project's current UI text. Update the assertion if needed.

## Build

Create a production build with:

```bash
npm run build
```

Build output is generated in the `dist/` directory.
"# angle" 
