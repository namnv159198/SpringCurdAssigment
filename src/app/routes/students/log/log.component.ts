import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc/table';
import { SFSchema } from '@delon/form';
import { StudentService } from '../Service/student.service';
import { FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Student } from '../Service/student.model';

@Component({
  selector: 'app-students-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css'],
  providers: [StudentService],
})

export class StudentsLogComponent implements OnInit {

  // url = `http://localhost:8081/api/student`;
  // searchSchema: SFSchema = {
  //   properties: {
  //     no: {
  //       type: 'string',
  //       title: '编号'
  //     }
  //   }
  // };
  // @ViewChild('st', { static: false }) st: STComponent;
  // columns: STColumn[] = [
  //   { title: 'No.', type: 'number', index: 'student_id' },
  //   { title: 'Name', index: 'name' },
  //   { title: 'Age', type: 'number', width: '50px', index: 'age' },
  //   { title: 'Gender', index: 'gender' },
  //   { title: 'Address', index: 'address' },
  //   // { title: '时间', type: 'date', index: 'updatedAt' },
  //   {
  //     title: '',
  //     buttons: [
  //       { text: 'details', click: (item: any) => `/form/${item.id}` },
  //       // { text: '编辑', type: 'static', component: FormEditComponent, click: 'reload' },
  //     ]
  //   }
  // ];

  form: FormGroup;
  constructor(private http: _HttpClient,
    private modal: ModalHelper, private studentService: StudentService) { }

  ngOnInit() {
    this.getStudent();
  }

  getStudent() {
    this.studentService.getStudent().subscribe(res => {
      this.studentService.students = res as Student[];
    });
  }

  postStudent(form: NgForm) {
    if (form.value.student_id) {
      this.studentService.putStudent(form.value).subscribe((res) => {
        this.getStudent();
        this.studentService.selectStudent = new Student();
        alert('update success !');
      });
    } else {
      this.studentService.postStudent(form.value).subscribe((res) => {
        this.getStudent();
        this.studentService.selectStudent = new Student();
        alert('Add success !');
      });
    }
  };
  editStudent(student: Student) {
    this.studentService.selectStudent = student;
  }


  deleteStudent(student_id: string) {
    this.studentService.deleteStudent(student_id).subscribe((res) => {
      this.getStudent();
      this.studentService.selectStudent = new Student();
    })
    alert('delete success !');
  }
}
