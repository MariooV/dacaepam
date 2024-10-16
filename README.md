# Page Component Requirements

## Task description 

You will create a "Page" component that includes a header, a footer, and a photo gallery. This assignment will give you some practice using component composition, state management, and responsive design in React

**Create a Page Component:**

-   This component should include three child components: `Header`, `Gallery`, and `Footer`.
-   The `Header` and` Footer` components must accept a header prop.
-   If the header prop is not specified, the `Header` component should default to "Header Header" and the `Footer` component should default to "Footer Header".

**Create a `PhotoCard` Component:**

This component should contain:

-   A location icon
-   The name of the location where the photo was taken
-   A photograph
-   A description of the photo
-   A "Like" button
-   A display for the number of likes

Users should be able to like a photo by clicking the "Like" button, which will increase the number of likes. Use the `useState` hook to manage the state of likes.
This component must contain the property `data-testid="photo-card"`.
This component will accept photo information via props.

**Create a Gallery Component:**

-   This component will display a collection of `PhotoCard` components.
-   Use the map function to render the photo cards from an array of photo data.

**Mock Data:**

Use the given layout data located in your project's **mock** folder. Feel free to add additional data as needed.

**Responsive design/layout requirements:**

Ensure that no more than four photo cards are displayed per row when the screen width is 1280 pixels or larger.

The expected final result should be as follows:

![Expected final result](https://autocode.git.epam.com/campus_javascript/react/react-assessment/react-state-and-props/-/blob/main/public/task-result.png?ref_type=heads)

## Where to put your code?
The foundation of your `React` application has already been prepared. This means that all the required dependencies have been added and everything is already set up, so you don't need to start the `React/Next` project by yourself.
Predefined files:
•	`src/App.tsx`: The main component of the application component. You are expected to render the components you create inside it.
•	`index.html`: The HTML page that renders the application;
•	`src/main.tsx`: The entry point for the application. Here, you must put the logic for rendering the `<App>` component and putting it on the page. By default, it is empty.
•	You can see that the other files have their own purposes, so please don't delete them.


### Please read the recommendations below carefully:
1. **You must import and render your component(s) inside the src/App.tsx file; otherwise, we can't verify your solution!**
2. **You must render the `<App>` component inside the element with the ID `root`! All the logic for putting the `<App>` component inside the `index.html` page must be written in the `src/main.tsx` file! Otherwise, we can't verify your solution.**
•	We suggest creating separate files for the components you are writing. For instance, if the task description says to create a header component, create a file `src/components/Header.tsx`, put all the code inside, and export the component as a result.
Then, import your new component to `src/App.tsx` and render it inside—for example, like this:

`src/components/Header.tsx`:

    ```tsx
    function Header() {
        return <header>Hello, I am header</header>;
    }

    export default Header;
    ```

    `src/App.tsx`:

    ```tsx
    import Header from "./components/Header";

    function App() {
        return <Header />;
    }

    export default App;
    ```

3. If the task says you need to apply styles, please import them directly to a component file like this:

    `src/components/MyComponent.css`:

    ```css
    .my-component {
        color: red;
    }
    ```

    `src/components/MyComponent.tsx`:

    ```tsx
    import "./MyComponent.css";

    function MyComponent() {
        return <div className="my-component">Hello, I am component</div>;
    }

    export default MyComponent;
    ```

4. To run the application in development mode, just run it in the terminal (`command line, Bash, Git Bash`):

    ```bash
    npm start
    ```

    It starts the application and updates it when you change something. See [Local Development](./docs/LOCAL_DEVELOPMENT_REACT_NEXT.md) for more information.


