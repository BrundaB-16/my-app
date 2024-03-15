import React,{useState} from 'react'


export default function TextForm(props) {

const handleUpClick = (e) => {
  let newTxt = text.toUpperCase();
  setText(newTxt);
  props.showAlert('Your text is converted to Uppercase','success');
}
const handleLowClick = (e) => {
  let newTxt = text.toLowerCase();
  setText(newTxt);
  props.showAlert('Your text is converted to LowerCase','success');

}
const handleRmvClick = (e) => {
  setText('')
  props.showAlert('Your text is clear now','success');

}
const handleCopyClick = () => {
let newTxt = document.getElementById('myBox');
newTxt.select();
navigator.clipboard.writeText(newTxt.value);
props.showAlert('Your text is copied','success');

}
const handleSpaceRmv = () => {
  let newTxt = text.split(/[ ]+/);
  setText(newTxt.join(' '));
  props.showAlert('Removed extra spaces','success');

}
const handleOnChange = (e) => {
  setText(e.target.value);
}
  const [text , setText] = useState("")
  
  return (
    <>
    <div style={{color:props.mode === 'light'?'black':'white'}}>
      <h3 className={`text-center mb-2 }`}>Enter Text To Analyze-</h3>
        <div className="mb-3">
          <textarea className="form-control" 
          value={text}
           style={{backgroundColor:props.mode === 'light'?'white':'#333' , color:props.mode === 'light'?'black':'white'}} 
          onChange={handleOnChange} id="myBox" rows={8} defaultValue={""} />
        </div>
        <button className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>Convert to UpperCase</button>
        <button className='btn btn-primary mx-2 my-2' onClick={handleLowClick}>Convert to lowerCase</button>
        <button className='btn btn-primary mx-2 my-2' onClick={handleRmvClick}>clear Text</button>
        <button className='btn btn-primary mx-2 my-2' onClick={handleCopyClick}>Copy Text</button>
        <button className='btn btn-primary mx-2 my-2' onClick={handleSpaceRmv}>Remove extra space</button>
    </div>

    <div className='container my-3' style={{color:props.mode === 'light'?'black':'white'}}>
      <h4 className='mb-2'>Your Text Summary</h4>
      <p>This Sentence Contain {text.split(' ').length-1} words and {text.split('').filter(char => char !== ' ').length} letters.</p>
    </div>
    </>
    );
}
