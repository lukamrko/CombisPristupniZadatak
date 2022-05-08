export class Person
{
    firstname: string;
    lastname: string;
    email: string;
    mobilePhone: string;
    address: string;

    constructor(firstname: string, lastname: string, email: string, mobilePhone: string, address: string)
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.mobilePhone = mobilePhone;
        this.address = address;
    }
}