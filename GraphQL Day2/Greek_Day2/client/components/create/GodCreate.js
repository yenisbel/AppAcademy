import React, { Component } from "react";
import { Mutation } from "react-apollo";
import Queries from "../../graphql/queries";
import Mutations from "../../graphql/mutations";
const { NEW_GOD } = Mutations;
const { FETCH_GODS } = Queries;

class GodCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "",
        type: "god",
        description: "",
        message: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e, newGod) {
    e.preventDefault();
    let name = this.state.name;

    // our newGod function will accept an object with the key of "variables" pointing to an object with all our passed in variables.
    newGod({
      variables: {
        name: name,
        type: this.state.type,
        description: this.state.description
      }
    })
    // after our mutation has run we want to reset our state and show our user the success message
    .then(data => {
      console.log(data);
      this.setState({
        message: `New god "${name}" created successfully`,
        name: "",
        type: "god",
        description: ""
      });
    })
  }

  update(field){
      return e => this.setState({
          [field]: e.currentTarget.value
      });
  }

  updateCache(cache, { data: { newGod } }) {
    let gods;
    try {
      // we'll try to read from our cache but if the query isn't in there no sweat!
      // We only want to update the data if it's in the cache already - totally fine if the data will
      // be fetched fresh later
      gods = cache.readQuery({ query: FETCH_GODS });
    } catch (err) {
      return;
    }

  // then our writeQuery will only run IF the cache already has data in it
    if (gods) {
      let godArray = gods.gods;

      cache.writeQuery({
        query: FETCH_GODS,
        data: { gods: godArray.concat(newGod) }
      });
    }
  }

  render() {
    return (
      <Mutation
        mutation={NEW_GOD}
        update={(cache, data) => this.updateCache(cache, data)}
      >
        {(newGod, { data }) => (
          <div>
            <form onSubmit={e => this.handleSubmit(e, newGod)}>
              <input
                onChange={this.update("name")}
                value={this.state.name}
                placeholder="Name"
              />
              <select value={this.state.type} onChange={this.update("type")}>
                <option value="god">God</option>
                <option value="goddess">Goddess</option>
              </select>
              <textarea
                value={this.state.description}
                onChange={this.update("description")}
                placeholder="description"
              />
              <button type="submit">Create God</button>
            </form>
            <p>{this.state.message}</p>
          </div>
        )}
      </Mutation>
    );
  }

}
export default GodCreate;