import { CheckFrequency } from './checkFrequency.enum';
import { InstallMode } from './installMode.enum';

const RNCodePush = {
  CheckFrequency,
  InstallMode,
  getUpdateMetadata: jest.fn(() => Promise.resolve()),
};

const cp =
  (): any =>
  (app: any): any =>
    app;
const CodePush = Object.assign(cp, RNCodePush);

export default CodePush;
