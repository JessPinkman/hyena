import type { Step } from "../../../react-app-env";
import { Milestones } from "../../../utils/enums";
import Success from "../shared/Success";
import Error from "../shared/Error";
import FetchOnProgress from "./FetchOnProgress";
import PressButtonProgress from "./PressButtonProgress";

const fetchingCloudQRStep: Step = {
  label: "雕刻條碼",
  progress: {
    load: 0,
    success: 50,
  },
  milestone: Milestones.GENERATE,
  onSuccess: () => <Success delay={300} />,
  onProgress: FetchOnProgress,
  onError: () => <Error label="網路連線失敗" />,
};

const pressButton: Step = {
  label: "雕刻條碼",
  progress: {
    load: 60,
    success: 100,
  },
  milestone: Milestones.GENERATE,
  onSuccess: () => <Success delay={300} />,
  onProgress: PressButtonProgress,
  onError: () => <div>Error !</div>,
};

export { fetchingCloudQRStep, pressButton };
