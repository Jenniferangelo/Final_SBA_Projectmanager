import { TaskServiceService } from './task-service.service';
import { TestBed,inject } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import {HttpClient} from '@angular/common/http'
import {MockBackend} from '@angular/http/testing'
import { Http } from '@angular/http';

import { Task } from '../../models/task';
import { HttpModule,Response } from '@angular/http';

describe('TaskServiceService', () => {

  let service: TaskServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,HttpModule],
      providers: [{provide: Http} ,TaskServiceService,{provide:HttpClient,deps:MockBackend}]
    });
    service = TestBed.get(TaskServiceService);
    httpMock = TestBed.get(HttpTestingController);
    });

  it('should be created', () => {
    const service: TaskServiceService = TestBed.get(TaskServiceService);
    expect(service).toBeTruthy();
  });

  it('Service should check with Dummy post from api via get method', ()=>{
    var date = new Date('2018-11-02');
    const dummyPost: Task[] = [
        {
          Project_Id:1,
          Project_Name:'TEST',
          TaskName:'Task New',
          Priority:10,
          IsParent:true,
          Parent_Task:'Task',
          Start_date:date,
          End_date:date,
          User_Id:1,
          User:'User1',
          Deleted:false,
          Status:'Completed'
        }
    ];

service.GetTask(2002).subscribe(post => {
  expect(post.TaskName).toBe(dummyPost.find(i=>i.TaskName == 'Task New').TaskName);

  });
  });

});
