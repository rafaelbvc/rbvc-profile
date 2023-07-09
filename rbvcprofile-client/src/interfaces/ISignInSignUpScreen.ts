export interface ISignInSignUpScreen {
  statusColor?: string;
  handleActiveStatus?: boolean;
  activeStatus?: boolean;
  loadingState: boolean;
  handleSubmitF?: () => {};
  users?: any;
  filledData: any;
}
