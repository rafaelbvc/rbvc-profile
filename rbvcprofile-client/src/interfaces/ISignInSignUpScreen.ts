import { IUsers } from "./IUsers";

export interface ISignInSignUpScreen {
  activeStatus?: boolean;
  loadingState?: boolean;
  users?: any;
  filledData?: any;
  resetForm?: boolean;
  submitForm?: boolean;
  formType?: boolean;
  newUser?: any;
  handleSubmitF?: () => {};
}
