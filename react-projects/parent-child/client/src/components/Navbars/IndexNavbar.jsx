import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

class ComponentsNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent"
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.changeColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }
  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: "bg-info"
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent"
      });
    }
  };
  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out"
    });
  };
  onCollapseExited = () => {
    this.setState({
      collapseOut: ""
    });
  };
 
  render() {
    return (
      <Navbar
        className={"fixed-top " + this.state.color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              data-placement="bottom"
              to="/"
              rel="noopener noreferrer"
              title="Yes Bank"
              tag={Link}
            >
              <span>YES• </span>
              Bank
            </NavbarBrand>
            <button
              aria-expanded={this.state.collapseOpen}
              className="navbar-toggler navbar-toggler"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className={"justify-content-end " + this.state.collapseOut}
            navbar
            isOpen={this.state.scollapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    Yes•Bank
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={this.state.collapseOpen}
                    className="navbar-toggler"
                    onClick={this.toggleCollapse}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav navbar>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://twitter.com/YESBANK"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Follow us on Twitter"
                >
                  <i className="fab fa-twitter" />
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://www.facebook.com/YESBANK/"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Like us on Facebook"
                >
                  <i className="fab fa-facebook-square" />
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://www.instagram.com/yes_bank"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Follow us on Instagram"
                >
                  <i className="fab fa-instagram" />
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <Button
                  className="nav-link d-none d-lg-block"
                  color="default"
                  tag={Link} to="/login-page"
                >
                  <i /> Login
                </Button>
              </NavItem>
              <NavItem>
                <Button
                  className="nav-link d-none d-lg-block"
                  color="default"
                  tag={Link} to="/register-page"
                >
                  <i /> SignUp
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default ComponentsNavbar;
