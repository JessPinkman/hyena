import { useEffect } from "react";
import { StepStatus } from "../../../utils/enums";
import { useSteps } from "../../providers/useSteps";
import Loading from "../shared/Loading";

const UploadProgress = () => {
  const { setStatus } = useSteps();

  useEffect(() => {
    const to = setTimeout(() => setStatus(StepStatus.SUCCESS), 3000);
    return () => clearTimeout(to);
  });

  return <Loading label="資料上傳中" />;
};

export default UploadProgress;
