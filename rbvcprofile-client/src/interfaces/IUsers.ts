// export interface IUsers {
//   ids;
//   entities: {
//     _id?: string;
//     firstName?: string;
//     lastName?: string;
//     createdAt?: string;
//     updatedAt?: string;
//   };
// }

export interface IUsers {
  active?: boolean;
  createdAt?: string;
  email?: string;
  firstName?: string;
  id?: string;
  lastName?: string;
  password?: string;
  messages?: [];
  phone?: string;
  updatedAt?: string;
  __v?: number;
  _id?: string;
}
