/// <reference types="react-scripts" />

import React from "react";
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

export interface StepState {
  steps: Step[];
  currentMilestone: Milestones;
  currentProgress: number;
  currentStep: Step;
}

export type StepAction = {
  step: Step;
  status: StepStatus;
};

export interface StepContext {
  stepState: StepState;
  stepDispatch: React.Dispatch<StepAction>;
}
