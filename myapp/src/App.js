import './App.css';
import Form from './component/Form';
import Navbar from './component/Navbar';

function App() {
  return (
    <>
    <Navbar title="TextUtils" about="about TextUtils" contact = "Contect Us"/>
    <div className='container my-3'>
      <Form/>
      <button className = 'container my-2' type='submit'>submit</button>
    </div>
    
    </>
  );
}

export default App;
