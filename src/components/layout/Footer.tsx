import { useMemo } from "react";
import { useRef } from "react";
import { getTwoDigitNumberString } from "../../utils/functions";

const Footer = () => {
  const { current: date } = useRef(new Date());

  const formattedDate = useMemo(() => {
    const year = date.getFullYear();
    const month = getTwoDigitNumberString(date.getMonth() + 1);
    const day = getTwoDigitNumberString(date.getDate());
    return `${year}/${month}/${day}`;
  }, [date]);

  return (
    <div className="footer mt:5 heading--std">
      <div className="color--soft">作業員</div>
      <div className="color--clear">001 金城武</div>
      <div className="ml:auto color--soft">日期</div>
      <div className="color--clear">{formattedDate}</div>
    </div>
  );
};
export default Footer;
