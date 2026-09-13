      Dev Stack Builder

  Dev Stack Builder is a responsive React and TypeScript website that helps developers explore modern technologies and create their own personalized development stack. Users can browse different technologies, view their category, difficulty level, rating, and add their preferred technologies to a personal stack.

    Technologies Used
      React.js
      TypeScript
      Vite
      Tailwind CSS
      React-Toastify
      JSON
      HTML5
      CSS3
      JavaScript (ES6+)


          Features
    Explore Technologies
    Users can explore modern frontend, backend, database, language, styling, DevOps, and development tools.


      Build Your Own Stack
    Users can add technologies to "Your Stack" and remove individual technologies or remove all selected technologies.


    Responsive Design
  The website is fully responsive and works on desktop, tablet, and mobile devices.


  1.What is JSX, and why is it used in React?

  JSX is a syntax extension that lets you write HTML like code inside JavaScript.

  JSX makes React components easier to understand because we can write the UI structure and JavaScript logic together.



  2. What is the difference between Props and State?
  Props and State are both used to handle data in React, but they work differently.

Props:

Props are used to pass data from a parent component to a child component.
Props are read-only.
A child component should not directly change its props.

State:

State is used to store data that can change inside a component.
When state changes, React re-renders the component.
State is commonly managed using the useState hook.

For example, in this project, technology data and selected stack data are managed using state, while technology information is passed to components through props.


3. What is the useState hook, and how is it used in this project?

useState is a React Hook used to create and manage state inside a functional component.

In this project, useState is used for storing:

Technology data
Loading status
Selected technologies in the stack
Mobile menu state

For example:

const [stack, setStack] = useState<Technology[]>([]);

Here, stack stores the selected technologies and setStack updates the stack.

4. What is the useEffect hook, and why is it used for JSON data?

useEffect is a React Hook that allows us to perform side effects in a component.

In this project, useEffect is used to fetch technology data from the technologies.json file when the application loads.

For example:

useEffect(() => {
  fetch("/technologies.json")
    .then((response) => response.json())
    .then((data) => {
      setTechnologies(data);
    });
}, []);

The empty dependency array [] means the effect runs when the component is mounted.

5. What is a unique key in React, and why is it important when using map()?

A key is a unique value that React uses to identify individual elements when rendering a list.

In this project, each technology has a unique id, so it is used as the key:

{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}

Using a unique key helps React efficiently update, add, or remove list items without unnecessarily re-rendering other items.

6. What is conditional rendering? Give an example from this project.

Conditional rendering means displaying different UI elements depending on a condition.

In this project, the "Your Stack" section uses conditional rendering.

If the stack is empty, an empty-state message is shown:

{stack.length === 0 ? (
  <p>Your stack is empty</p>
) : (
  <div>
    {/* Selected technologies */}
  </div>
)}

So, when there are no selected technologies, the user sees the empty state. When technologies are added, the selected technology list is displayed.

7. How do you pass data from a parent component to a child component? How can a child component communicate with its parent?

In React, data is passed from a parent component to a child component using props.

For example, the parent can pass technology data to the TechnologyGrid component:

<TechnologyGrid
  technologies={technologies}
  stack={stack}
  onAdd={addToStack}
/>

Here, technologies, stack, and onAdd are passed as props.

A child component can communicate with its parent by receiving a function through props and calling that function.

For example:

<TechnologyCard
  technology={technology}
  onAdd={onAdd}
/>

When the user clicks the Add to Stack button inside TechnologyCard, the child calls onAdd(technology). This sends the action back to the parent component, where the stack state is updated.

Project Structure
dev-stack/
├── public/
│   └── technologies.json
│
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   └── logo-text.png
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── TechnologyCard.tsx
│   │   ├── TechnologyGrid.tsx
│   │   ├── YourStack.tsx
│   │   └── Footer.tsx
│   │
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── package.json
├── vite.config.ts
└── README.md





Conclusion

Dev Stack Builder demonstrates how React components, TypeScript, state management, effects, props, JSON data, responsive design, and React-Toastify can be combined to build a modern and interactive web application.