import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student.model';
import{UserService} from '../user.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 
id:any;
data:any;
dataArr:any;
student= new Student();
  
    constructor(
      private route:ActivatedRoute,
      private user:UserService,
      private route1:Router,
    )
    {
         
  }
 
  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.getDa();
  }

 getDa()
 {
   this.user.getOneStudent(this.id).subscribe(res=>{
    this.data = res;
    this.student=this.data;


   }) 
 }
 

 updateData()
 {
   this.user.updateData(this.id,this.student).subscribe(res=>{
     this.route1.navigate(['/sign']);
    
     
   })
 }

}
