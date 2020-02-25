import React, { Component } from "react";
import { Query } from "react-apollo";
import { withRouter } from "react-router-dom";
// import FETCH_GOD from "../../graphql/queries";
import NameDetail from "../detail/NameDetail";
import Queries from "../../graphql/queries";
const { FETCH_GOD } = Queries;

const GodDetail = props => {
//   render() {
    return (
      // there we are getting the `id` for our query from React Router
      <Query query={ FETCH_GOD } variables={{ id: props.match.params.id }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;

          return (
            <div className="detail">
                <NameDetail id={data.god.id} name={data.god.name} />
            </div>
          )
        }}
      </Query>
    );
//   };
}

export default GodDetail;