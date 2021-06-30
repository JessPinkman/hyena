import { useEffect } from "react";
import { StepStatus } from "../../../utils/enums";
import { useSteps } from "../../providers/useSteps";

const CheckBecoreScanProgress = ({
  inputValue = "",
}: {
  inputValue: string;
}) => {
  const { setStatus } = useSteps();

  useEffect(() => {
    const to = setTimeout(() => setStatus(StepStatus.SUCCESS), 3000);
    return () => clearTimeout(to);
  });

  return (
    <div className="before__scan_progress">
      <div className="heading--big color--soft">請掃描電機條碼</div>
      <input
        type="text"
        className="border--soft bg--less-dark mt:24 color--clear heading--big"
        value={inputValue}
      />
    </div>
  );
};

export default CheckBecoreScanProgress;
