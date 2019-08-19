import React from "react";

const columns = [
  {
    key: "exercise",
    name: "EXERCISE NAME",
    width: 160
  },
  {
    key: "reps",
    name: "REP(s)"
  },
  {
    key: "weight",
    name: "WEIGHT"
  },
  {
    key: "actualReps",
    name: "ACTUAL REP(s)",
    editable: true
  },
  {
    key: "actualWeight",
    name: "ACTUAL WEIGHT",
    editable: true
  }
];

const rows = [
  {
    exercise: "Bench Press",
    reps: "10",
    weight: "100lbs",
    actualReps: "",
    actualWeight: ""
  },
  {
    exercise: "",
    reps: "10",
    weight: "100lbs",
    actualReps: "",
    actualWeight: ""
  },
  {
    exercise: "",
    reps: "8",
    weight: "100lbs",
    actualReps: "",
    actualWeight: ""
  },
  {
    exercise: "Bent-over Row",
    reps: "10",
    weight: "100lbs",
    actualReps: "",
    actualWeight: ""
  },
  {
    exercise: "",
    reps: "10",
    weight: "100lbs",
    actualReps: "",
    actualWeight: ""
  },
  {
    exercise: "",
    reps: "8",
    weight: "100lbs",
    actualReps: "",
    actualWeight: ""
  }
];

let ReactDataGrid = null;
class DataGrid extends React.Component {
  state = { rows, dataGridReady: false };

  componentDidMount() {
    ReactDataGrid = require("react-data-grid");
    this.setState({
      dataGridReady: true
    });
  }

  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.setState(state => {
      const rows = state.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      return { rows };
    });
  };
  render() {
    return (
      <React.Fragment>
        {this.state.dataGridReady && (
          <ReactDataGrid
            columns={columns}
            rowGetter={i => this.state.rows[i]}
            rowsCount={rows.length}
            onGridRowsUpdated={this.onGridRowsUpdated}
            enableCellSelect={true}
          />
        )}
      </React.Fragment>
    );
  }
}
export default DataGrid;
