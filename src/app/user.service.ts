import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getData()
  {
    let url = "http://127.0.0.1:8000/api/sampledata";
    return this.http.get(url);
  }
  addData(data)
  {
    let ur = "http://127.0.0.1:8000/api/addData";
    return this.http.post(ur,data);
  }

  deleteStudent(id)
  {
    let u = "http://127.0.0.1:8000/api/deletestudent/"+id;
    return this.http.delete(u);
  }

  getOneStudent(id)
  {
    
    return this.http.get("http://127.0.0.1:8000/api/getOneStudent/"+id);

  }

  updateData(id,data)
  {
    
    return this.http.patch("http://127.0.0.1:8000/api/updatestudent/"+id,data);
}

}
