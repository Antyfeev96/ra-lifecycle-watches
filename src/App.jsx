import './App.scss';
import Form from './Components/Form/Form';
import Watches from './Components/Watches/Watches';

export default function App() {
  return (
    <div className="app">
      <Form />
      <Watches />
    </div>
  );
}