import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddProjectComponent } from './add-project.component';
import { Project } from '../../models/project';
import { RouterTestingModule } from '@angular/router/testing';
import { TaskServiceService } from '../../Services/Task/task-service.service'
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from '@angular/common';
import { error } from 'util';
import { Http,Response } from '@angular/http';
import {HttpModule} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MockBackend } from '@angular/http/testing';
//import {Observable} from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import {debounceTime, map} from 'rxjs/operators';
import {HttpClientTestingModule} from '@angular/common/http/testing';

//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AddUserComponent } from '../add-user/add-user.component';
import {AddTaskComponent} from '../add-task/add-task.component';

describe('AddProjectComponent', () => {
  let component: AddProjectComponent;
  let fixture: ComponentFixture<AddProjectComponent>;

  class TestAddprojectcomponent{
    projects: Project[] = [{Project_Name: 'tre',
  Priority: '8',
ManagerName: 'aa'}];
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectComponent, AddUserComponent, AddTaskComponent ],
      imports:[BrowserModule, HttpClientTestingModule,  RouterTestingModule,
        RouterModule,FormsModule,ReactiveFormsModule],
      providers: [{provide: HttpClient, deps: [MockBackend]},TaskServiceService,  DatePipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //it('should create', () => {
    //expect(component).toBeTruthy();
  //});
  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });

});
