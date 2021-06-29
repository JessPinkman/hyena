import { useEffect } from "react";
import { useRef } from "react";
import { useSteps } from "../providers/useSteps";

const Progress = () => {
  const { currentProgress } = useSteps();

  const circleNode = useRef<SVGCircleElement>(null!);

  useEffect(() => {
    const radius = circleNode.current.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (currentProgress / 100) * circumference;

    circleNode.current.style.strokeDasharray = `${circumference} ${circumference}`;
    circleNode.current.style.strokeDashoffset = offset.toString();
  }, [currentProgress]);

  return (
    <div className="progress">
      <svg className="progress_ring" height="120" width="120">
        <circle className="progress_ring__circle" r="58" cx="60" cy="60" />
        <circle
          ref={circleNode}
          className="progress_ring__circle animated"
          r="58"
          cx="60"
          cy="60"
        />
      </svg>
      <div>{currentProgress}%</div>
    </div>
  );
};

export default Progress;
