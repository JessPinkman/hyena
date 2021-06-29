import { useMemo } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useContext, createContext, ReactNode } from "react";
import steps from "../../config/steps";
import type { Step, StepContext } from "../../react-app-env";

const context = createContext<StepContext>(null!);

export const useSteps = () => useContext(context);

export const StepsProvider = ({ children }: { children: ReactNode }) => {
  const [stepIndex, setStepIndex] = useState(0);
  const { current: stepList } = useRef<readonly Step[]>(steps);

  const value: StepContext = useMemo(() => {
    const currentMilestone = stepList[stepIndex].milestone;
    const currentMilestoneList = stepList.filter(
      (step) => step.milestone === currentMilestone
    );
    const currentProgressIndex = currentMilestoneList.indexOf(
      stepList[stepIndex]
    );
    const currentProgress = Math.floor(
      (currentProgressIndex / currentMilestoneList.length) * 100
    );

    return {
      currentProgress,
      currentStep: stepList[stepIndex],
      next: () => {
        setStepIndex(stepIndex === stepList.length - 1 ? 0 : stepIndex + 1);
      },
      currentMilestone: stepList[stepIndex].milestone,
    };
  }, [stepIndex, stepList]);

  return <context.Provider value={value}>{children}</context.Provider>;
};
