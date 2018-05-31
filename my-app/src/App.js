import  React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  render() {
    return (
        <div className="App">
            <AppName   name="MyNodejs"/>
            <AppState  />
            <Clock/>
            <Greeting isLoggedIn={true}/>
            <LoginControl/>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
                My React
            </p>


        </div>
    );

  }
}


//属性props
class AppName extends Component{
    render() {
        return (
            <h1>{this.props.name}</h1>
        );
    }
}

//状态state
class AppState extends Component{

    constructor(props) {
        super(props);
        this.state = {liked: false};
        // 这个绑定是必要的，使`this`在回调中起作用  官方建议构造函数绑定，性能较好
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(event) {
        this.setState({liked: !this.state.liked});
    }

    render() {
        var text = this.state.liked ? '喜欢' : '不喜欢';
        return (
            <p onClick={this.handleClick}>
                你<b>{text}</b>我。点我切换状态。
            </p>
        );
    }
}


//生命周期 时钟类
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}


//条件渲染，事件触发 登录登出
function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}
//列表函数
function ListItem(props) {
    // 正确！这里不需要指定 key ：
    return <li>{props.value}</li>;
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // 正确！key 应该在这里被指定
        <ListItem key={number.toString()}
                  value={number} />

    );
    //JSX允许在大括号中嵌入任何表达式，因此可以 内联 map() 结果：
    return (
        <ul>
            <ul>
                {numbers.map((number) =>
                    <ListItem key={number.toString()}
                              value={number} />

                )}
            </ul>
        </ul>
    );
}
//条件渲染
class Greeting extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: props.isLoggedIn};
    }

    render(){
        const numbers=[1,2,3,4,5];
        if(this.state.isLoggedIn){
            return (
                <div>
                    <h2>hello</h2>
                    <NumberList  numbers={numbers}/>
                </div>
            )
        }
        return(
            <div>
                <h2>no hello</h2>
            </div>
        )
    }
}
class LoginControl extends React.Component {
    constructor(props) {
        super(props);

        //函数记得绑定处理
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}






export default App;
