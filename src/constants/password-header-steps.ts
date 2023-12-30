// eslint-disable-next-line filenames/match-exported
import { FORGOT_PASSWORD, RESET_PASSWORD } from './screen-names';

const PASSWORD_HEADER_STEPS = {
  [FORGOT_PASSWORD]: {
    title: 'Forgot Password',
    stepNo: 1,
  },
  [RESET_PASSWORD]: {
    title: 'Create Password',
    stepNo: 3,
  },
};

export default PASSWORD_HEADER_STEPS;
