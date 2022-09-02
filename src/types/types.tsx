export interface IAddress {
  street: string;
  city: string;
  zipcode: string;
}

export interface IUser {
  id: number;
  name: string;
  email: String;
  address: IAddress;
}

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}
