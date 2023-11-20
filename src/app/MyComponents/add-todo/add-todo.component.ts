import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  desc: string
  onSubmit() {
    if (this.desc) {
      const todo: Todo = {
        desc: this.desc,
        active: true
      }
      this.todoAdd.emit(todo)
      this.desc = ''
    }
  }
}
