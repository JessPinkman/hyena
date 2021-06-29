import { useSteps } from "../providers/useSteps";
import Progress from "./Progress";

const Content = () => {
  const { currentStep } = useSteps();
  return (
    <main>
      <Progress />
      <div className="step__render">{<currentStep.render />}</div>
    </main>
  );
};
export default Content;
