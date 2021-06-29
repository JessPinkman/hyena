import FetchCloudRender from "../components/steps/FetchCloudRender";
import type { Step } from "../react-app-env";
import { Milestones, StepStatus } from "./enums";

export const fetchingCloudQRStep: Step = {
  label: "Fecthing Data",
  order: 1,
  render: FetchCloudRender,
  status: StepStatus.IDLE,
  milestone: Milestones.GENERATE,
};

export const manualActivation: Step = {
  label: "Fecthing Data",
  order: 2,
  render: FetchCloudRender,
  status: StepStatus.IDLE,
  milestone: Milestones.CHECK,
};
