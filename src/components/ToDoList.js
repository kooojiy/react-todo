import React from "react";

class ToDoList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            todolist: [],
            content: "",
        }
    }

    handleChange(event){
        this.setState({
            content: event.target.value,
        })
    }

    handleSubmit(){
        this.setState({
            todolist: this.state.todolist.concat(this.state.content),
            content: "",
        })
    }



    render(){
        const alllist = this.state.todolist;

        return(
            <div>
                <h1>ToDoList</h1>
                    <input type="text" value={this.state.content} onChange={(event)=>{this.handleChange(event)}} />
                    <br/>
                    <input type="submit" value="作成する" onClick={()=>{this.handleSubmit()}} />

                    <ul>
                        {alllist.map((each)=>{
                            return <p>・{each} </p>
                        })}
                    </ul>
            </div>
        )
    }
}

export default ToDoList;