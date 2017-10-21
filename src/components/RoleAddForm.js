import React,{Component} from 'react';
import { message, Input,Button,Checkbox} from 'antd';

let permission={user:false,check:false},roleName='';

class RoleAddForm extends Component{
    constructor(props){
        super(props)
    }
    onChangeName(e){
        roleName = e.target.value
    }
    onChangeUser(e){
        permission.user = e.target.checked
    }
    onChangeCheck(e){
        permission.check = e.target.checked
    }
    handleClick(){
        console.log(permission.user+' ,'+ permission.check + ' ,' + roleName)
        message.success(permission.user+' ,'+ permission.check + ' ,' + roleName)
    }
    render(){
        return (<div style={{textAlign:'center'}}>
            <div>角色名称 <Input onChange={(e)=>this.onChangeName(e)} style={{width:'298px'}}/></div>
            <div style={{paddingTop:'22px',width:'340px',display:'inline-flex', justifyContent:'space-between'}}><span>权 限</span> <Checkbox onChange={(e)=>this.onChangeUser(e)}>用户模块</Checkbox><Checkbox onChange={(e)=>this.onChangeCheck(e)}>巡检模块</Checkbox></div>
            <div style={{paddingTop:'22px'}}><Button type='primary' onClick={this.handleClick} style={{width:'120px'}}>提 交</Button></div>
        </div>)
    }
}
export default RoleAddForm;