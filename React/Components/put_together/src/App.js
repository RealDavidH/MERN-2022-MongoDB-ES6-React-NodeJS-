import Person from "./components/Person";

function App() {
    return <div>
      <Person 
      name = "Doe, Jane"
      age = {45}
      haircolor = "black"
      />
      <Person 
      name = "Smith, John"
      age = {88}
      haircolor = "Brown"
      />
      <Person 
      name = "Fillmore, Millard"
      age = {50}
      haircolor = "Brown"
      />
      <Person 
      name = "Smith, Maria"
      age = {62}
      haircolor = "Brown"
      />
    </div>;
}

export default App;
