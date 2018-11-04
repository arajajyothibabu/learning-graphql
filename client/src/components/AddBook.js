import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { Button, Form, Select } from 'semantic-ui-react';
import {addBookMutation, getAuthorsQuery, getBooksQuery} from "../queries";


class AddBook extends Component {

    state = {
        name: '',
        genre: '',
        authorId: ''
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { addBookMutation } = this.props;
        addBookMutation({
            variables: this.state,
            refetchQueries: [
                {query: getBooksQuery}
            ]
        });
    };

    render(){
        const { getAuthorsQuery: { loading = false, authors = [] } } = this.props;
        const { name, genre, authorId } = this.state;
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Field required width={6}>
                        <label>Book Name</label>
                        <input placeholder='Game Of Thrones' onChange={e => this.setState({name: e.target.value})} />
                    </Form.Field>
                    <Form.Field required width={4}>
                        <label>Genre</label>
                        <input placeholder='Fantasy' onChange={e => this.setState({genre: e.target.value})} />
                    </Form.Field>
                    <Form.Field
                        width={6}
                        loading={loading}
                        required
                        onChange={(e, {value}) => this.setState({authorId: value})}
                        control={Select} label='Author'
                        options={authors.map(o => ({text: o.name, value: o.id}))}
                        placeholder='Jyothi Babu Araja'
                    />
                </Form.Group>
                <Button
                    disabled={name.length === 0 || genre.length === 0 || authorId.length === 0}
                    type='submit' color="blue">Add Book</Button>
            </Form>
        )
    }

}

export default compose(
    graphql(addBookMutation, {name: 'addBookMutation'}),
    graphql(getAuthorsQuery, {name: 'getAuthorsQuery'}) //FIXME: think it's another call try to use from parent
)(AddBook);