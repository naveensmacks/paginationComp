import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemsList from "./components/ItemsList";

function App() {
  return (
    <>
      <div className="bg-gray-950 text-white overflow-y-scroll">
        <Container>
          <Header />
          <ItemsList />
          <Footer />
        </Container>
      </div>
    </>
  );
}

export default App;
