import React, {Component}　from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Icon, Image, Card } from 'semantic-ui-react'
import NavBar from './NavBar'
import Login from '../login/Login';
import Search from '../library/Search';
import CartPage from '../cart/CartPage';
import CheckOutPage from '../cart/CheckOutPage';
import AdminImage from "../../static/database/img/AdminImage.jpg";
import MainPageImage from '../../static/database/img/MainPage.jpg';



const Home = () => (
    <div>
        <img src={MainPageImage} width="400px" />
        <h1>Welcome to e-Book</h1>
        <p>Search the world's most comprehensive index of full-text library</p>
        <button><Link to="/market">Enter The Sea Of Knowledges</Link></button>
    </div>
);

const Contact = () => (
    <div>
        <h2>Feel free to contact us! We won't bite :)</h2>
        <CardExampleImageCard />
    </div>
);

class MainPage extends React.Component
{
    state = {
        selectedBooks: [],
        order:0,
        searchBy: 1,
        showNav:true
    };
    
    toggleOrder = (num) => {
        this.setState({
            order:num,
        })
    };

    toggleSearchOrder = (str) => {
        this.setState({
            searchBy:str,
        })
    };

    removeBook = (bookId) => {
        let nextSelectedBooks=this.state.selectedBooks.filter( function( book ) {
            return book.id !== bookId;
        });
        this.setState({
            selectedBooks:nextSelectedBooks,
        })
    };

    getSelectedBooks=(books)=>{
        this.setState({
            selectedBooks:books,
        })
    };

    render() {
        return (
            <div className="fad">
                <Router>
                    <div>
                        <NavBar />
                    </div>
                    <div className="pusher">
                        <hr />
                        <Route exact path="/" render={() => <Home />} />
                        <Route path="/login" render={() => <Login />} />
                        <Route path="/market" render={() => <Search selectedBooks={this.state.selectedBooks}  getSelectedBooks={this.getSelectedBooks} />} />
                        <Route path="/cart" render={() => <CartPage selectedBooks={this.state.selectedBooks} removeBook={this.removeBook} />} />
                        <Route path="/checkout" render={() => <CheckOutPage selectedBooks={this.state.selectedBooks} />} />
                        <Route path="/myprofile" component={Contact}/>
                        <hr />
                    </div>
                </Router>
            </div>

        )
    }
}

const CardExampleImageCard = () => (
    <Card fluid>
        <Image src={AdminImage} width="100px"/>
        <Card.Content>
            <Card.Header>Meng Yit Koh</Card.Header>
            <Card.Meta>Shanghai Jiao Tong University e-Book maintainer</Card.Meta>
            <Card.Description>kmykoh97@outlook.com +8618621669493</Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a target="_blank" href='https://github.com/kmykoh97'>
                <Icon name='user' />
                500 github stars
            </a>
        </Card.Content>
    </Card>
);



export default MainPage;