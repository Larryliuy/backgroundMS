import React,{Component} from 'react'
import { Button, Input, message } from 'antd';
import RiverDataTable from '../components/RiverDataTable';
import ShowDataTable from '../components/ShowDataTable';
import '../static/login.scss'
const divStyle = {
    textAlign:'center !important'
};

let roleName = '';
class RiverTableContainer extends React.Component {
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
            title: '河道名称',
            dataIndex: 'id',
            width:'20%'
            // className:'tableBkc'
        }, {
            title: '长度',
            dataIndex: 'role',
        }, {
            title: '涉及河段',
            dataIndex: 'status',
        }];
        const data = [{
            key: '1',
            id:'乌涌',
            role: '22660',
            status: '白云区南木村至乌涌水闸',
        }, {
            key: '2',
            id:'乌涌',
            role: '22660',
            status: '白云区南木村至乌涌水闸',
            children: [{
                key: 'l1',
                id:'左支流',
                role: '3700',
                status: '加庄村北至广园路',
            },{
                key: 'l2',
                id:'下沙涌',
                role: '699',
                status: '公园东路至乌涌',
            },{
                key: 'l3',
                id:'右支流',
                role: '699',
                status: '公园东路至乌涌',
            },{
                key: 'l4',
                id:'上沙涌',
                role: '699',
                status: '公园东路至乌涌',
            }]
        }, {
            key: '3',
            id:'乌涌',
            role: '22660',
            status: '白云区南木村至乌涌水闸',
        }, {
            key: '4',
            id:'乌涌',
            role: '22660',
            status: '白云区南木村至乌涌水闸',
        }, {
            key: '5',
            id:'乌涌',
            role: '22660',
            status: '白云区南木村至乌涌水闸',
        }];
        return(
            <div style={divStyle}>
                <div className='searchBox'>
                    <span>河流名称&nbsp;&nbsp; <Input onChange={(e)=>this.onChangeRoleName(e)} /></span>
                    <Button type='primary' onClick={this.handleClickSearch}>搜索</Button>
                </div>
                <div className='operateBtn' onClick={(e)=>this.handleClickBtn(e)}>
                    <Button type="primary" value='1'>下载模板</Button>
                    <Button type="primary" value='2'>下载数据</Button>
                    <Button type="primary" value='3'>上传</Button>
                    <Button type="primary" value='4'>添加河流</Button>
                </div>
                <div className='dataTable'>
                    {/*<RiverDataTable data={data} columns={columns} operateType='river'></RiverDataTable>*/}
                    <ShowDataTable data={data} columns={columns} operateType='river'></ShowDataTable>
                </div>
            </div>
        )}
}
export default RiverTableContainer;