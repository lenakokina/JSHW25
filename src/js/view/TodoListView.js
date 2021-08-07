import '../../css/style.css';


 const DELETE_BTN_SELECTOR = '.delete-btn';
 const ITEM_SELECTOR = '.task-item';
     
 export default class TodoListView {
  constructor(config) {
    this._config = config;
    this.$el = this.initView();
    }

    initView() {
        return $(`<div id="taskList class="task-list"></div>`)
            .on('click', ITEM_SELECTOR, this.onClickTodo.bind(this))
            .on('click', DELETE_BTN_SELECTOR, this.onListClick.bind(this));
    }

    onListClick(e) {
        e.stopPropagation();
        const id = this.getElementId($(e.target));
        this._config.onDelete(id);

    }

    onClickTodo(e) {
        const id = this.getElementId($(e.target));
        this._config.onToggle(id);
        
    }

    render(list) {
        this.$el.html(list.map(this.getTodoTemplate).join(''));
    }

    getTodoTemplate(todoItem) {
        return (`<div class="task-item ${todoItem.isDone ? 'done' : ''}" data-todo-id="${todoItem.id}">
     ${todoItem.title}<span class="delete-btn">X</span></div>`)
    }
    
    getElementId($el) {
        return $el.closest(ITEM_SELECTOR).data('todoId');
    }
   
}