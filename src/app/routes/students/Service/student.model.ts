export class Student {
    constructor(student_id = 0, name = '', age = '', gender = '', address = '',) {
        this.student_id = student_id;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }
    student_id: number;
    name: string;
    age: string;
    gender: string;
    address: string;
}