import { useEffect } from "react";
import { useRef } from "react";
import { StepStatus } from "../../utils/enums";
import { useSteps } from "../providers/useSteps";

const Progress = () => {
  const {
    currentStep: { progress },
    stepStatus,
  } = useSteps();

  const value =
    stepStatus === StepStatus.SUCCESS ? progress.success : progress.load;

  const circleNode = useRef<SVGCircleElement>(null!);

  useEffect(() => {
    const radius = circleNode.current.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (value / 100) * circumference;

    circleNode.current.style.strokeDasharray = `${circumference} ${circumference}`;
    circleNode.current.style.strokeDashoffset = offset.toString();
  }, [value]);

  return (
    <div className="progress">
      <svg className="progress_ring" height="200" width="200">
        <circle className="progress_ring__circle" r="88" cx="100" cy="100" />
        <circle
          ref={circleNode}
          className="progress_ring__circle animated"
          r="88"
          cx="100"
          cy="100"
        />
      </svg>
      <div className="progress_number heading--strong color--success">
        {value}%
      </div>
    </div>
  );
};

export default Progress;
