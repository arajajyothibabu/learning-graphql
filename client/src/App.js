import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Dashboard from "./components/Dashboard";

const apolloClient = new ApolloClient({
    uri: "http://localhost:4000/graphql"
});

class App extends Component {
    render() {
        return (
            <ApolloProvider client={apolloClient}>
                <div>
                    <Dashboard />
                </div>
            </ApolloProvider>
        );
    }
}

export default App;
