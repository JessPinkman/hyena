/// <reference types="react-scripts" />

import { Milestones, StepStatus } from "./config/enums";

export interface StepProps {
  onSuccess: () => void;
  onError: () => void;
}

export interface Step {
  label: string;
  order: number;
  render: (props: SmallStepProps) => JSX.Element;
  status: StepStatus;
  milestone: Milestones;
}

export type StepContext = {
  next: () => void;
  currentMilestone: Milestones;
  currentProgress: number;
  currentStep: Step;
};
