import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-complete-todo',
  templateUrl: './complete-todo.component.html',
  styleUrl: './complete-todo.component.css'
})
export class CompleteTodoComponent {
  @Input() todo: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  onClick(todo: Todo) {
    this.todoDelete.emit(todo)
  }
}
