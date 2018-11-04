import React, {Component, Fragment} from 'react';
import { graphql } from 'react-apollo';
import {Button, Header, Image, List, Placeholder} from 'semantic-ui-react';
import {getAuthorsQuery} from "../queries";


class AuthorList extends Component {

    render(){
        const { data: { loading = false, authors = [] } = {} } = this.props;
        return(
            <Fragment>
                <Header as='h3'>Authors</Header>
                <List divided verticalAlign='middle'>
                    {loading &&
                    <Placeholder>
                        <Placeholder.Header image>
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder.Header>
                    </Placeholder>
                    }
                    {authors.map(({id, name, age, books}) =>
                        <List.Item key={id}>
                            <Image avatar src='/images/avatar/small/rachel.png' />
                            <List.Content>
                                <List.Header as='a'>{name}</List.Header>
                                <List.Description>
                                    {age}
                                </List.Description>
                            </List.Content>
                        </List.Item>
                    )}
                </List>
            </Fragment>
        )
    }

}

export default graphql(getAuthorsQuery)(AuthorList);