import {Person, greeter} from './person';
import {Inject} from './inject';

@Inject('Person')
class StudentFactory {
    build():Student {
        return  new Student("Jane", "M.", "User");
    }
}

class Student {
    fullname : string;
    constructor(public firstname, public middleinitial, public lastname) {
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
}

document.body.innerHTML = greeter();
