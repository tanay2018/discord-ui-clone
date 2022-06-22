import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ContentArea from "./components/ContentArea/ContentArea";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="main-container">
      <Header />
      <Hero />
      <ContentArea />
      <Footer />
    </div>
  );
}

export default App;
