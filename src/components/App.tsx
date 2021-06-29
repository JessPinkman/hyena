import "../style/app.scss";
import Content from "./layout/Content";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { StepsProvider } from "./providers/useSteps";

function App() {
  return (
    <StepsProvider>
      <div className="raspberry_device">
        <Header />
        <Content />
        <Footer />
      </div>
    </StepsProvider>
  );
}

export default App;
