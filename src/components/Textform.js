import React,{ useState } from 'react'

export default function Textform(props) {
    const handleUpClick=() =>{
        //console.log("uppercase clicked"+ text);
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleLowClick=() =>{
        //console.log("uppercase clicked"+ text);
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const handleCapClick=() =>{
        //console.log("uppercase clicked"+ text);
        const finalSentence = text.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
           setText(finalSentence);
    }
    const handleonchange= (event)=>{
       // console.log("change reflected");
        setText(event.target.value);
    }
    const [text, setText] = useState("");

  return (
   <>
    <div className='Container'>
   <div className="mb-3">
    <h2>{props.heading}</h2>
  <label htmlFor="mybox" className="form-label"></label>
  <textarea className="form-control" id="mybox" value={text} onChange={handleonchange} rows="8"></textarea>
  <button className="btn btn-primary" onClick={handleUpClick}>Convert in Uppercase</button>
  <button className="btn btn-primary mx-2"  onClick={handleLowClick}>Convert in Lowercase</button>
  <button className="btn btn-primary mx-2"  onClick={handleCapClick}>Convert in Capitalize</button>

 </div>
    </div>
 <div className='Container'>
    <p>{text.split(" ").length} words and {text.length} Characters</p>
    <p>{0.008*text.split(" ").length} Minutes to read</p>
    <h4>Preview</h4>
    <p>{text}</p>
 </div>
    </>
  )
}
