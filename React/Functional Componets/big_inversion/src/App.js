import Person from "./componets/Person.js";

function App() {
  return (
    <div className="text-center">
      <Person name="Smith, John" age = { 88 } hairColor = "Brown"/>
      <Person name="Doe, Jane" age = { 45 } hairColor = "Black"/>
      <Person name="Fillmore, Millard" age = { 50 } hairColor = "Brown"/>
      <Person name="Smith, Maria" age = { 62 } hairColor = "Brown"/>
    </div>
  );
}

export default App;
