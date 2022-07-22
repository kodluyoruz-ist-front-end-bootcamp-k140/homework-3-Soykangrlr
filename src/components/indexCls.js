import React, { Component } from "react";
import Post from "./posts/postCls";
import Todos from "./todos/todosCls";

class IndexCls extends Component {
    constructor(props){
      super(props)
    }
  state = {
    loading: false,
    data: [],
    url: "https://jsonplaceholder.typicode.com/posts",
    activeUrl: "post",
  };
  componentDidMount() {
    this.loadData(this.state.url);
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.url!==this.state.url){
        this.loadData(this.state.url);
    }
  }
  loadData = (url) => {
    this.setState({ loading: true });
    fetch(url)
      .then((x) => x.json())
      .then((response) => {
        this.setState({ loading: false, data: response });
      })
      .catch((e) => {
        console.log(e);
        this.setState({ loading: false });
      });
  };

  render() {
    return (
      <div>
        <div className="btn-group tabs" role="group">
          <button
            className={
              this.state.activeUrl === "post"
                ? "btn btn-outline-success active"
                : "btn btn-outline-success"
            }
            onClick={() => {
              this.setState({
                url: "https://jsonplaceholder.typicode.com/posts",
                activeUrl: "post",
              });
            }}
          >
            Post
          </button>
          <button
            className={
              this.state.activeUrl === "todos"
                ? "btn btn-outline-success active"
                : "btn btn-outline-success"
            }
            onClick={() => {
              this.setState({
                url: "https://jsonplaceholder.typicode.com/todos",
                activeUrl: "todos",
              });
            }}
          >
            Todos
          </button>
        </div>

        <div className="container">
          {this.state.activeUrl == "post" ? (
            <Post color={this.props.color} data={this.state.data} loading={this.state.loading} />
          ) : (
            <Todos color={this.props.color} data={this.state.data} loading={this.state.loading} />
          )}
        </div>
      </div>
    );
  }
}

export default IndexCls;
