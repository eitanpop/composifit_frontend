import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { ListGroup, ListGroupItem, Row, Col } from "reactstrap";

import RefreshContext from "@/contexts/meso-refresh-context"

import { deleteSet } from "@/graphql/meso"

class SortableSets extends Component {

  static contextType = RefreshContext;

  componentDidMount() {
    // Sortable
    const sortable = require("html5sortable/dist/html5sortable.amd.js");

    sortable(".sortable", {
      forcePlaceholderSize: true,
      placeholder: '<div class="box-placeholder p-0 m-0"></div>'
    });
  }

  deleteSet = deleteSetFunc => async () => {
    await deleteSetFunc()
    this.context()
  };

  render() {
    const { sets } = this.props;

    if (!sets) return <React.Fragment />;
    return (
      <ListGroup className="sortable">
        {sets.map(set => {
          return (
            <ListGroupItem style={{ height: "4rem" }} key={set.id}>
              <Row>
                <Col>
                  <em className="fas fa-bars fa-fw text-muted fa-2x" />
                  <span className="ml-2" style={{ fontSize: "1rem" }}>
                    {set.reps} Reps
                  </span>
                </Col>

                <Col className="my-auto" style={{ fontSize: "1rem" }}>
                  {set.weight} lbs
                </Col>
                <Col
                  className="text-right"
                  style={{ color: "darkred", fontSize: "1.2rem" }}
                >
                  <Mutation mutation={deleteSet()} variables={{setId:set.id}}>
                    {deleteSet => {
                      return (
                        <em
                          style={{ cursor: "pointer" }}
                          onClick={this.deleteSet(deleteSet)}
                          className="fas fa-trash-alt fa-fw "
                        />
                      );
                    }}
                  </Mutation>
                </Col>
              </Row>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    );
  }
}

export default SortableSets;
