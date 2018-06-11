import React from 'react';
import { Layout, Form, Input, List, Icon, Modal, Popconfirm } from 'antd';
import NewTodo from './new-todo';
const { Header, Content, Footer } = Layout;
const FormItem = Form.Item;
const { TextArea } = Input;

class TodoComponent extends React.Component {
  constructor(props) {
    super(props);
    props.fetchTodos();
    this.state = {visible:false, currentTodoId:-1, currentTitle:'', currentDesp:''}
    this.handleChange = this.handleChange.bind(this);
  }
  showModal = (id) => {
    var todo = this.props.todos[id];
    console.log(todo);
    this.setState({visible: true, currentTodoId:todo.id,currentTitle:todo.title,currentDesp:todo.desp});
  }
  handleOk = (e) => {
    console.log('outside if');
    if(this.state.currentTitle!='') {
      console.log('inside if');
      this.props.editTodo( this.state.currentTodoId,this.state.currentTitle,this.state.currentDesp);
      this.setState({visible: false,currentTodoId:'',currentTitle:'',currentDesp:''});
    }
  }
  handleCancel = (e) => {
    this.setState({visible: false});
  }
  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const id = target.id;
    console.log(id);
    this.setState({ [id]: value});
  }
  render () {
    return (
      <div className="todo-wrapper">
        <Header className="header">
          <span className="title">Todo App</span>
        </Header>
        <Content className="content">
          <NewTodo addTodo={this.props.addTodo}/>
          <div>
            <br/>
            <h2 style={{ margin: '16px 0' }}>Todo list</h2>
            <List
              style={{maxWidth:'600px', margin:'auto'}}
              itemLayout="horizontal"
              dataSource={this.props.todos}
              renderItem={item => (
                <List.Item
                  actions={[
                    <Icon style={{color:'#1890ff'}} onClick={()=>this.showModal(item.id)} type="edit" />, 
                    <Popconfirm title="Are you sure delete this task?" onConfirm={()=>this.props.deleteTodo(item.id)} okText="Yes" cancelText="No">
                      <Icon style={{color:'#f5222d'}} type="delete" text="156" />
                    </Popconfirm>
                  ]}
                >
                  <List.Item.Meta
                    title={<a href="https://ant.design">{item.title}</a>}
                    description={item.desp}
                  />
                </List.Item>
              )}
            />
          </div>
          <Modal
            title="Edit Todo"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <Input placeholder="Title" id="currentTitle" onChange={this.handleChange} value={this.state.currentTitle}/>
            <br/><br/>
            <Input placeholder="Description" id="currentDesp" onChange={this.handleChange} value={this.state.currentDesp}/>
          </Modal>
        </Content>
        <Footer style={{textAlign:'center',position:'fixed',width:'100%',bottom:'0rem'}}>
          Made by Viraj
        </Footer>
      </div>
    );
  }
}

export default TodoComponent