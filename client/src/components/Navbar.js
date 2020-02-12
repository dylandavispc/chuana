import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from 'axios'

class Navbarlite extends Component {
  constructor() {
    super()
    this.logout = this.logout.bind(this)
  }

  logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/user/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          username: null
        })
      }
    }).catch(error => {
        console.log('Logout error')
    })
  }

  render() {
    const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);

    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    );

    // const userLink = (
    //   <ul className="navbar-nav">
    //     <li className="nav-item">
    //       <Link to="/profile" className="nav-link">
    //         User
    //       </Link>
    //     </li>
    //     <li className="nav-item">
    //       <a href="" onClick={this.logOut.bind(this)} className="nav-link">
    //         Logout
    //       </a>
    //     </li>
    //   </ul>
    // );

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >{loggedIn ? (
          <section className="navbar-section">
              <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
              <span className="text-secondary">logout</span></Link>

          </section>
      ) : (
              <section className="navbar-section">
                  <Link to="/" className="btn btn-link text-secondary">
                      <span className="text-secondary">home</span>
                      </Link>
                  <Link to="/login" className="btn btn-link text-secondary">
                  <span className="text-secondary">login</span>
</Link>
                  <Link to="/signup" className="btn btn-link">
                  <span className="text-secondary">sign up</span>
</Link>
              </section>
          )}
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbarlite);
