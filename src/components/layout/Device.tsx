import Top from "./Top";
import SubTop from "./SubTop";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useSteps } from "../providers/useSteps";
import { StepStatus } from "../../utils/enums";
import Modal from "../steps/shared/Modal";
import ShowSuccess from "../steps/process-complete/ShowSuccess";

const Device = () => {
  const { currentStep, stepStatus, isProcessEnd } = useSteps();

  return (
    <div className="raspberry_device">
      <Top />
      <hr />
      <SubTop />
      <div className="main_box">
        <Header />
        <hr />
        <Content />
      </div>
      {stepStatus === StepStatus.ERROR && (
        <Modal>
          <currentStep.onError />
        </Modal>
      )}
      {isProcessEnd && <ShowSuccess />}
      <Footer />
    </div>
  );
};

export default Device;
