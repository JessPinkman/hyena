import {
  afterScan,
  beforeScan,
  checkQRCode,
} from "../components/steps/check/checkSteps";
import {
  fetchingCloudQRStep,
  pressButton,
} from "../components/steps/fetch-cloud/fetchCloudSteps";
import { uploadData } from "../components/steps/upload-data/uploadSteps";
import type { Step } from "../react-app-env";

const allSteps: readonly Step[] = [
  fetchingCloudQRStep,
  pressButton,
  beforeScan,
  afterScan,
  checkQRCode,
  uploadData,
];

export default allSteps;
