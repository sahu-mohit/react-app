import './App.css';
import TextForm from './component/TextForm';
import Navbar from './component/Navbar';

function App() {
  return (
    <>
    <Navbar title="TextUtils" about="about TextUtils"/>
    <div className='container my-3'>
      <TextForm heading = "Enter the text here"/>
    </div>
    
    </>
  );
}

export default App;
