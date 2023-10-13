export class Userlogin {

    createdate: string;
    email: string;
    fname: string;
    id: number;
    lname: string;
    modifydate: string;
    pass: string;
    phone: string;

    //constructor() {}
    constructor(
        createdate: string,
        email: string,
        fname: string,
        id: number,
        lname: string,
        modifydate: string,
        pass: string,
        phone: string
    ) {
        this.createdate = createdate;
        this.email = email;
        this.fname = fname;
        this.id = id;
        this.lname = lname;
        this.modifydate = modifydate;
        this.pass = pass;
        this.phone = phone;
    }
}
