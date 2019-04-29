import _ from 'lodash';
import React from 'react';
import { Button, Header, Image, Modal, Icon, Search, Label } from 'semantic-ui-react';
import Books from '../../static/database/books.json';
import BookImage from '../../static/database/img/Book.jpg';
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

class BookDetail extends React.Component
{
    render() {
        return (
            <Modal style={{top: "50px", bottom: "auto"}} trigger={<Button className="ui right floated primary button add-button">See Detail<Icon name='right chevron' /></Button>} closeIcon>
                <Modal.Header>Description</Modal.Header>
                <Modal.Content image>
                    {/* <Image wrapped size='medium' src={this.props.book.book_image} /> */}
                    <Image size='medium' src={BookImage} rounded />
                    <Modal.Description>
                        <Label as='a' tag>
                            New
                        </Label>
                        <Label as='a' tag color="red">
                            Trending
                        </Label>
                        <Label as='a' tag color="green">
                            Hot selling
                        </Label>
                        <Header>{this.props.book.title}</Header>
                        <p> <b>ISBN:</b>18009322525</p>
                        <p> <b>Written By:</b>{this.props.book.author}</p>
                        <p> <b>Genre:</b>{this.props.book.category}</p>
                        <p> <b>Price:</b>{this.props.book.price}</p>
                        <p> <b>Description:</b>{this.props.book.description}</p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button primary>
                        Add Cart <Icon name='right chevron' />
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

const source = Books;

class SearchUpgrade extends React.Component {

    state = {
        searchedBooks:[],
        results:[],
    };

    componentDidMount() {
        this.setState({ results: source });
    }

    componentWillMount() {
        this.resetComponent()
    }

    resetComponent = () => this.setState({ isLoading: false, results: source, value: '' });

    handleResultSelect = (e, { result }) => this.setState({ value: result.title });

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value });

        setTimeout(() => {
            if (this.state.value.length < 1) return this.resetComponent();

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i');

            //**************use search*****************
            let isMatch;
            if(this.props.searchBy==='title')isMatch= result => re.test(result.title);
            else if(this.props.searchBy==='author')isMatch= result => re.test(result.author);
            else isMatch= result => re.test(result.title);
            //*****************************************
            this.setState({
                isLoading: false,
                results: _.filter(source, isMatch),
            })
        }, 500)
    };

    render() {

        let resultas = this.state.results;
        if (this.state.results!==undefined) {
            if (this.props.order === 1) {
                resultas = this.state.results.sort((a, b) => (
                    a.title > b.title ? 1 : -1

                ));
            } else if (this.props.order === 2) {
                resultas = this.state.results.sort((a, b) => (
                    b.sales > a.sales ? 1 : -1
                ));
            } else if (this.props.order === 3) {
                resultas = this.state.results.sort((a, b) => (
                    a.price.slice(1) > b.price.slice(1) ? 1 : -1
                ));
            }

            let resultasBeforeGenre=resultas;

            if (this.props.genreBy === 'SciFi') {
                resultas = resultas.filter( function( book ) {
                    return book.category === 'SciFi';
                })
            } else if (this.props.genreBy === 'Biography') {
                resultas = resultas.filter( function( book ) {
                    return book.category === 'Biography';
                })
            } else if (this.props.genreBy === 'SchoolBook') {
                resultas = resultas.filter( function( book ) {
                    return book.category === 'SchoolBook';
                })
            } else if (this.props.genreBy === 'Fiction') {
                resultas = resultas.filter( function( book ) {
                    return book.category === 'Fiction';
                })
            } else if (this.props.genreBy === 'History') {
                resultas = resultas.filter( function( book ) {
                    return book.category === 'History';
                })
            } else {
                resultas = resultasBeforeGenre;
            }
        }

        const { isLoading, value, results } = this.state;

        return (
            <div>
                <br />
                <Search
                    loading={isLoading}
                    onResultSelect={this.handleResultSelect}
                    onSearchChange={this.handleSearchChange}
                    value={value}
                    results={results}
                    placeholder='Search books...'
                    {...this.props}
                />
                <br />
            <tbody>
            {
                resultas.map((book, idx) => (
                    <tr>
                    <div className="ui divided items">
                        <div className="item">
                            <div className="image">
                                {/* <img src={book.book_image} alt={book.title} /> */}
                                <Image size="large" src={hatsArr[Math.floor(Math.random() * hatsArr.length)]} alt={book.title} />
                                <br />
                            </div>
                            <div className="content">
                                <Label as='a' tag>
                                    New
                                </Label>
                                <Label as='a' tag color="red">
                                    Trending
                                </Label>
                                <Label as='a' tag color="green">
                                    Hot selling
                                </Label>
                                <br />
                                <br />
                                <a className="header">{book.title}</a>
                                <div className="meta">
                                    <b>Written By: </b>{book.author}
                                </div>
                                <div>
                                    <b>Genre: </b>{book.category}
                                </div>
                                <div className="price">
                                    <b>Price: {book.price}</b>
                                </div>
                                <span>
                                <div className="extra">
                                    <Button primary key={idx} onClick={() => this.props.onBookClick(book)}>Add Cart</Button>
                                    <div className="ui label">{book.sales} sales</div>
                                    <BookDetail book={book}/>
                                </div>
                                </span>
                            </div>
                        </div>
                    </div>
                </tr>
            ))
            }
    </tbody>
</div>
        )
    }
}



export default SearchUpgrade;