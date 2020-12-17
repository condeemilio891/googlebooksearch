import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import SaveCard from "../components/SaveCard"

class SavePage extends Component {
    state = {
        savedBooks: []
    };

    //when this component mounts, grab all books that were save to the database 
    componentDidMount() {
        API.getBooks()
            .then(res => this.setState({ savedBooks: res.data }))
            .catch(err => console.log(err))
    }

    //function to remove book by id
    handleDeleteButton = id => {
        API.deleteBook(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container fluid className="container">
                <Jumbotron />
                <Container>
                    <SaveCard savedBooks={this.state.savedBooks} handleDeleteButton={this.handleDeleteButton} />
                </Container>
            </Container>
        )
    }
}



export default SavePage