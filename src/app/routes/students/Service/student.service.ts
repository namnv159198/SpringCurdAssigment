import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  selectStudent: Student;
  students: Student[];
  url = `http://localhost:8081/api/student`;

  constructor(private http: HttpClient) {
    this.selectStudent = new Student();
  }

  getStudent() {
    return this.http.get<any>(`${this.url}`);
  }
  postStudent(student: Student) {
    return this.http.post(`${this.url}`, student);
  }
  putStudent(student: Student) {
    return this.http.put(`${this.url}/${student.student_id}`, student);
  }
  deleteStudent(student_id: string) {
    return this.http.delete(`${this.url}/${student_id}`);
  }
}
