export class Cat {
    name: string;
    type: string;
    age: number;
    id: number;

    constructor(name: string, type: string, age: number, id: number) {
        this.id = id
        this.name = name;
        this.type = type;
        this.age = age;
    }
}
