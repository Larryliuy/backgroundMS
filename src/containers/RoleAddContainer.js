import React,{Component} from 'react'
import { Button, Input } from 'antd';
import RoleAddForm from '../components/RoleAddForm';
import '../static/login.scss'
const divStyle = {
    textAlign:'center !important',
    marginTop:'22px'
};


class RoleAddContainer extends React.Component {
    render(){
        return(
            <div style={divStyle}>
                <div>
                    <RoleAddForm ></RoleAddForm>
                </div>
            </div>
        )}
}
export default RoleAddContainer;