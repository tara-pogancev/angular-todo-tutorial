import { Component, OnInit } from '@angular/core';
import { ListItem } from 'src/app/model/list-item';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
})
export class ListPageComponent implements OnInit {
  public todoList: ListItem[] = [];
  public newTodo: string = '';

  ngOnInit(): void {
    let item1 = new ListItem();
    let item2 = new ListItem();

    item1.text = 'Buy shampoo';
    item2.text = 'Feed cats';
    item2.done = true;

    this.todoList.push(item1);
    this.todoList.push(item2);
  }

  addNew(event: any) {
    if (event.key === 'Enter' && this.newTodo != '') {
      let newTask = new ListItem();
      newTask.text = this.newTodo;
      this.todoList.push(newTask);
      this.newTodo = '';
    }
  }
}
