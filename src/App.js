import Todos from './components/Todos';
import './App.css';

function App() {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take Out the Trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }

  return (
    <div className="App">
      <Todos />
    </div>
  );
}

export default App;
