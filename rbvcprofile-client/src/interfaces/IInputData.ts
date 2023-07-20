export interface IInputData {
    id: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    password: string;
    active: boolean;
    preventDefault: () => void;
  }