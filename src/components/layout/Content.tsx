import { useMemo } from "react";
import { StepStatus } from "../../utils/enums";
import { useSteps } from "../providers/useSteps";
import Progress from "./Progress";
import Label from "../steps/shared/Label";

const Content = () => {
  const { currentStep, stepStatus } = useSteps();

  const Render = useMemo(() => {
    switch (stepStatus) {
      case StepStatus.SUCCESS:
        return currentStep.onSuccess;
      case StepStatus.PROCESSING:
        return currentStep.onProgress;
      default:
        return () => null;
    }
  }, [stepStatus, currentStep]);

  return (
    <div className="content">
      <Progress />
      <div className="step__render">
        <Label label={currentStep.label} />
        <Render />
      </div>
    </div>
  );
};
export default Content;
