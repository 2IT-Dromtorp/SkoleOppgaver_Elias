import logo from './logo.svg';
import './App.css';
import MyButton from './myButton';
import Profile from './ImageEx';
import ShoppingList from './list';
import DigitalClock from './DigitalClock';
import OppNed from './oppNedPil';


// function App() {

//   let isLoggedIn;
//   let content;
//   isLoggedIn = true;

//   if (isLoggedIn) {
//     content = <MyButton />;
//   } else {
//     content = <Profile />;
//   }

//   return (
    
//     <div className="App">
//       <header className="App-header">
        
//         <h1> React Intro </h1>
//         {content}

//         <ShoppingList />
//       </header>
//     </div>
//   );
// }


function App() {
  return(
    <OppNed />
  )
}

export default App;
