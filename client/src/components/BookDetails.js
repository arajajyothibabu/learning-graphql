import React, {Component, Fragment} from 'react';
import { graphql } from 'react-apollo';
import {
    Button, Image, List, Header,
    Modal, ModalActions, Divider
} from 'semantic-ui-react';
import {getBookQuery} from "../queries";


class BookDetails extends Component {

    render(){
        console.error(this.props);
        const {
            data: {
                loading = false,
                book: { name, genre, author: { name: authorName, books = []} = {}  } = {}
            } = {},
            handleClose
        } = this.props;
        return(
            <Modal dimmer="blurring" open={true} onClose={handleClose}>
                <Modal.Header>Book Details</Modal.Header>
                <Modal.Content image>
                    <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
                    <Modal.Description>
                        <Header as="h2">{name}</Header>
                        <p>{genre}</p>
                        <Divider/>
                        <Header as="h3">{authorName}</Header>
                        <List divided verticalAlign='middle'>
                        {books.map(({id, name, genre}) =>
                            <List.Item key={id}>
                                <Image avatar src='/images/avatar/small/rachel.png' />
                                <List.Content>
                                    <List.Header as='a'>{name}</List.Header>
                                    <List.Description>
                                        {genre}
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                        )}
                        </List>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='black' onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }

}

export default graphql(getBookQuery, {
    options: props => {
        return {
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDetails);