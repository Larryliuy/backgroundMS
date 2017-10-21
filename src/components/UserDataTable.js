import React,{Component} from 'react';
import { Table, message} from 'antd';

class UserDataTable extends Component{
    constructor(props){
        super(props)
    }
    handleClick(e){
        console.log(e.target.text)
        message.success(e.target.text)
    }
    render(){
        let columns = this.props.columns;
        if(!this.props.noOperate){
            const lastColumn = {title: '操作', dataIndex: 'operate', render: () => (<span onClick={(e)=>this.handleClick(e)}><a>编辑</a> | <a>详情</a> | <a>锁定</a> | <a>删除</a></span>)}
            console.log(this.props)
            columns.push(lastColumn)
        }
        return (<div>
            <Table size='large' dataSource={this.props.data} columns={columns} bordered pagination={{ pageSize: 5 }}/>
        </div>)
    }
}
export default UserDataTable;