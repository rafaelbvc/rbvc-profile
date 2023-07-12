export interface ISignInSignUpScreen {
  activeStatus?: boolean;
  loadingState?: boolean;
  users?: any;
  filledData?: any;
  editVisitor?: boolean;
  resetForm?: boolean;
  submitForm?: boolean;
  visitorNewData?: {};
  handleSubmitF?: () => {};
}
