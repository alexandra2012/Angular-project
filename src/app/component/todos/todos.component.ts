import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
   selector: 'app-todos',
   templateUrl: './todos.component.html',
   styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

   todos!: Todo[];

   inputTodo:string = "";

   constructor() { }

   ngOnInit(): void {
      this.todos = [
         {
         content: 'Sigrid Petersson Nedkvitne',
         completed: false
         },
         {
         content: 'Hilde Ulvik Hordnes', 
         completed: false
         },
         {
         content: 'Lene Sælen', 
         completed: false
         },
         {
         content: 'Alexander Morland',
         completed: false
         },
         {
         content: 'Camilla Mjøen Lien', 
         completed: false
         },
         {
         content: 'Sigrid Eriksen', 
         completed: false
         },
         {
         content: 'Håkon Lien Johansen', 
         completed: false
         },
         {
         content: 'Henriette Gran Rugland',
         completed: false
         },
         {
         content: 'Grigoriy Belous', 
         completed: false
         },
         {
         content: 'Oleh Leksiv', 
         completed: false
         },
         {
         content: 'Stina Jensen ', 
         completed: false
         }
      ]  
   }

   toggleDone(id:number) {
      this.todos.map((v, i) => {
         if ( i==id ) v.completed = !v.completed;
         return v;
      })
   }

   deleteTodo(id:number) {
      this.todos = this.todos.filter((v, i) => i !==id);
   }

   addTodo() {
      if(this.inputTodo.trim() !== ""){
         this.todos.push({
            content: this.inputTodo,
            completed: false
         });
      }

         this.inputTodo = "";
   }
}
