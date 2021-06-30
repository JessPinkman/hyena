import { Milestones } from "../../../utils/enums";
import { Step } from "../../../react-app-env";
import Error from "../shared/Error";
import Success from "../shared/Success";
import CheckBecoreScanProgress from "./CheckBecoreScanProgress";
import CheckQRCodeProgress from "./CheckQRCodeProgress";

const beforeScan: Step = {
  label: "檢查條碼",
  milestone: Milestones.CHECK,
  onError: () => <Error label="error" />,
  onProgress: () => <CheckBecoreScanProgress inputValue="" />,
  onSuccess: () => <Success delay={300} />,
  progress: {
    load: 10,
    success: 50,
  },
};

const afterScan: Step = {
  label: "檢查條碼",
  milestone: Milestones.CHECK,
  onError: () => <Error label="error" />,
  onProgress: () => (
    <CheckBecoreScanProgress inputValue="51E-190815001-RDS250MOT0021908150033" />
  ),
  onSuccess: () => <Success delay={300} />,
  progress: {
    load: 55,
    success: 70,
  },
};

const checkQRCode: Step = {
  label: "檢查條碼",
  milestone: Milestones.CHECK,
  onError: () => <Error label="error" />,
  onProgress: CheckQRCodeProgress,
  onSuccess: () => <Success delay={300} />,
  progress: {
    load: 75,
    success: 100,
  },
};

export { beforeScan, afterScan, checkQRCode };
