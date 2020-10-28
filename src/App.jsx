import './App.css';
import React, {Component} from 'react';
import Header2 from './components/header2';
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

class App extends Component{
  render(){
    return(
      <div>
        <img width="100" src="" alt=""/>
         <Header />
         <Header2 />
         <BasicTextFields />
         <h1>Main Component</h1>
         <button type="button" className="btn btn-primary">Primary</button>
         <Footer />
      </div>
    )
  }
}

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

export default App;
