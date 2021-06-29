import { useEffect } from "react";
import type { StepProps } from "../../react-app-env";
import { useSteps } from "../providers/useSteps";

const FetchCloudRender = ({ onError, onSuccess }: StepProps) => {
  const { next, currentStep } = useSteps();

  useEffect(() => {
    setTimeout(() => {
      console.log("next");
      next();
    }, 2000);
  }, [next]);

  return <div>fetch render</div>;
};

export default FetchCloudRender;
