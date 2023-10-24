interface Name {
  firstname: string;
  lastname: string;
}
interface Gelocation {
  lat: string;
  long: string;
}
interface Address {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: Gelocation;
}

export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  name: Name;
  address: Address;
  phone: string;
  color?: string;
}
