import { useEffect } from "react";
import { useSteps } from "../../providers/useSteps";

const Success = ({ delay }: { delay: number }) => {
  const { nextStep } = useSteps();

  useEffect(() => {
    const to = setTimeout(nextStep, delay);
    return () => clearTimeout(to);
  }, [nextStep, delay]);

  return <div className="color--success heading--bigger">成功 !</div>;
};

export default Success;
