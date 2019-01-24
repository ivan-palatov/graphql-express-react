import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getAuthorsQuery = gql`
  {
    authors {
      id
      name
    }
  }
`;

class AddBook extends Component {
  displayAuthors() {
    const data = this.props.data;
    if (data.loading) {
      return <option disabled>Loading authors...</option>;
    }
    return data.authors.map(author => (
      <option key={author.id} value={author.id}>
        {author.name}
      </option>
    ));
  }

  render() {
    return (
      <form id="add-book">
        <div className="field">
          <label htmlFor="name">Book name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="field">
          <label htmlFor="genre">Genre:</label>
          <input type="text" id="genre" name="genre" />
        </div>
        <div className="field">
          <label htmlFor="author">Author:</label>
          <select name="authorId" id="author">
            <option>Select author</option>
            {this.displayAuthors()}
          </select>
        </div>
        <button>+</button>
      </form>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook);
