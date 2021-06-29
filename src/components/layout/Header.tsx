import { Milestones } from "../../config/enums";
import { useSteps } from "../providers/useSteps";

const Header = () => {
  const { currentMilestone } = useSteps();
  const milestonesArray = Object.values(Milestones);

  let i = 0;

  return (
    <header>
      {milestonesArray.map((milestone) => {
        const isActive = currentMilestone === milestone;
        return (
          <div
            key={milestone}
            className={`stepper${isActive ? " active" : ""}`}
          >
            <div>{++i}</div>
            {i < milestonesArray.length && <span></span>}
          </div>
        );
      })}
    </header>
  );
};
export default Header;
