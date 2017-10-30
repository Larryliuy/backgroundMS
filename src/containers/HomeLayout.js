import { Layout, Menu, Icon ,message, Button, Input, Breadcrumb, Row, Col } from 'antd';
import React,{ Component } from 'react';
import { Link } from 'react-router-dom'
const { Header, Content, Footer, Sider } = Layout;
import ShowTime from '../components/ShowTime'
import UserTableContainer from '../containers/UserTableContainer'
import UserAddContainer from '../containers/UserAddContainer'
import RoleAddContainer from '../containers/RoleAddContainer'
import RoleTableContainer from '../containers/RoleTableContainer'
import OperateRecordContainer from '../containers/OperateRecordContainer'
import RiverTableContainer from '../containers/RiverTableContainer'
import store,{CONSTANT} from '../reducer/reducer';
import '../static/login.scss'
const {SubMenu} = Menu;
const layoutStyle = {
    width:'100%',
    height:'100%'
}
 let state = store.getState();
store.subscribe(function () {
    state = store.getState()
});

class HomeLayout extends React.Component {
    /*componentDidMount(){
        this.setState({key:'1'})
    }*/
    constructor(props){
        super(props)
    }
    //左侧导航栏点击事件处理函数
    onClickHandle = (e) => {
        //key用来控制导航栏菜单视图
        store.dispatch({type:CONSTANT.TASKKEY,val:{key:e.key}})
    };
    loginOut=()=>{
        // location.replace("/login");
        // location.hash("/login");
        message.success('退出成功！')
    };
    render() {
        //导航栏中key与功能的关系映射
        const breadcrumbsMap = [
            {key:'1',value:'首页'},
            {key:'2',value:'用户列表'},
            {key:'3',value:'添加用户'},
            {key:'4',value:'角色列表'},
            {key:'5',value:'添加角色'},
            {key:'6',value:'操作记录'},
            {key:'7',value:'河道列表'},
            {key:'8',value:'添加河道'}
        ];
        return (
            <Layout style={layoutStyle}>
                <Header className='header' >
                    <h1>广州黄浦区真景三维河道巡检后台管理系统</h1>
                    <span className='userInfo'>管理员 larry &nbsp;&nbsp;&nbsp;&nbsp;  <ShowTime/></span>
                    <Link to='/login' onClick={this.loginOut} style={{position:'absolute',top:5,right:30,cursor:'pointer'}}><Icon type="poweroff" style={{fontSize:18,color:'red'}}/></Link>
                </Header>
                <Layout>
                    <Sider className='menu-box' width={250}>
                        <Menu mode="inline"
                              defaultSelectedKeys={['2']}
                              defaultOpenKeys={['user']}
                              onClick={(e)=>this.onClickHandle(e)}>
                            <Menu.Item key="1">{breadcrumbsMap[0].value}</Menu.Item>
                            <SubMenu key="user" title={<span>用户管理</span>}>
                                <Menu.Item key="2">{breadcrumbsMap[1].value}</Menu.Item>
                                <Menu.Item key="3" >{breadcrumbsMap[2].value}</Menu.Item>
                            </SubMenu>
                            <SubMenu key="role" title={<span>角色管理</span>}>
                                <Menu.Item key="4">{breadcrumbsMap[3].value}</Menu.Item>
                                <Menu.Item key="5">{breadcrumbsMap[4].value}</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="6">{breadcrumbsMap[5].value}</Menu.Item>
                            <SubMenu key="river" title={<span>河道管理</span>}>
                                <Menu.Item key="7">{breadcrumbsMap[6].value}</Menu.Item>
                                <Menu.Item key="8">{breadcrumbsMap[7].value}</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Content className="content-box">
                        <Breadcrumb className="breadcrumb-left">
                        <Breadcrumb.Item>{breadcrumbsMap[state.homeState.key-1].value}</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{height:'1px',backgroundColor:'#eee'}}></div>
                        {state.homeState.key === '2' && <UserTableContainer></UserTableContainer>}
                        {state.homeState.key === '4' && <RoleTableContainer></RoleTableContainer>}
                        {state.homeState.key === '3' && <UserAddContainer></UserAddContainer>}
                        {state.homeState.key === '5' && <RoleAddContainer></RoleAddContainer>}
                        {state.homeState.key === '6' && <OperateRecordContainer></OperateRecordContainer>}
                        {state.homeState.key === '7' && <RiverTableContainer></RiverTableContainer>}
                    </Content>
                </Layout>
                <Footer style={{ textAlign: 'center' }}>CopyRight©2017,AllRight Reverse</Footer>
            </Layout>
        );
    }
}

export default HomeLayout;

// 系统屏幕尺寸（宽高）
const winWidth = window.innerWidth;
const winHeight = window.innerHeight;