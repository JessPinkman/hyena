import { useEffect } from "react";

import { StepStatus } from "../../../utils/enums";
import { useSteps } from "../../providers/useSteps";
import Loading from "../shared/Loading";

const FetchOnProgress = () => {
  const { setStatus } = useSteps();

  /**
   * inform user of newly loaded step for 1s
   */
  useEffect(() => {
    const to = setTimeout(() => setStatus(StepStatus.SUCCESS), 3000);
    return () => clearTimeout(to);
  }, [setStatus]);

  return <Loading label="條碼產生中" />;
};

export default FetchOnProgress;
