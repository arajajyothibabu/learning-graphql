import { gql } from 'apollo-boost';

export const getBooksQuery = gql`
{
    books {
        name
        id
        genre
        author{
            name
            id
        }
    }
}
`;

export const getAuthorsQuery = gql`
{
    authors {
        name
        id
        age
    }
}
`;

export const getAuthorsWithBooksQuery = gql`
{
    authors {
        name
        id
        books {
            name
            genre
            id
        }
    }
}
`;

export const getBookQuery = gql`
    query ($id: ID!){
        book(id: $id){
            name
            genre
            id
            author {
                name
                id
                books {
                    name
                    genre
                    id
                }
            }
        }
    }
`;

export const addAuthorMutation = gql`
    mutation($name: String!, $age: Int!) {
        addAuthor(name: $name, age: $age){
            name
            age
        }
    }
`;

export const addBookMutation = gql`
    mutation($name: String!, $genre: String!, $authorId: ID!){
        addBook(name: $name, genre: $genre, authorId: $authorId){
            name
            genre
            author{
                name
            }
        }
    }
`;
