export class User {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';
  role: 'Admin' | 'Agent' | 'Client';

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    password: string,
    role: 'Admin' | 'Agent' | 'Client'
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.password = password;
    this.role = role;
  }
}
