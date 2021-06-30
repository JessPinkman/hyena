import { StepStatus } from "../../../utils/enums";
import { useSteps } from "../../providers/useSteps";

const Error = ({ label }: { label: string }) => {
  const { setStatus } = useSteps();
  return (
    <>
      <div className="error heading--bigger">{label}</div>
      <button
        className="error_button bg--clear color--alert"
        onClick={() => setStatus(StepStatus.PROCESSING)}
      >
        重試
      </button>
    </>
  );
};

export default Error;
