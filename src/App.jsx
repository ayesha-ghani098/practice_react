import './App.css';
import React, {Component} from 'react';
import {Header2, Logo} from './components/header2';
import BasicTextFields from './components/textfield';



// class App extends Component{
//   render(){
//      let todos = [{name: "Ayesha"},{name: "Faha"}]
//      let name = "Ayesha";
//     return(
//       <div>
//          <h1>Hello {name}</h1>
//          <ul>
//             <li>{todos[0].name}</li>
//           {todos.map((item,index) => {
//             return <li key={index}>{item.name}</li>
//           })}
//         </ul>  
//       </div>
//     )
//   }
// }

// class App extends Component{
//   render(){
//     return(
//       <div>
//          <Header2 name={this.state.name} page="Application Page"/>
//          <Logo />
//          <BasicTextFields />
//          <h1>Main Component</h1>
//          <button type="button" className="btn btn-primary">Primary</button>
//          <Footer />
        
//       </div>
//     )
//   }
// }

class Header extends Component{
  render(){
    return(
    <div className="header">
    <h1>Header</h1>
      </div>
    )
  }
}

class Footer extends Component{
  render(){
    return(
    <div>
    <h1 style={{backgroundColor: 'red' , fontSize: '100px'}}>Footer</h1>
      </div>
    )
  }
}

//Function Component
// function App(){
//   return (
//     <div>Hello World</div>
//   )
// }

class App extends Component {
  constructor(){
    super();
   this.state={
     name: "Ayesha Ghani",
     email: "ayesha@gmail.com",
     value: ""
   }
   this.set_name = this.set_name.bind(this); 
  }

  set_name(){
this.setState({
  name: this.state.value
})
}
  get_name = () =>{
console.log(this.state.name);
  }

get_props = (props) => {

}

  handlechange = (e) =>{
   this.setState({
     [e.target.name]: e.target.value
   })
  }
  render(){
    return(
      <div>
 <Header2 get_props={this.get_props} name={this.state.name} page="Application Page"/> 
       <h2>{this.state.name}</h2>
    <h2>{this.state.email}</h2>
         {/* <input type="text" onChange={(e)=>console.log(this.setState({value: e.target.value}))} placeholder="enter your name" id="val"/> */}
         <input name="name" onChange={(e)=> this.handlechange(e)} type="text"/>
         <input name="email" onChange={(e)=> this.handlechange(e)} type="text"/>
         <button onClick={this.set_name}>set name</button>
         <button onClick={this.get_name}>get name</button>
       </div>
     )
   }
 }

export default App;
