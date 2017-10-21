import React,{Component} from 'react'
import { Button, Input, message } from 'antd';
import UserDataTable from '../components/UserDataTable';
import '../static/login.scss'
const divStyle = {
    textAlign:'center !important'
};

let account = '',name='',date='';
class UserTableContainer extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
    }
    onChangeAccount(e){
        account = e.target.value;
    }
    onChangeName(e){
        name = e.target.value;
    }
    onChangeDate(e){
        date = e.target.value;
    }
    handleClickSearch(){
        console.log(account+' ,'+name+','+date)
        message.error(account+' ,'+name+' ,'+date)
    }
    handleClickBtn(e){
        switch (e.target.value){
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
                console.log('添加用户')
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
            title: 'name',
            dataIndex: 'name',
        }, {
            title: '账号',
            dataIndex: 'account',
        }, {
            title: '分组',
            dataIndex: 'group',
        }, {
            title: '状态',
            dataIndex: 'status',
        }];
        let data = [{
            key: '1',
            id:'1001',
            name: 'John Brown',
            account: '11111111111',
            group: '管理员',
            status: '未锁定',
        }, {
            key: '2',
            id:'1002',
            name: 'John Brown',
            account: '11111111111',
            group: '管理员',
            status: '未锁定',
        }, {
            key: '3',
            id:'1003',
            name: 'John Brown',
            account: '11111111111',
            group: '管理员',
            status: '未锁定',
        }, {
            key: '4',
            id:'1004',
            name: 'John Brown',
            account: '11111111111',
            group: '管理员',
            status: '未锁定',
        }, {
            key: '5',
            id:'1005',
            name: 'John Brown',
            account: '11111111111',
            group: '管理员',
            status: '未锁定',
        }, {
            key: '6',
            id:'1006',
            name: 'John Brown',
            account: '11111111111',
            group: '管理员',
            status: '未锁定',
        }];
        function getData(){
            let datas=[];
            for (let i = 0; i < 10; i++){
                console.log(data)
                datas = datas.concat(data)
            }
            return datas;
        }
        return(
            <div style={divStyle}>
                <div className='searchBox'>
                    <span>账号 <Input id='account' onChange={(e)=>this.onChangeAccount(e)} /></span>
                    <span>姓名 <Input ref='Name' onChange={(e)=>this.onChangeName(e)}/></span>
                    <span>创建时间 <Input type='date' onChange={(e)=>this.onChangeDate(e)}/></span>
                    <Button type='primary' onClick={this.handleClickSearch}>搜索</Button>
                </div>
                <div className='operateBtn' onClick={(e)=>this.handleClickBtn(e)}>
                    <Button type="primary" value='1'>下载模板</Button>
                    <Button type="primary" value='2'>下载数据</Button>
                    <Button type="primary" value='3'>上传</Button>
                    <Button type="primary" value='4'>添加用户</Button>
                </div>
                <div className='dataTable'>
                    <UserDataTable data={getData()} columns={columns}></UserDataTable>
                </div>
            </div>
        )}
}
export default UserTableContainer;