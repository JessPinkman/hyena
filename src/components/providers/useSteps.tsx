import { useReducer } from "react";
import { useEffect } from "react";
import { useContext, createContext, ReactNode } from "react";
import { StepStatus } from "../../config/enums";
import fetchingCloudQRStep from "../../config/steps/fetchingCloudQRStep";
import type { StepState, StepContext, StepAction } from "../../react-app-env";

const context = createContext<StepContext>(null!);

export const useSteps = () => useContext(context);

export const StepsProvider = ({ children }: { children: ReactNode }) => {
  const [stepState, stepDispatch] = useReducer(stepReducer, {
    ...initialState,
  });

  const { steps, currentStep } = stepState;

  useEffect(() => {
    if (currentStep.status === StepStatus.SUCCESS) {
      const currentIndex = steps.indexOf(currentStep);
      setTimeout(
        () =>
          stepDispatch({
            step: steps[currentIndex + 1],
            status: StepStatus.STARTED,
          }),
        2000
      );
    }
  }, [steps, currentStep, currentStep.status]);

  return (
    <context.Provider value={{ stepState, stepDispatch }}>
      {children}
    </context.Provider>
  );
};

const stepReducer = (state: StepState, action: StepAction): StepState => {
  const { step, status } = action;

  return { ...state };
};

const initialSteps = [fetchingCloudQRStep];

const initialState: StepState = {
  steps: initialSteps,
  currentMilestone: initialSteps[0].milestone,
  currentProgress: 0,
  currentStep: initialSteps[0],
};
