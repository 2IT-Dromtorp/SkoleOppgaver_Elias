import './App.css';
import TnD from './TimeNDate.js';
import TodoApp from './NewTask.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className='tid'><TnD /></div>
      <TodoApp />
      </header>
    </div>
  );
}

export default App;
