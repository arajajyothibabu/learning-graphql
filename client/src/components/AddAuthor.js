import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { Button, Form } from 'semantic-ui-react';
import {addAuthorMutation, getAuthorsQuery} from "../queries";


class AddAuthor extends Component {

    state = {
        name: '',
        age: 0
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { addAuthorMutation } = this.props;
        addAuthorMutation({
            variables: this.state,
            refetchQueries: [
                {query: getAuthorsQuery}
            ]
        });
    };

    render(){
        const { data: { loading = false, books = [] } = {} } = this.props;
        const { name, age } = this.state;
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Field required width={12}>
                        <label>Author Name</label>
                        <input placeholder='Jyothi Babu Araja' onChange={e => this.setState({name: e.target.value})} />
                    </Form.Field>
                    <Form.Field required width={4}>
                        <label>Age</label>
                        <input type="number" placeholder='24' onChange={e => this.setState({age: Number(e.target.value)})} />
                    </Form.Field>
                </Form.Group>
                <Button
                    disabled={name.length === 0 || age < 5}
                    type='submit' color="blue">Add Author</Button>
            </Form>
        )
    }

}

export default compose(
    graphql(addAuthorMutation, {name: 'addAuthorMutation'})
)(AddAuthor);