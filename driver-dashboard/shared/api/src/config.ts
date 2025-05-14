import { Amplify } from 'aws-amplify';

export const configureAmplify = (config: any) => {
  Amplify.configure(config);
};
