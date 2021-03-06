import React,{Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import  cookieUtil  from '../libs/cookieUtil'
import { Form, Icon, Input, Button, Checkbox,message } from 'antd';
const FormItem = Form.Item;


const Login = (props) => {
    let userName = '';
    let password = '';
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('register:'+userName)
    };
    const onChangeUserName = (e) => {
        // console.log('userName:' + e.target.value)
        userName = e.target.value;
    };
    const onChangePassword = (e) => {
        // console.log('password:' + e.target.value)
        password = e.target.value;
    };
    const onClickHandle =() =>{
        props.login(true);//无条件登录用于测试
        return;
        if(cookieUtil.get('loginChecked')=='true'){
            if('larry' === cookieUtil.get('userName') && '123' === cookieUtil.get('password')){
                message.success('登录成功！')
                props.login(true);
                if(cookieUtil.get('loginChecked')=='true'){
                    cookieUtil.set('userName',userName,new Date().setTime(new Date().getTime()+24*60*60*1000))
                    cookieUtil.set('password',password,new Date().setTime(new Date().getTime()+24*60*60*1000))
                }
            }else{
                message.error('帐号或密码错误')
            }
        }else {
            if(userName === 'larry' && password === '123'){
                message.success('登录成功！')
                props.login(true);
                if(cookieUtil.get('loginChecked')=='true'){
                    cookieUtil.set('userName',userName,new Date().setTime(new Date().getTime()+24*60*60*1000))
                    cookieUtil.set('password',password,new Date().setTime(new Date().getTime()+24*60*60*1000))
                }
            }else {
                message.error('帐号或密码错误')
            }
        }
    };
    const onChangeCheckBox =(e) => {
        // if(!cookieUtil.get('loginChecked')){
            cookieUtil.set('loginChecked',e.target.checked)
            console.log(document.cookie)
            console.log(cookieUtil.get('loginChecked'))
        if(e.target.checked){

        }else {
            cookieUtil.unset('userName')
            cookieUtil.unset('password')
        }
        // }
    };
    return (<Form onSubmit={handleSubmit} className="login-form">
                <FormItem>
                    <Input onChange = {(e) => onChangeUserName(e)}
                           prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                           defaultValue={cookieUtil.get('loginChecked')=='true'?cookieUtil.get('userName'):''}  placeholder="Username" />
                </FormItem>
                <FormItem>
                    <Input onChange = {(e) => onChangePassword(e)}
                           prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                           type="password" defaultValue={cookieUtil.get('loginChecked')=='true'?cookieUtil.get('password'):''} placeholder="Password" />
                </FormItem>
                <FormItem>
                    <Checkbox defaultChecked={cookieUtil.get('loginChecked')=='true'}
                              onChange={(e)=>onChangeCheckBox(e)}
                              style = {{float:'left'}}>记住密码</Checkbox>
                    {/*<a className="login-form-forgot" href="">忘记密码</a>*/}
                    <br/>
                    <Button type="primary" htmlType="submit" className="login-form-button" onClick={()=>onClickHandle()}>
                        登 录
                    </Button>
                    {/*Or <Link to="/register" >现在注册<Icon type="right"/></Link>*/}
                </FormItem>
        </Form>
    );
}

export default Login;
