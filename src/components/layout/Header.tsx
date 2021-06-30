import { useEffect } from "react";
import { useState } from "react";
import { Milestones } from "../../utils/enums";
import { getTwoDigitNumberString } from "../../utils/functions";
import { useSteps } from "../providers/useSteps";

const Header = () => {
  const { currentStep } = useSteps();
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const to = setTimeout(() => setTimer((i) => i + 1), 1000);
    return () => clearTimeout(to);
  }, [timer]);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  const milestoneList = [
    Milestones.GENERATE,
    Milestones.CHECK,
    Milestones.UPLOAD,
  ];

  let i = 1;

  return (
    <div className="header">
      <div className="stepper heading--big">
        {milestoneList.map((milestone) => {
          const isActive =
            milestoneList.indexOf(milestone) <=
            milestoneList.indexOf(currentStep.milestone);
          return <StepperStep i={i++} isActive={isActive} key={milestone} />;
        })}
      </div>
      <div className="header_right color--clear heading--big">
        測試時間
        <span className="ml:4">
          {getTwoDigitNumberString(minutes)}:{getTwoDigitNumberString(seconds)}
        </span>
      </div>
    </div>
  );
};

const StepperStep = ({ isActive, i }: { isActive: boolean; i: number }) => {
  return (
    <div className="stepper_step">
      {i !== 1 && (
        <div className={`stepper_separator ${isActive ? " active" : ""}`}></div>
      )}
      <div
        className={`stepper_number heading--strong ${
          isActive ? " active" : ""
        }`}
      >
        {isActive && i}
      </div>
    </div>
  );
};

export default Header;
