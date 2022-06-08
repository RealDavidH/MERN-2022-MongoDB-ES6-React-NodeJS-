import Tabs from "./components/Tabs";

function App() {
  const allTabs = [
    {
      name: "Tab1",
      content: "this is tab1 content",
    },
    {
      name: "Tab2",
      content: "this is tab2 content",
    },
    {
      name: "Tab3",
      content: "this is tab3 content",
    },
  ];
  return (
    <div className="text-center">
      <Tabs tabs={allTabs} />
    </div>
  );
}

export default App;
