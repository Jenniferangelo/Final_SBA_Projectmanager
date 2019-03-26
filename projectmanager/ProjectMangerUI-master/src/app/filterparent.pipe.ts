import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterparent'
})
export class FilterparentPipe implements PipeTransform {

  transform(taskId: any, task?: any): any {
    let foundTask = task.filter(task=>task._id == taskId)[0];
    return !!foundTask ? foundTask.TaskName : '-' ;
  }

}
