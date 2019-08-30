import React, { Component } from "react";
import { ListGroup, ListGroupItem, Row, Col } from "reactstrap";

class Sortable extends Component {
  componentDidMount() {
    // Sortable
    const sortable = require("html5sortable/dist/html5sortable.amd.js");

    sortable(".sortable", {
      forcePlaceholderSize: true,
      placeholder: '<div class="box-placeholder p-0 m-0"></div>'
    });
  }

  render() {
    const { sets } = this.props;
    
    if (!sets) return <React.Fragment />;
    return (
      <ListGroup className="sortable" >
        {sets.map(set => {
            console.log(set)
          return (
            <ListGroupItem style={{ height: "4rem" }} key={set.id}>
              <Row>
                <Col>
                  <em className="fas fa-bars fa-fw text-muted fa-2x" />
                  <span className="ml-2" style={{fontSize:"1rem"}}>{set.reps} Reps</span>
                </Col>

                <Col className="my-auto" style={{fontSize:"1rem"}}>{set.weight} lbs</Col>
                <Col className="text-right" style={{color:"darkred", fontSize:"1.2rem"}}><em className="fas fa-trash-alt fa-fw " /></Col>
              </Row>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    );
  }
}

export default Sortable;
