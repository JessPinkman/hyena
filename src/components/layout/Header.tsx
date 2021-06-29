import { Milestones } from "../../config/enums";
import { useSteps } from "../providers/useSteps";

const Header = () => {
  const { currentMilestone } = useSteps();
  const milestonesArray = Object.values(Milestones);

  let i = 0;

  return (
    <header>
      <div className="stepper">
        {milestonesArray.map((milestone) => {
          const isActive = currentMilestone === milestone;
          return (
            <div
              key={milestone}
              className={`stepper_step${isActive ? " active" : ""}`}
            >
              {i !== 0 && <div className="stepper_step_separator"></div>}
              <div className="stepper_step_number">{++i}</div>
            </div>
          );
        })}
      </div>
    </header>
  );
};
export default Header;
