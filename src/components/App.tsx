import "../style/app.scss";
import Device from "./layout/Device";
import { StepsProvider } from "./providers/useSteps";

function App() {
  return (
    <StepsProvider>
      <Device />
    </StepsProvider>
  );
}

export default App;
