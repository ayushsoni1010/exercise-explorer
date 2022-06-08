import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const Exercise = props => {
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.exercise._id}>edit</Link> |{" "}
      <a href="#" onClick={() => props.deleteExercise(props.exercise._id)}>Delete</a>
    </td>
  </tr>;
};
export default class ExercisesList extends React.Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = {
      exercises: [],
    };
  }

  deleteExercise(id) {
    axios
      .delete("http://localhost:5000/exercises/" + id)
      .then(response => console.log(response.data));
    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id),
    });
  }

  exerciseList() {
    return this.state.exercises.map(currentExercise => {
      return (
        <Exercise
          exercise={currentExercise}
          deleteExercise={this.deleteExercise}
          key={currentExercise._id}
        />
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Logged Exercises</h1>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Username</th>
                <th>Description</th>
                <th>Duration</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{this.exerciseList()}</tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}
