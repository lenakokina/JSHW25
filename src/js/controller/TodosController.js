import { TODOS_URL } from '../config.js';
import TodoListView from '../view/TodoListView';
import TodoFormView from '../view/TodoFormView';
import TodosCollection from '../model/TodosCollection';

export default class TodosController {
 constructor() {
     this.listView = new TodoListView({
     onToggle: this.toggleTodo.bind(this),
     onDelete: this.deleteTodo.bind(this)
    });

    this.formView = new TodoFormView({
      onAdd: this.addTodo.bind(this),
    });

     $('.container')
        .append(this.listView.$el)
        .append(this.formView.$el);
        
         
    this.todosCollection = new TodosCollection(TODOS_URL);

    this.todosCollection.fetchTodos()
        .then(() => this.renderList())
    };    

    
    renderList(){
        this.listView.render(this.todosCollection.list)
    }

    toggleTodo(id){        
        this.todosCollection.toggle(id);
        this.renderList();
    }

    deleteTodo(id) {
        this.todosCollection.deleteTodo(id);
        this.renderList();        
    }

    addTodo(task) {
        this.todosCollection.addTodo(task)
            .then(() => this.renderList());
        
    }
    
}