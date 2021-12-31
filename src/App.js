
import './App.css';
import LoginForm from './pages/loginForm';
import RegisterForm from './pages/register';
import ToDoList from './pages/todlist';

function App() {
  return (
    <div className="App row border border-0 mx-auto  border-dark">
      <LoginForm/>
      <RegisterForm/>
      <ToDoList />
    </div>
  );
}

export default App;
