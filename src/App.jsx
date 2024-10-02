import  { useState } from 'react';
import './App.css'

function App (){
 const [text, setText] = useState('')

const textNum = (e)=>{
  setText(e.target.value)
  console.log(text.length);
}

  return(
    <>
    <div>
      <textarea name="" id="" onChange={textNum}></textarea>
      <p> Character Counter: {text.length}</p>
    </div>
    </>
  )
}

export default App;























