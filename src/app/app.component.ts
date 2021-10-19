import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List in Angular';
  taskList:string[] = [];

  addTask(task:string){
    this.taskList.push(task);
    // alert(`${task} added..`);
  }
  removeTask(itemTobeDeleted: string){
    this.taskList.forEach((item,index)=>{
      if(item==itemTobeDeleted){
        this.taskList.splice(index,1);
      }
    });
  }
}
