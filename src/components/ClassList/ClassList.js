import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class ClassList extends Component {
  constructor() {
    super();

    this.state = {
      students: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://localhost:3005/students?class=${this.props.match.params.class}`
      )
      .then(results => this.setState({ students: results.data }))
      .catch(() => console.log("error"));
  }

  render() {
    const stu = this.state.students.map((item, i) => {
      return (
        <Link to={`/student/${item.id}`}>
          {" "}
          <h3 key={i}>
            {" "}
            {item.first_name} {item.last_name}{" "}
          </h3>{" "}
        </Link>
      );
    });

    return (
      <div className="box">
        <h1> {this.props.match.params.class} </h1>
        <h2>ClassList:</h2>
        {stu}
        <h1>Hello</h1>
      </div>
    );
  }
}
