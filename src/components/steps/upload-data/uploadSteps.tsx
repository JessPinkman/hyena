import { Milestones } from "../../../utils/enums";
import { Step } from "../../../react-app-env";
import Error from "../shared/Error";
import Success from "../shared/Success";
import UploadProgress from "./UploadProgress";

const uploadData: Step = {
  label: "卸載與上傳",
  milestone: Milestones.UPLOAD,
  onError: () => <Error label="error" />,
  onProgress: UploadProgress,
  onSuccess: () => <Success delay={3000} />,
  progress: {
    load: 50,
    success: 100,
  },
};

export { uploadData };
