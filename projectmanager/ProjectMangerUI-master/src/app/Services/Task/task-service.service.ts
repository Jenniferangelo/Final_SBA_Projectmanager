import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {map} from  'rxjs/operators';
import { catchError } from 'rxjs/operators';

import {HttpClient} from '@angular/common/http';
import { Task } from '../../models/task';
import { Project } from '../../models/project';
import { ProjectSummary } from '../../models/projectsummary';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
options;
  constructor(private _http : Http) 
  {
      
  } 

  //TASKS
  GetTask(_id) //: Observable<Task>
  {
    console.log('getting task : _id');
      return this._http.get("http://localhost:3000/api/tasks" +"/"+ _id)
      .pipe(map((response : Response)=><Task> response.json()));
  }

  GetAllTasks() //: Observable<Task[]>
  {
      return this._http.get("http://localhost:3000/api/tasks")
      .pipe(map((response : Response)=><Task[]> response.json()));
  }
  InsertData(task : Task) //: Observable<string>
  {
    console.log('Insertinggg..'+task);
     return this._http.post("http://localhost:3000/api/tasks",task)
    // .pipe(map((response : Response)=><string> response.json()));
  }

  UpdateData(_task : Task)// : Observable<string>
  {
    console.log('Insided update data fn');
    return this._http.put("http://localhost:3000/api/tasks/"+ _task._id, _task,this.options)
    .pipe(map((response : Response)=> <string> response.json()));
  }

  DeleteData(_taskID : number) //: Observable<string>
  {
    return this._http.delete("http://localhost:3000/api/tasks" +"/" + _taskID )
    .pipe(map((response : Response)=> <string> response.json()));
  }


  //PROJECTS 
  GetProject(_id) //: Observable<Project>
  {
    console.log('GETPROJECT'+_id);
      return this._http.get("http://localhost:3000/api/projects" +"/"+ _id)
      .pipe(map(res => res.json()));
  }
  
  GetSummaryProjects()// : Observable<ProjectSummary[]>
  {
      return this._http.get("http://localhost:3000/api/projects")
      .pipe(map((response : Response)=><ProjectSummary[]> response.json()));
  }

  GetAllProjects()// : Observable<Project[]>
  {
      return this._http.get("http://localhost:3000/api/projects")
      .pipe(map((response : Response)=><Project[]> response.json()));
  }

  InsertProject(task : Project) //: Observable<string>
  {
    console.log('IN');
     return this._http.post("http://localhost:3000/api/projects",task)
     //.map((response : Response)=><string> response.json());
  }

  UpdateProject(_task) //: Observable<string>
  {
    return this._http.put("http://localhost:3000/api/projects/"+ _task._id, _task,this.options)
    .pipe(map((response : Response)=> <string> response.json()));
  }

  DeleteProject(_taskID) //: Observable<string>
  {
    return this._http.delete("http://localhost:3000/api/projects/" + _taskID)
    //.pipe(map(res => res.json()));
    .pipe(map((response : Response)=> response.json()));
  }

//USERS 
GetUser(_id) //: Observable<User>
{
  console.log(_id);
    return this._http.get("http://localhost:3000/api/user" +"/"+ _id)
    .pipe(map((response : Response)=><User> response.json()));
}

GetSummaryUsers()// : Observable<User[]>
  {
      return this._http.get("http://localhost:3000/api/user")
      .pipe(map((response : Response)=><User[]> response.json()));
  }

GetAllUsers() //: Observable<User[]>
{
  console.log('User_list');
    return this._http.get("http://localhost:3000/api/user")
    .pipe(map((response : Response)=><User[]> response.json()));
}

InsertUser(task : User)// : Observable<string>
{
   return this._http.post("http://localhost:3000/api/user",task)
 //  .map((response : Response)=><string> response.json());
}

UpdateUser(_task : User) //: Observable<string>
{
  console.log("updating task"+ _task);
  return this._http.put("http://localhost:3000/api/user/" + _task._id, _task, this.options)
  .pipe(map((response : Response)=> <string> response.json()));
}

DeleteUser(_userID)// : Observable<string>
{
  return this._http.delete("http://localhost:3000/api/user/" + _userID )
  .pipe(map((response : Response)=> response.json()));
}


}
