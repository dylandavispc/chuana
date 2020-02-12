import React, { Component } from "react";
import API from "../../../utils/API";

class Home extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = () => {
    API.getProducts()
      .then(res => this.setState({ products: res.data }))
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        {this.state.products.length ? (
          <ul>
            {this.state.products.map(product => {
              return <li>{product.name}</li>;
            })}
          </ul>
        ) : (
          <h3>No results to display</h3>
        )}
      </div>
    );
  }
}

export default Home;
