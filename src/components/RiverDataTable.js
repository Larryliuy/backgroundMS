import React,{Component} from 'react';
import { Table, message, Badge} from 'antd';

class RiverDataTable extends Component{
    constructor(props){
        super(props)
    }
    handleClick(e){
        // console.log(e.target.text)
        message.success(e.target.text)
    }

    render(){
        //从父组件获取数据
        let columns = this.props.columns;
            const lastColumn = {title: '操作', dataIndex: 'operate', render: () => (<span onClick={(e)=>this.handleClick(e)}><a>编辑</a> | <a>删除</a> | <a>查看支流</a></span>)}
            // console.log(this.props)
            columns.push(lastColumn)
        return (<div>
            <Table size='large' expandedRowRender={expandedRowRender} dataSource={this.props.data} columns={columns} pagination={{ pageSize: 5 }}/>
        </div>)
    }
}
export default RiverDataTable;

const expandedRowRender = () => {
    const columns = [
        {title: 'Date', dataIndex: 'date', key: 'date'},
        {title: 'Name', dataIndex: 'name', key: 'name'},
        {title: 'Status', key: 'state', render: () => <span><Badge status="success"/>Finished</span>},
        {
            title: 'Action',
            dataIndex: 'operation',
            key: 'operation',
            render: () => (
                <span onClick={(e)=>this.handleClick(e)}><a>编辑</a> | <a>删除</a> | <a>查看支流</a></span>
            ),
        },
    ];

    const data = [];
    for (let i = 0; i < 3; ++i) {
        data.push({
            key: i,
            date: '2014-12-24 23:12:00',
            name: 'This is production name',
        });
    }
    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            showHeader={false}
        />
    );
};