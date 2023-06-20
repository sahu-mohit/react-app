import React, {useState} from 'react'

// const 


export default function TextForm(props) {

  const [text,setText] = useState('Enter text here');
  const handlUpperCase = ()=>{
    setText(text.toUpperCase());
  }
  const handleonChange = (event)=>{
    setText(event.target.value);
  }
  
  return (
    <>
    <h2>{props.heading}</h2>
    <div className="form-floating">
        <textarea className="form-control" id="floatingTextarea" onChange = {handleonChange} value={text} style={{height: '200px'}}></textarea>
        <button className = 'btn btn-primary my-2' onClick={handlUpperCase} type='submit'>submit</button>
    </div>
    </>
  )
}
