import {Registry} from './inject';

export interface Person {
    firstname: string;
    lastname: string;
}

export function greeter() {
    var person : Person = Registry['Person'].build();
    return "Hello, " + person.firstname + " " + person.lastname;
}
