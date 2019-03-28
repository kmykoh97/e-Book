import React　from 'react';
import SideNav, { MenuIcon } from 'react-simple-sidenav';
import { Link } from 'react-router-dom'
import UserImage from '../../static/database/img/UserAvatar.png';



class NavBar extends React.Component
{
    state = { showNav: false };

    render() {
        return (
            <div>
                <MenuIcon onClick={() => this.setState({ showNav: true })} />
                
                <SideNav
                showNav={this.state.showNav}
                onHideNav={()=>this.setState({showNav:false})}
                title={<div><img src={UserImage} width='50' />User, welcome to e-Book</div>}
                titleStyle={{backgroundColor: '#2196F3'}}
                items={[
                     <Link to="/">Home</Link>,
                     <Link to="/login">Login</Link>,
                     <Link to="/market">Marketplace</Link>,
                     <Link to="/cart">Cart</Link>,
                     <Link to="/myprofile">Help & Contact</Link>,
                ]}
                />
            </div>
        )
    }
}



export default NavBar;