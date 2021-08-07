
export default class TodoFormView {
  constructor(config) {
    this._config = config;
    this.$el = this.initView()
    this.$taskInput = this.$el.find('#newTaskInput');
    }  

    initView() {
        return $(`<form id="addTaskForm">
                   <div class="row">
                     <div class="ten columns">
                     <input type="text"
                            id="newTaskInput"/>
                     </div>
                     <div class="two columns">
                     <input class="add-btn" type="submit" value="Add"/>
                     </div>
                    </form>`).on('submit', (e) => this.onAddBtnClick(e));
    }
    
    onAddBtnClick(e) {
        e.preventDefault();

        const task = {
            title: this.$taskInput.val(),
             };
        this._config.onAdd(task);
        this.resetForm();
    }
    
    resetForm() {
        this.$taskInput.val('');
    }
}

