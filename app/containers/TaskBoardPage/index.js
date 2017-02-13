import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import {each, filter} from 'lodash';

import H2 from 'components/H2';
import messages from './messages';
import Task from './Task';

import {BoardWrapper, AddTaskForm, Div, Form} from './Style';

export default class TaskBoardPage extends React.Component {
  
  constructor() {
    super();
    this.state = {
      showForm: false,
      content: '',
      title: '',
      tasks: []
    };
  }

  componentDidMount() {
    let tasks = localStorage.getItem('tasks');
    if(!_.isUndefined(tasks) && !_.isNull(tasks)) {
      this.setState({tasks: JSON.parse(tasks)});
    }
  }

  toggleTaskForm = () => {
    this.setState({showForm: true});
  }
  
  handleFormContent = (evt) => {
    this.setState({content: evt.target.value});
  }
  handleFormTitle = (evt) => {
    this.setState({title: evt.target.value});
  }

  removeTask = (id) => {
    let tasks = this.state.tasks.filter(item => item.id !== id);
    this.setState({tasks: tasks});
    this.setTasks(tasks);
  }
  
  handleAddTask = (evt) => {
    evt.preventDefault();
    const id = ((Math.random() * 9999) + 1).toFixed(0);
    const obj = { title: this.state.title, description: this.state.content, type:0, id:'task-ref'+id };
    this.setState((state) => ({ tasks: state.tasks.concat(obj) , title:'', description:'' }));
    this.setTasks(this.state.tasks);
  }

  dropDone = (evt) => {
    evt.preventDefault();
    let data = evt.dataTransfer.getData("text");
    evt.target.appendChild(document.getElementById(data));
    this.reArrangeTask(data, 2);
  }
  dropDragOverDone = (evt) => {
    evt.preventDefault();
  }

  dropDoing = (evt) => {
    evt.preventDefault();
    let data = evt.dataTransfer.getData("text");
    evt.target.appendChild(document.getElementById(data));
    this.reArrangeTask(data, 1);
  }
  dropDragOverDoing = (evt) => {
    evt.preventDefault();
  }

  reArrangeTask = (id, type) => {
    const updatedTasks = this.state.tasks.map((task, idx) => {
    if (task.id != id) { return task; }
      return { ...task,
          id: task.id,
          title: task.title,
          description: task.description, 
          type:type };
    });
    this.setTasks(updatedTasks);
  }

  setTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  render() {

    const todos = this.state.tasks.map((task, idx) => {
      if (task.type == 0) {
        return <Task id={task.id} key={idx} title={task.title} description={task.description} handleRemove={this.removeTask} />;
      }
    });
    const doings = this.state.tasks.map((task, idx) => {
      if (task.type == 1) {
        return <Task id={task.id} key={idx} title={task.title} description={task.description} handleRemove={this.removeTask} />;
      }
    });

    const dones = this.state.tasks.map((task, idx) => {
      if (task.type == 2) {
        return <Task id={task.id} key={idx} title={task.title} description={task.description} handleRemove={this.removeTask} />;
      }
    });
    
    return (
      <div className="col-12 col-sm-12 col-md-9">
        <Helmet
          title="TaskBoard Page"
          meta={[
            { name: 'description', content: 'Scrum task board page' },
          ]}
        />
        
        <H2>
          <FormattedMessage {...messages.heading} />
        </H2>
        <FormattedMessage {...messages.blurb} />

        <BoardWrapper className="row">
          <div className="col-12 col-md-4 board-box">
            <div className="title"><FormattedMessage {...messages.todo} />
              <button type="button" className="btn btn-primary" onClick={this.toggleTaskForm}>+</button>
            </div>
            {this.state.showForm &&
            <AddTaskForm>
              <label><FormattedMessage {...messages.title} /></label>
              <input name="title" type="text" onChange={this.handleFormTitle}/>
              
              <label><FormattedMessage {...messages.content} /></label>
              <textarea name="content" onChange={this.handleFormContent}>
              </textarea>
              <button className="btn btn-primary" onClick={this.handleAddTask}><FormattedMessage {...messages.addTask} /></button>
            </AddTaskForm>
            }
            <div className="tasks">
              {todos}
            </div>
          </div>
          <div className="col-12 col-md-4 board-box">
            <div className="title"><FormattedMessage {...messages.doing} /></div>
            <div className="tasks">
              {doings}
              <div className="board-box-doing" onDrop={this.dropDoing} onDragOver={this.dropDragOverDoing}></div>
            </div>
          </div>
          <div className="col-12 col-md-4 board-box">
            <div className="title"><FormattedMessage {...messages.done} /></div>
            <div className="tasks">
              {dones}
              <div className="board-box-done" onDrop={this.dropDone} onDragOver={this.dropDragOverDone}></div>
            </div>
          </div>
        </BoardWrapper>
     </div>
    )
  }
}