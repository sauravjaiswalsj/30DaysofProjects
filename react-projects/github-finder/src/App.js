//https://mdbootstrap.com/docs/react/forms/search/?

import React, {useState} from 'react';
import "./App.css";
import NavBar from './Components/layout/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserItem from './Components/users/UserItem';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import Search from './Components/layout/Search';
import Users from './Components/users/Users'
import axios from 'axios';

async function getData(){
  const state={
    users:[],
    loading:false
  }
   const res=await axios.get('https://api.github.com/users');
  console.log(res.data);
}
const App = ()=>{
  const [state, setState]=useState('');
  return(
    <>
      <NavBar title='Github Finder' />
      <Search />
      <div className="container">
       
      <Users />
      </div>
    </>
  );
  //const xyz=getData();
};
export default App;
// class App extends Component{ 
//   // state={ 
//   //   users:[],
//   //   loading:false
//   // }
//   // async componentDidMount(){
//   //   this.setState({loading:true});
//   //   const res=await axios.get('https://api.github.com/users');
//   //   this.state({users:res.data,loading:false});
//   // }
//   async componentDidMount(){
//     const res= await axios.get('https://api.github.com/users');
//     console.log(res.data);
//   }
//   render(){
//     return (
//       <>
//         <NavBar title='Github Finder' />
//         <Search />
//         <div className="container">
//          <Users />
//         </div>       
//       </>
//     );
//   }
// }
// export default App;








