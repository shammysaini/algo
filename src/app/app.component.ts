import { Component } from '@angular/core';
import { Student } from './student.model';
import{UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'algo';
  dataArr:any;
  student= new Student();
  constructor(private user:UserService)
  {
  }
  ngOnInit()
  {
    this.getStudentData();
  }
  getStudentData()
  {
    //this.user.getData().subscribe((data:any[])=>{
      this.user.getData().subscribe(res=>{
      
      this.dataArr=res;

  })
 
    
  }

  addData()
  {
    this.user.addData(this.student).subscribe(res=>{
      
      this.getStudentData();
  })
    
  
  }
  deleteStudent(id)
  {
    this.user.deleteStudent(id).subscribe(res=>{
      
      this.getStudentData();
  })
}
}