import { Component, Input } from '@angular/core';
import { ListItem } from 'src/app/model/list-item';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Input() listItem: ListItem = new ListItem();

  changeChecked() {
    this.listItem.done = !this.listItem.done;
  }
}
