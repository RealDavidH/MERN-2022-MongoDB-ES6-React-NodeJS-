import First from "./componets/first";

function App() {
    return (
        <div>
            <First
                todolist={[
                    "*Learn React",
                    "*Climb Mount Everest",
                    "*Run a marathon",
                    "*Feed the dogs",
                ]}
            />
        </div>
    );
}

export default App;
