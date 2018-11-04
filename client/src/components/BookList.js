import React, { Component, Fragment } from 'react';
import { graphql } from 'react-apollo';
import { Button, Image, List, Placeholder, Header } from 'semantic-ui-react';
import {getBooksQuery} from "../queries";
import BookDetails from "./BookDetails";


class BookList extends Component {

    state = {
        selectedBook: null
    };

    handleSelect = (selectedBook) => {
        this.setState({selectedBook});
    };

    handleClose = () => {
        this.setState({selectedBook: null});
    };

    render(){
        const { data: { loading = false, books = [] } = {} } = this.props;
        const { selectedBook } = this.state;
        return(
            <Fragment>
                <Header as='h3'>Books</Header>
                <List divided verticalAlign='middle'>
                    {loading &&
                    <Placeholder>
                        <Placeholder.Header image>
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder.Header>
                    </Placeholder>
                    }
                    {books.map(({id, name, genre, author: { name: authorName }}) =>
                        <List.Item key={id}>
                            <Image avatar src='/images/avatar/small/rachel.png' />
                            <List.Content>
                                <List.Header as='a' onClick={e => this.handleSelect(id)}>{name}</List.Header>
                                <List.Description>
                                    {genre}
                                </List.Description>
                            </List.Content>
                            <List.Content floated='right'>
                                <List.Header as='p'>{authorName}</List.Header>
                            </List.Content>
                        </List.Item>
                    )}
                </List>
                { selectedBook && <BookDetails bookId={selectedBook} handleClose={this.handleClose}/> }
            </Fragment>
        )
    }

}

export default graphql(getBooksQuery)(BookList);