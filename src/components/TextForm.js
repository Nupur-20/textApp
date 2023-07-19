import React,{useState} from 'react'
export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("uppercase is clicked"+text );
        let newText=text.toUpperCase();
        setText(newText)
        //props.showAlert("converted to uppercase","success");
    }
    const handleLoClick=()=>{
      console.log("uppercase is clicked"+text );
      let newText=text.toLowerCase();
      setText(newText)
      //props.showAlert("converted to lowercase","success");
  }
  const handleClearClick=()=>{
    console.log("CLEARED"+text );
    let newText="";
    setText(newText)
}
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
        
    }
const [text, setText] = useState('');
return (
  <>
  <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#22173d'}} id="mybox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handleLoClick}>convert to lowercase</button>
  <button className="btn btn-primary MX3" onClick={handleClearClick}>clear</button>
 </div>
    <div className="container my-3"style={{color: props.mode==='dark'?'white':'#22173d'}}>
    <h3>your text summary </h3>
    <p>{text.split(" ").length} words and {text.length} charecters</p>
    <p>{0.008*text.split(" ").length} minutes read </p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"enter something in the textbox above to preview it"}</p>
    </div>
    </>
  )
}
 

 