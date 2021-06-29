import FetchCloudRender from "../../components/steps/FetchCloudRender";
import type { Step } from "../../react-app-env";
import { Milestones, StepStatus } from "../enums";

const fetchingCloudQRStep: Step = {
  label: "Fecthing Data",
  order: 1,
  render: FetchCloudRender,
  status: StepStatus.IDLE,
  milestone: Milestones.GENERATE,
};

export default fetchingCloudQRStep;
