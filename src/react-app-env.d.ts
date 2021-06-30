/// <reference types="react-scripts" />

import React from "react";
import { Milestones, StepStatus } from "./utils/enums";

export interface Step {
  label: string;
  onSuccess: () => JSX.Element;
  onProgress: () => JSX.Element;
  onError: () => JSX.Element;
  milestone: Milestones;
  progress: {
    load: number;
    success: number;
  };
}

export interface StepContext {
  stepStatus: StepStatus;
  setStatus: React.Dispatch<React.SetStateAction<StepStatus>>;
  currentStep: Step;
  nextStep: () => void;
  isProcessEnd: boolean;
}
