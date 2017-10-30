import React,{ Component } from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import { connect,Provider } from 'react-redux';
import store,{collapsed,CONSTANT} from './reducer/reducer';
import LoginBox from './containers/LoginBox';
import RegisterBox from './containers/RegisterBox';
import HomeLayout from './containers/HomeLayout';

//css
const h4Style = {
    // textAlign:'center',
    height:'100%'
};

class App extends React.Component {
render(){
    return (
        <BrowserRouter>
            <div style={h4Style}>
                <Route path='/home' component={HomeLayout}/>
                <Route path='/login' component={LoginBox}/>
                <Route path='/' exact  component={LoginBox}/>
            </div>
        </BrowserRouter>
    )
}

}

function mapStateToProps(state) {
    return {
        loginState:state.loginState,
        homeState:state.homeState
    }
}
//映射Redux action到组件属性
function mapDispatchToProps(dispatch) {
    return {
        onClick:dispatch(collapsed(CONSTANT.COLLAPSED))
    }
}


const App1=connect(mapStateToProps)(App);

ReactDom.render(
    <Provider store={store}>
        <App1/>
    </Provider>,
    document.getElementById('main'));

