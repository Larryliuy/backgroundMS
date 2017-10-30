import React,{Component} from 'react'
import { Button, Input, message, Popconfirm } from 'antd';
import ShowDataTable from '../components/ShowDataTable';
import '../static/login.scss'
import axios from 'axios'
import dataOne from '../mock/mock'
const divStyle = {
    textAlign:'center !important'
};

let account = '',name='',date='';
class UserTableContainer extends React.Component {
    constructor(props){
        super(props)
        this.state={
            editable:false
        }
    }
    componentDidMount(){
        axios.get('http://wthrcdn.etouch.cn/weather_mini?citykey=101280601')
            .then(function (response) {
                /*console.log(response);
                console.log(response.data);
                console.log(response.data.data);*/
            })
            .catch(function (error) {
                console.log(error);
            });
        const first = 'first';
        const last = 'last';
        const host = 'localhost';
        const port = '3006';
        const database = 'login';
        const welcome = `You have logged in as ${first} ${last}`;
        const login = `http://${host}:${port}/${database}`;
        // console.log(welcome)
        // console.log(login)
        console.log(dataOne)
        // location.href = login;
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
        // console.log(account+' ,'+name+','+date)
        message.error(account+' ,'+name+' ,'+date)
    }
    changeEditable(editable){
        this.setState({editable:editable})
    }
    handleClickBtn(e){
        switch (e.target.value){
            case '1':
                console.log('下载模板')
                message.error('error')
                break;
            case '2':
                console.log('下载数据')
                message.error('error')
                break;
            case '3':
                console.log('上传')
                message.error('error')
                break;
            case '4':
                console.log('添加用户')
                message.error('error')
                break;
            default:
                console.log('别瞎鸡巴乱点')
        }

    }
    edit() {
        this.setState({ editable:true });
    }
    editDone(){
        this.setState({ editable:false });
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
        },{title: '操作',
            dataIndex: 'operation',
            render: () => {
            const { editable } = this.state ;
            return (<div>
            {editable ?
                <span>
                      <a onClick={() => this.editDone()}>保存 </a>
                      <Popconfirm title="确定取消吗?" onConfirm={() => this.editDone()}>
                        <a> 取消</a>
                      </Popconfirm>
                    </span>
                :
                <span><a onClick={() => this.edit()}>编辑</a> | <a>详情</a> | <a>锁定</a> | <a>删除</a></span>
            }
        </div>)}}];
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
                // console.log(data)
                datas = datas.concat(data)
            }
            // console.log(datas)
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
                    <ShowDataTable data={getData()} columns={columns} operateType='user'></ShowDataTable>
                </div>
            </div>
        )}
}
export default UserTableContainer;