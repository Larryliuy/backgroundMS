import React,{Component} from 'react'
import { Button, Input, message } from 'antd';
import UserDataTable from '../components/UserDataTable';
import '../static/login.scss'
const divStyle = {
    textAlign:'center !important'
};

let roleName = '';
class RoleTableContainer extends React.Component {
    onChangeRoleName(e){
        roleName = e.target.value;
    }
    handleClickSearch(){
        console.log(roleName)
        message.error(roleName)
    }
    handleClickBtn(e) {
        console.log(e.target.value)
        switch (e.target.value) {
            case '1':
                console.log('下载模板')
                break;
            case '2':
                console.log('下载数据')
                break;
            case '3':
                console.log('上传')
                break;
            case '4':
                console.log('添加角色')
                break;
            default:
                console.log('别瞎鸡巴乱点')
        }
    }
    render(){
        let columns = [{
            title: 'ID',
            dataIndex: 'id',
        }, {
            title: '角色',
            dataIndex: 'role',
        }, {
            title: '状态',
            dataIndex: 'status',
        }];
        const data = [{
            key: '1',
            id:'1001',
            role: 'John Brown',
            status: '未锁定',
        }, {
            key: '2',
            id:'1002',
            role: 'John Brown',
            status: '未锁定',
        }, {
            key: '3',
            id:'1003',
            role: 'John Brown',
            status: '未锁定',
        }, {
            key: '4',
            id:'1004',
            role: 'John Brown',
            status: '未锁定',
        }, {
            key: '5',
            id:'1005',
            role: 'John Brown',
            status: '未锁定',
        }];
        return(
            <div style={divStyle}>
                <div className='searchBox'>
                    <span>角色名称&nbsp;&nbsp; <Input onChange={(e)=>this.onChangeRoleName(e)} /></span>
                    <Button type='primary' onClick={this.handleClickSearch}>搜索</Button>
                </div>
                <div className='operateBtn' onClick={(e)=>this.handleClickBtn(e)}>
                    <Button type="primary" value='1'>下载模板</Button>
                    <Button type="primary" value='2'>下载数据</Button>
                    <Button type="primary" value='3'>上传</Button>
                    <Button type="primary" value='4'>添加角色</Button>
                </div>
                <div className='dataTable'>
                    <UserDataTable data={data} columns={columns}></UserDataTable>
                </div>
            </div>
        )}
}
export default RoleTableContainer;