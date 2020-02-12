import axios from "axios";

export default {
  getProducts: function() {
    return axios.get("/api/products");
  },
  getProduct: function(id) {
    return axios.get("/api/products/" + id);
  },
  deleteProduct: function(id) {
    return axios.delete("/api/products/" + id);
  },
  postProduct: function(data) {
    return axios.post("/api/products", data);
  },
  getUsers: function() {
    return axios.get("/api/users");
  },
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  postUser: function(data) {
    return axios.post("/api/users", data);
  },
  loginUser: function(data) {
    return axios.post("/api/users/login", data);
  }
};
