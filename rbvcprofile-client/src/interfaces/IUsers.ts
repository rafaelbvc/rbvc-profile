export interface IUsers {
  id?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  phone?: string;
  email?: string;
  messages?: Array<[]>;
  active?: boolean;
  createdAt?: string;
  updatedAt?: string;
  stateData?: string;
}
