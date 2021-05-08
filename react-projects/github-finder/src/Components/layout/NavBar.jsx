import React from 'react';
import {Navbar} from 'react-bootstrap'
import PropTypes from 'prop-types';
const NavBar =({title})=>{
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#">{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      </Navbar>
    </>
  );
};
NavBar.defaultProps={
  title:'Github Finder'
}
NavBar.propTypes={
  title:PropTypes.string.isRequired
}
export default NavBar;

// ------------------- Class Based--------------------------------------------------
// import React,{Component} from 'react';
// import {Navbar} from 'react-bootstrap';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// // import { fagithub } from "@fortawesome/free-solid-svg-icons";  <FontAwesomeIcon icon={fagithub} />
// export class NavBar extends Component{
//   render(){
//   return (
//   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//     <Navbar.Brand href="#"> {this.props.title}
//     </Navbar.Brand>   
//     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//   </Navbar>
//     );
//   }
// }
// export default NavBar;