import { useContext, createContext, ReactNode } from "react";
import allSteps from "../../config/allSteps";
import type { StepContext } from "../../react-app-env";
import useStateLogic from "./useStepLogic";

const context = createContext<StepContext>(null!);

export const useSteps = () => useContext(context);

export const StepsProvider = ({ children }: { children: ReactNode }) => {
  const stepContext = useStateLogic(allSteps);
  return <context.Provider value={stepContext}>{children}</context.Provider>;
};
