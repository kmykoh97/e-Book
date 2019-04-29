import React from 'react';
import MainPage from './components/homepage/MainPage';
import MenuExampleSecondaryPointing from './components/header/Header.js';
import './App.css';



class App extends React.Component {
    state = { login: 'none' };

    render() {
        // if (this.state.login==='none') {
        //     return (
        //             <Login/>
        //     )
        // }else if (this.state.login==='user') {
        //     return (
        //         <MainPage userType="user" />
        //     )
        // }else if (this.state.login==='seller') {
        //     return (
        //         <MainPage userType="seller" />
        //     )
        // }

        return (
            <div>
                <MenuExampleSecondaryPointing />
                <MainPage />
            </div>
        )
    }
}



export default App;