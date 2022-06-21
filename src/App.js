import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ContentArea from "./components/ContentArea/ContentArea";

function App() {
  return (
    <div className="main-container">
      <Header />
      <Hero />
      <ContentArea />
    </div>
  );
}

export default App;
