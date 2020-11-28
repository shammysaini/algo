import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import{UserService} from '../user.service';

@Component({
  selector: 'app-uapi',
  templateUrl: './uapi.component.html',
  styleUrls: ['./uapi.component.css']
})
export class UapiComponent implements OnInit {
  dataArr:any;
  student= new Student();
  

  constructor(private user:UserService) {

   }

  ngOnInit(): void {
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
