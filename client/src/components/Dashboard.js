import React, { Component, Fragment } from 'react';
import { graphql, compose } from 'react-apollo';
import { Button, Form, Grid, Header, Icon } from 'semantic-ui-react';
import { addAuthorMutation } from "../queries";
import AddBook from "./AddBook";
import BookList from "./BookList";
import AddAuthor from "./AddAuthor";
import AuthorList from "./AuthorList";


class Dashboard extends Component {

    render(){
        const { data: { loading = false, books = [] } = {} } = this.props;
        return(
            <Fragment>
                <Header as='h2' icon textAlign='center'>
                    <Header.Content>Bibliography</Header.Content>
                </Header>
                <Grid columns={2} divided padded>
                    <Grid.Row>
                        <Grid.Column>
                            <AddBook/>
                        </Grid.Column>
                        <Grid.Column>
                            <AddAuthor/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <BookList/>
                        </Grid.Column>
                        <Grid.Column>
                            <AuthorList/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Fragment>
        )
    }

}

export default compose(
    graphql(addAuthorMutation, {name: 'addAuthorMutation'})
)(Dashboard);