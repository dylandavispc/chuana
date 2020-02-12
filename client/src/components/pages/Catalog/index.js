import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Redirect } from "react-router-dom";
import axios from "axios";
import API from "../../../utils/API.js";
import "./style.css";
import {
  MDBInput,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
  MDBSideNavItem,
  MDBSideNavCat,
  MDBSideNavNav,
  MDBSideNav,
  MDBContainer
} from "mdbreact";
import MetisMenu from "react-metismenu";
import Footer from "../../Footer";
import { CatalogCards, CatalogList } from "../../CatalogCards";
const content = [
  {
    icon: "icon-class-name",
    label: "Account Page",
    to: "/catalog"
  },
  {
    icon: "icon-class-name",
    label: "Bongs",
    content: [
      {
        icon: "icon-class-name",
        label: "Carburetor Bongs",
        to: "/catalog/bongs"
      },
      {
        icon: "icon-class-name",
        label: "Multi-Chamber Bong",
        to: "/catalog/bongs"
      },
      {
        icon: "icon-class-name",
        label: "Percolator Bong",
        to: "/catalog/bongs"
      },
      {
        icon: "icon-class-name",
        label: "Gravity bongs",
        to: "/catalog/bongs"
      },
      {
        icon: "icon-class-name",
        label: "Novelty Bongs",
        to: "/catalog/bongs"
      },
      {
        icon: "icon-class-name",
        label: "Cleaning",
        to: "/catalog/bongs"
      }
    ]
  },
  {
    icon: "icon-class-name",
    label: "Dab Rigs",
    content: [
      {
        icon: "icon-class-name",
        label: "Rigs",
        to: "/catalog/kits"
      },
      {
        icon: "icon-class-name",
        label: "Novelty Rigs",
        to: "/catalog/kits"
      },
      {
        icon: "icon-class-name",
        label: "Nails",
        to: "/catalog/kits"
      },
      {
        icon: "icon-class-name",
        label: "E-nails & E-rigs",
        to: "/catalog/kits"
      },
      {
        icon: "icon-class-name",
        label: "Dabbers",
        to: "/catalog/kits"
      },
      {
        icon: "icon-class-name",
        label: "Dabbing Adapters",
        to: "/catalog/kits"
      },
      {
        icon: "icon-class-name",
        label: "Torches",
        to: "/catalog/kits"
      },
      {
        icon: "icon-class-name",
        label: "Extractors",
        to: "/catalog/kits"
      },
      {
        icon: "icon-class-name",
        label: "Cleaning",
        to: "/catalog/kits"
      }
    ]
  },
  {
    icon: "icon-class-name",
    label: "Vaporizors",
    content: [
      {
        icon: "icon-class-name",
        label: "Dry Herb Vaporizers",
        to: "/catalog/stickers"
      },
      {
        icon: "icon-class-name",
        label: "Wax & Oil Vapes",
        to: "/catalog/stickers"
      },
      {
        icon: "icon-class-name",
        label: "Vape Batteries",
        to: "/catalog/stickers"
      },
      {
        icon: "icon-class-name",
        label: "Atomizers & Cartridges",
        to: "/catalog/stickers"
      },
      {
        icon: "icon-class-name",
        label: "Infusers & Extractors",
        to: "/catalog/stickers"
      },
      {
        icon: "icon-class-name",
        label: "Vape Accessories",
        to: "/catalog/stickers"
      }
    ]
  },
  {
    icon: "icon-class-name",
    label: "Pipes",
    content: [
      {
        icon: "icon-class-name",
        label: "Bowls",
        to: "/catalog/pipes"
      },
      {
        icon: "icon-class-name",
        label: "Bubblers",
        to: "/catalog/pipes"
      },
      {
        icon: "icon-class-name",
        label: "Chillums & Dugouts",
        to: "/catalog/pipes"
      },
      {
        icon: "icon-class-name",
        label: "Glass Blunts",
        to: "/catalog/pipes"
      },
      {
        icon: "icon-class-name",
        label: "Novelty Pipes",
        to: "/catalog/pipes"
      },
      {
        icon: "icon-class-name",
        label: "Pipe Accessories",
        to: "/catalog/pipes"
      }
    ]
  },
  {
    icon: "icon-class-name",
    label: "Rolling Supplies",
    content: [
      {
        icon: "icon-class-name",
        label: "Rolling Papers",
        to: "/catalog/pipes"
      },
      {
        icon: "icon-class-name",
        label: "Blunt Wraps",
        to: "/catalog/pipes"
      },
      {
        icon: "icon-class-name",
        label: "Rolling Trays",
        to: "/catalog/pipes"
      },
      {
        icon: "icon-class-name",
        label: "Rolling Machines",
        to: "/catalog/pipes"
      }
    ]
  },
  {
    icon: "icon-class-name",
    label: "Accessories",
    content: [
      {
        icon: "icon-class-name",
        label: "Grinders",
        to: "/catalog/pipes"
      },
      {
        icon: "icon-class-name",
        label: "Lighters & Hempwick",
        to: "/catalog/pipes"
      },
      {
        icon: "icon-class-name",
        label: "Candles & Odor Eliminators",
        to: "/catalog/pipes"
      },
      {
        icon: "icon-class-name",
        label: "Scales",
        to: "/catalog/pipes"
      },
      {
        icon: "icon-class-name",
        label: "Smell Proof Storage",
        to: "/catalog/pipes"
      },
      {
        icon: "icon-class-name",
        label: "Ashtrays",
        to: "/catalog/pipes"
      },
      {
        icon: "icon-class-name",
        label: "Travel Bags & Cases",
        to: "/catalog/pipes"
      }
    ]
  }
];

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email,
      toggleStateA: false,
      breakWidth: 1300,
      windowWidth: 0,
      redirectTo: null,
      catalog: "bongs",
      products: [],
      filteredProducts: []
    };

    this.logout = this.logout.bind(this);
    this.filter = this.filter.bind(this);
  }
  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
    this.loadProducts();
    console.log(this.props.userID);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
  filter = () => {
    console.log(this.props.catagory);

    console.log("filtering...");
    // console.log(products)y
    var type = [this.props.catagory];
    var records = this.state.products;
    var typeObj = {};
    type.forEach(function(element) {
      typeObj[element] = true;
    });
    var filteredArray = [];
    records.forEach(function(element) {
      if (typeObj[element.type]) filteredArray.push(element);
    });
    // console.log(filteredArray)
    this.setState({ filteredProducts: filteredArray });
    console.log(this.state.filteredProducts);
    console.log("filter complete!");
  };
  loadProducts = () => {
    API.getProducts()
      .then(res => this.setState({ products: res.data }))
      // .then(res => console.log(res.data))
      .then(
        setTimeout(() => {
          console.log(this.state.products);

          this.filter();
        }, 1000)
      )
      .then(console.log(this.state))
      .catch(err => console.log(err));
  };
  logout(event) {
    this.setState({
      redirectTo: "/login"
    });
    // console.log('logging out')
    // axios.post('/user/logout').then(response => {
    //   console.log(response.data)
    //   console.log("logging out")
    //   if (response.status === 200) {
    //     this.props.updateUser({
    //       loggedIn: false,
    //       email: null
    //     })
    //   }
    // }).catch(error => {
    //     console.log('Logout error')
    // })
  }

  handleResize = () =>
    this.setState({
      windowWidth: window.innerWidth
    });
  handleToggleClickA = () => {
    this.setState({
      toggleStateA: !this.state.toggleStateA
    });
  };
  render() {
    const navStyle = {
      paddingLeft:
        this.state.windowWidth > this.state.breakWidth ? "210px" : "16px"
    };
    const mainStyle = {
      margin: "0 6%",
      paddingTop: "5.5rem",
      paddingLeft:
        this.state.windowWidth > this.state.breakWidth ? "240px" : "0"
    };
    const specialCaseNavbarStyles = {
      WebkitBoxOrient: "horizontal",
      flexDirection: "row"
    };
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <Router>
          <div className="fixed-sn light-blue-skin">
            <img
              className="mockLogo"
              src="https://www.stickpng.com/assets/images/58499e38b89d73775876620e.png"
            />
            <MetisMenu
              className="metismenu1"
              content={content}
              activeLinkFromLocation
            />
            <MDBNavbar
              id="navCat"
              style={navStyle}
              color="light-green darken-2"
              double
              expand="md"
              fixed="top"
              dark
              scrolling
            >
              <MDBNavbarNav left>
                <MDBNavItem>
                  <div
                    onClick={this.handleToggleClickA}
                    key="sideNavToggleA"
                    style={{
                      lineHeight: "32px",
                      marginRight: "1em",
                      verticalAlign: "middle"
                    }}
                  >
                    <MDBIcon icon="bars" color="white" size="2x" />
                  </div>
                </MDBNavItem>
                <MDBNavItem
                  className="d-none d-md-inline white-text"
                  style={{ paddingTop: 5 }}
                >
                  Chuana Catalog
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right style={specialCaseNavbarStyles}>
                <MDBNavItem active>
                  <MDBNavLink to="#!">
                    <MDBIcon icon="envelope" className="d-inline-inline" />{" "}
                    <div className="d-none d-md-inline">Contact</div>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">
                    <MDBIcon
                      fas
                      icon="shopping-cart"
                      className="d-inline-inline"
                    />{" "}
                    <div className="d-none d-md-inline">Cart</div>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <div className="d-none d-md-inline">Account</div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu right>
                      <MDBDropdownItem onClick={this.filter}>
                        Account Page
                      </MDBDropdownItem>
                      <MDBDropdownItem href="#!">
                        Account Settings
                      </MDBDropdownItem>
                      <MDBDropdownItem onClick={this.logout}>
                        Logout
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBNavbar>
            <main style={mainStyle}>
              <MDBContainer fluid style={{ height: 2000 }} className="mt-5">
                <h2>Products:</h2>
                <div></div>
                <br />
                {!this.state.filteredProducts.length ? (
                  <h1 className="text-center">No Products to Display</h1>
                ) : (
                  <CatalogList>
                    {this.state.filteredProducts.map(product => {
                      return (
                        <CatalogCards
                          key={product.name}
                          name={product.name}
                          catagory={product.catagory}
                          disc={product.disc}
                          price={product.price}
                          email={this.props.email}
                        />
                        // <li>{product.name}</li>
                      );
                    })}
                  </CatalogList>
                )}
              </MDBContainer>
            </main>
            <div>
              <Footer />
            </div>
          </div>
        </Router>
      );
    }
  }
}

export default Catalog;
