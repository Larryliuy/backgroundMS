import React,{Component} from 'react';
import {  message, Input,Button} from 'antd';

let account='',name='',role='';

class UserAddForm extends Component{
    constructor(props){
        super(props)
    }
    onChangeName(e){
        name = e.target.value;
    }
    onChangeAccount(e){
        account = e.target.value;
    }
    onChangeRole(e){
        role = e.target.value;
    }
    handleClick(){
        console.log(name+' ,'+ account + ' ,' + role)
        message.success(name+' ,'+ account + ' ,' + role)
    }
    render(){
        return (<div style={{textAlign:'center'}}>
            <div>姓名 <Input onChange={(e)=>this.onChangeName(e)} style={{width:'298px'}}/></div>
            <div style={{paddingTop:'22px'}}>帐号 <Input onChange={(e)=>this.onChangeAccount(e)} style={{width:'298px'}}/></div>
            <div style={{paddingTop:'22px'}}>角色 <Input onChange={(e)=>this.onChangeRole(e)} style={{width:'298px'}}/></div>
            <div style={{paddingTop:'22px'}}><Button type='primary' style={{width:'120px'}} onClick={this.handleClick}>提 交</Button></div>
        </div>)
    }
}
export default UserAddForm;