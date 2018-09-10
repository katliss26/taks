import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {todos} from './todos'
import Navegation from './components/Navigation'
import TodoForm from './components/TodoForm'

class App extends Component {
    constructor(){
        super();
        this.state = {
             todos
        }
        this.handleAddTodo = this.handleAddTodo.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
    }

    handleAddTodo(todo){
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }
    removeTodo(index){
        this.setState({
            todos: this.state.todos.filter((e, i) => {
                return i !== index
            })
        })
    }
    render() {
        console.log(this.state.todos);
        const todos = this.state.todos.map((todo,i)=>{
            return(
                <div className = "col-md-4" key={i}>
                    <div className = "card mt-4">
                        <div className= "card-header">
                            <h3>{todo.title}</h3>
                            {todo.priority === "Low" &&
                                <span className="badge badge-pill badge-success"> {todo.priority}</span>
                            }
                            {todo.priority === "Medium" &&
                             <span className="badge badge-pill badge-warning"> {todo.priority}</span>
                            }
                            {todo.priority === "High" &&
                             <span className="badge badge-pill badge-danger"> {todo.priority}</span>
                            }
                        </div>
                        <div className="card-body">
                            <p>{todo.description}</p>
                            <p className="text-right font-italic">{todo.responsible}</p>
                        </div>
                        <div className="card-footer">
                            <button
                                className="btn btn-danger"
                                onClick={this.removeTodo.bind(this, i)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <div className="App">
                <Navegation title="My Tasks" cant={this.state.todos.length}/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={logo} className="App-logo" alt="logo" />
                            <TodoForm onAddTodo={this.handleAddTodo}/>
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                { todos }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
