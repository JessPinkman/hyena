import { StepStatus } from "../../../utils/enums";
import { useSteps } from "../../providers/useSteps";

const PressButtonProgress = () => {
  const { setStatus } = useSteps();
  return (
    <div className="press__button_progress">
      <div className="heading--big color--soft">請將電機放置在定位範圍內</div>
      <button
        className="bg--success color--dark mt:24"
        onClick={() => setStatus(StepStatus.SUCCESS)}
      >
        執行雕刻
      </button>
    </div>
  );
};

export default PressButtonProgress;
