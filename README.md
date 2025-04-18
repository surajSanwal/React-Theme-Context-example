# React Native Context Example

This project demonstrates the use of React Context in a React Native-like environment. It includes a simple theme toggling feature to switch between light and dark modes, showcasing how to manage global state using Context.

---

## Features

- **React Context**: Implements a global state management system using React Context.
- **Theme Toggle**: Allows users to toggle between light and dark themes.
- **Reusable Components**: Includes reusable components like `Button` for better modularity.
- **TypeScript**: Provides type safety and improved developer experience.
- **Vite**: Uses Vite for fast development and build processes.

---

## Project Structure

```
src/
├── components/
│   ├── Button.tsx          # Reusable button component
│   ├── ToggleTheme.tsx     # Component to toggle themes
├── context/
│   └── ThemeContext.tsx    # ThemeContext for managing theme state
├── App.tsx                 # Main application component
├── styles.css              # Styling for light and dark themes
vite.config.ts              # Vite configuration
tsconfig.json               # TypeScript configuration
```

---

## Getting Started

### Prerequisites

- Node.js (>= 18.0.0)
- PNPM (preferred package manager)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/surajSanwal/React-Theme-Context-example
    cd React-Theme-Context-example
    ```

2. Install dependencies:
    ```bash
    pnpm install
    ```

3. Start the development server:
    ```bash
    pnpm dev
    ```

    The app will be available at [http://localhost:5173](http://localhost:5173).

4. Create a production build:
    ```bash
    pnpm build
    ```

5. Preview the production build:
    ```bash
    pnpm preview
    ```

---

## Components

### `App.tsx`
The main application component that provides the `ThemeContext` and renders the `ToggleTheme` component.

### `ThemeContext.tsx`
Defines the `ThemeContext` for managing the light/dark theme state.

### `ToggleTheme.tsx`
A component that uses the `ThemeContext` to toggle between light and dark themes.

### `Button.tsx`
A reusable button component styled based on the current theme.

---

## Styling

The project uses a simple CSS file (`styles.css`) for styling. It includes styles for both light and dark themes.

---

## Configuration

### Vite
The project uses Vite for development and build processes. Configuration can be found in `vite.config.ts`.

### TypeScript
TypeScript configuration is defined in `tsconfig.json`.

---

## License

This project is licensed under the MIT License.

---

## Author

- **Suraj Sanwal**  
  GitHub: [https://github.com/surajSanwal](https://github.com/surajSanwal)  
  Repository: [React-Theme-Context-example](https://github.com/surajSanwal/React-Theme-Context-example)
