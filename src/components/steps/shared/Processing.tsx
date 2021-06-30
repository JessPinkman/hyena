import { useEffect } from "react";
import { StepStatus } from "../../../utils/enums";
import { useSteps } from "../../providers/useSteps";

const Processing = () => {
  const { setStatus } = useSteps();

  useEffect(() => {
    const to = setTimeout(() => setStatus(StepStatus.SUCCESS), 2000);
    return () => clearTimeout(to);
  }, [setStatus]);

  return <div>... processing </div>;
};

export default Processing;
