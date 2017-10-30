import React,{Component} from 'react';
import { Table, message, Popconfirm} from 'antd';
import EditableCell from './EditableCell';

class ShowDataTable extends Component{
    constructor(props){
        super(props)
        this.state={
            editable:false
        }
    }
    renderColumns(data, index, key, text) {
        const { editable, status } = data[index][key];
        if (typeof editable === 'undefined') {
            return text;
        }
        return (<EditableCell
            editable={editable}
            value={text}
            onChange={value => this.handleChange(key, index, value)}
            status={status}
        />);
    }
    handleClick(e){
        // console.log(e.target.text)
        message.success(e.target.text)
    }
    render(){
        //从父组件获取数据
        let columns = this.props.columns;
        return (<div>
            <Table indentSize = { 0 } size='large' dataSource={this.props.data} columns={columns} bordered pagination={{ pageSize: 5 }}/>
        </div>)
    }
}
export default ShowDataTable;