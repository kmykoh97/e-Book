import React from 'react';
import { Button, Header, Image, Modal, Icon, } from 'semantic-ui-react'
import BookImage from '../../static/database/img/Book.jpg'
import Hat1 from '../../static/database/img/books/1.jpg';
import Hat2 from '../../static/database/img/books/2.jpg';
import Hat3 from '../../static/database/img/books/3.png';
import Hat4 from '../../static/database/img/books/4.png';
import Hat5 from '../../static/database/img/books/5.jpg';
import Hat6 from '../../static/database/img/books/6.jpg';
import Hat7 from '../../static/database/img/books/7.png';
import Hat8 from '../../static/database/img/books/8.jpg';
import Hat9 from '../../static/database/img/books/9.jpg';
import Hat10 from '../../static/database/img/books/10.jpg';
import Hat11 from '../../static/database/img/books/11.jpg';
import Hat12 from '../../static/database/img/books/12.jpg';
import Hat13 from '../../static/database/img/books/13.jpg';
import Hat14 from '../../static/database/img/books/14.jpg';
import Hat15 from '../../static/database/img/books/15.jpg';
import Hat16 from '../../static/database/img/books/16.png';
import Hat17 from '../../static/database/img/books/17.jpg';
import Hat18 from '../../static/database/img/books/18.jpg';
import Hat19 from '../../static/database/img/books/19.png';
import Hat20 from '../../static/database/img/books/20.jpg';
import Hat21 from '../../static/database/img/books/21.jpg';
import Hat22 from '../../static/database/img/books/22.jpg';
import Hat23 from '../../static/database/img/books/23.png';



export const hatsArr = [
    Hat1,
    Hat2,
    Hat3,
    Hat4,
    Hat5,
    Hat6,
    Hat7,
    Hat8,
    Hat9,
    Hat10,
    Hat11,
    Hat12,
    Hat13,
    Hat14,
    Hat15,
    Hat16,
    Hat17,
    Hat18,
    Hat19,
    Hat20,
    Hat21,
    Hat22,
    Hat23,
]

class BookDetail extends React.Component {
    render() {
        return (
            <Modal trigger={<Button className="ui right floated primary button add-button">See Detail<Icon name='right chevron' /></Button>} closeIcon>
                <Modal.Header>Description</Modal.Header>
                <Modal.Content image>
                    <Image wrapped size='medium' src={BookImage} />
                    <Modal.Description>
                        <Header>{this.props.book.title}</Header>
                        <p> <b>ISBN:</b>18621669493</p>
                        <p> <b>Written By:</b>{this.props.book.author}</p>
                        <p> <b>Genre:</b>{this.props.book.category}</p>
                        <p> <b>Price:</b>{this.props.book.price}</p>
                        <p> <b>Description:</b>{this.props.book.description}</p>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }
}


class BookCard extends React.Component {
    removeBook = () => {
        this.props.removeBook(this.props.book.id)
    }

    render() {
        return (
            <tbody>
            {
                <tr>
                    <div className="ui divided items">

                        <div className="item">
                            <div className="image">
                                <img src={hatsArr[Math.floor(Math.random() * hatsArr.length)]} alt={this.props.book.title}/>
                            </div>
                            <div className="content">
                                <a className="header">{this.props.book.title}</a>
                                <div className="meta">
                                    <b>Written By:{this.props.book.author}</b>
                                </div>
                                <div className="genre">
                                    <b>Genre:{this.props.book.category}</b>
                                </div>
                                <div className="price">
                                    <h3><b>{this.props.book.price}</b></h3>
                                </div>
                                <div className="extra">
                                    <BookDetail book={this.props.book}/>
                                    <div className="ui label">{this.props.book.sales} sales</div>
                                    <Button primary onClick={this.removeBook}>
                                        Remove
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </tr>
            }
            </tbody>

        );
    }
}



export default BookCard;