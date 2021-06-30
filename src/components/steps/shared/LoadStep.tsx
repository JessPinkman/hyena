import { useEffect } from "react";
import { StepStatus } from "../../../utils/enums";
import { useSteps } from "../../providers/useSteps";

const LoadStep = () => {
  const { setStatus } = useSteps();

  useEffect(() => {
    const to = setTimeout(() => setStatus(StepStatus.PROCESSING), 1000);
    return () => clearTimeout(to);
  }, [setStatus]);

  return (
    <div className="heading--huge color--clear heading--strong">
      <span>正在準備</span>
    </div>
  );
};

export default LoadStep;
