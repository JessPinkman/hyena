import { useCallback } from "react";
import { StepStatus } from "../../utils/enums";
import { useState } from "react";
import { useMemo } from "react";
import type { Step, StepContext } from "../../react-app-env";

const useStateLogic = (stepList: readonly Step[]): StepContext => {
  const [stepStatus, setStatus] = useState<StepStatus>(StepStatus.PROCESSING);
  const [currentStep, setCurrentStep] = useState<Step>(stepList[0]);

  //function to go to next step
  const nextStep = useCallback(() => {
    const currentIndex = stepList.indexOf(currentStep);
    const nextIndex =
      currentIndex === stepList.length - 1 ? 0 : currentIndex + 1;
    setCurrentStep(stepList[nextIndex]);
    setStatus(StepStatus.PROCESSING);
  }, [currentStep, stepList]);

  const isProcessEnd = useMemo(() => {
    return (
      currentStep === stepList[stepList.length - 1] &&
      stepStatus === StepStatus.SUCCESS
    );
  }, [stepStatus, currentStep, stepList]);

  return useMemo(
    () => ({ currentStep, setStatus, stepStatus, nextStep, isProcessEnd }),
    [currentStep, setStatus, stepStatus, nextStep, isProcessEnd]
  );
};

export default useStateLogic;
