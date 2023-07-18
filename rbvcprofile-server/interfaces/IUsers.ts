import { IMessage } from "./IMessages";

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  password: string;
  messages?: IMessage[];
  active: boolean;
}
