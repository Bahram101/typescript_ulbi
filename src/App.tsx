import Card, { CardVariant } from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card
        width="200px"
        height="200px"
        variant={CardVariant.outlined}
        onClick={(num) => console.log("clicked", num)}
      >
        <button>Кнопка</button>
      </Card>
    </div>
  );
}

export default App;
