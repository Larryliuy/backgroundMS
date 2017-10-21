import React,{Component} from 'react'
import { Button, Input } from 'antd';
import UserAddForm from '../components/UserAddForm';
import '../static/login.scss'
const divStyle = {
    textAlign:'center !important',
    marginTop:'22px'
};


class UserAddContainer extends React.Component {
    render(){
        return(
            <div style={divStyle}>
                <div className='dataTable'>
                    <UserAddForm ></UserAddForm>
                </div>
            </div>
        )}
}
export default UserAddContainer;