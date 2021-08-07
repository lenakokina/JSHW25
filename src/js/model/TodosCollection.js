
export default class TodosCollection {
  constructor(url) {
    this._url = url;
    this.list = [];
    this.item = null;    
    }

    fetchTodos(){
        return fetch(this._url)
          .then((res) => res.json())
          .then((data) => this.setData(data));
    }
    
   setData(data) {
    this.list = data;
    }

    toggle(id) {
        const todo = this.list.find((item) => item.id == id);
        todo.isDone = !todo.isDone;                 
              
        return fetch(`${this._url}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(todo),           
            headers: {
                'Content-Type' : 'application/json',
            },
            
        }).then((res) => res.json());
    }

    deleteTodo(id) {
        this.list = this.list.filter((item) => item.id != id);
        return fetch(`${this._url}/${id}`, {
        method: 'DELETE',
        });
        
    // ).then((res) => res.json());
    }

    addTodo(newTask) {
        newTask.isDone = false;

        if(newTask.title == '') {
            return;
        }    
        return fetch(`${this._url}`, {
            method: 'POST',
            body: JSON.stringify(newTask),            
            headers: {
                'Content-type' : 'application/json'
            },
            
        })
        .then((res) => res.json())
        .then(task => this.list.push(task))
    }
}
