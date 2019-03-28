import React from 'react';
import { Button, Header, Image, Modal, Icon, } from 'semantic-ui-react'
import BookImage from '../../static/database/img/Book.jpg'



class BookDetail extends React.Component {
    render() {
        return (
            <Modal trigger={<Button className="ui right floated primary button add-button">See Detail<Icon name='right chevron' /></Button>} closeIcon>
                <Modal.Header>Description</Modal.Header>
                <Modal.Content image>
                    <Image wrapped size='medium' src={BookImage} />
                    <Modal.Description>
                        <Header>{this.props.book.title}</Header>
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
                                <img src={BookImage} alt={this.props.book.title}/>
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