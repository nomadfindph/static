export default class User {

    fullname;
    username;
    email;
    password;

    constructor(fullname, username, email, password) {
        this.fullname = fullname;
        this.username = username;
        this.email = email;
        this.password = password;
    }
}