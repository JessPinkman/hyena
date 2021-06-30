import Loader from "react-loader-spinner";
import Theme from "../../../style/Theme";

const Loading = ({ label }: { label: string }) => (
  <div className="p:6 fetch_cloud_onload">
    <Loader
      type="TailSpin"
      color={Theme.colors.success}
      height={34}
      width={34}
    />
    <div className="color--success heading--strong heading--huge ml:9">
      {label}
    </div>
  </div>
);

export default Loading;
