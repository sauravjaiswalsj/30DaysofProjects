// import React,{Component} from 'react';
// import {Card, Button} from 'react-bootstrap';

// class UserItem extends Component{
//   render(){
//     const {login,avatar_url,html_url}=this.props.user;
//     return(
//       <>
//       <div>
//              <Card border="light" bg="dark" text="white" style={{ width: '18rem' }}>
//                 <Card.Img roundedCircle  variant="top" src={avatar_url}/>            
//                  <Card.Body>
//                    <Card.Title>{login}</Card.Title>
//                   <Button variant="primary" href={html_url}>view profile</Button>
//                  </Card.Body>
//            </Card>
//       </div>
//       </>
//     );
//   }
// }
// export default UserItem;




import React,{useState} from 'react';
import {Card, Button,CardImg} from 'react-bootstrap';
import PropTypes from 'prop-types';
const UserItem=({user:{login, avatar_url,html_url}})=> {
    //const {login, avatar_url,html_url}=props.user;
    return (
      <>
        <div>
            <Card border="light" bg="dark" text="white" style={{ width: '18rem' }}>
                <CardImg roundedCircle  variant="top" src={avatar_url}/>            
                <Card.Body>
                  <Card.Title>{login}</Card.Title>
                  <Button variant="primary" href={html_url}>view profile</Button>
                </Card.Body>
          </Card>
      </div>
      </>
  );
};
UserItem.propTypes={
  user:PropTypes.object.isRequired
};

export default UserItem;
