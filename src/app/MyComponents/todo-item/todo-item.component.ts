import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
  
  
export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  onClick(todo: Todo) {
    this.todoDelete.emit(todo)
  }
  onComplete(todo: any) {
    todo.active = false;
  }
}
