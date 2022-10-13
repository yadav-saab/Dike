import React, {useState} from "react";

export default function TextForm(props) {
	let arr = []
	

// 	let wordCount = ()=>{
// 		let array = text.split(' ')
	    
// 		console.log(array.filter((arr)=>{
//             return arr !== ''
// 		}))
		
// }

   const handleUpClick = ()=>{
    let newText = text.toUpperCase()
	setText(newText)
	props.showAlert('Converted to UpperCase', 'success')
   }

	const handleOnChange = (event)=>{
		setText(event.target.value)
		
	}

	const handleDClick = ()=>{
		let newText = text.toLowerCase()
        setText(newText)
		props.showAlert('Converted to LowerCase', 'success')
	}

	const emailEx = ()=>{
	try{	let regex = /\S+[a-z0-9]@[a-z0-9\.]+/img
		let mails = text.match(regex)
		mails.forEach((value)=>{
			arr.push(value)
		})
		let str = arr.toString()
		str = str.replaceAll(',',', ')
		setMail(str)
		props.showAlert('Emails Extracted', 'success')
	}
		catch(e){
			
		}
	}

	const handleCopy = ()=>{
		let clipText = document.getElementById('myBox')
		clipText.select()
		navigator.clipboard.writeText(text);
		props.showAlert('Copied to Clipboard', 'success')
	}

	const del = ()=>{
		setText('')
		props.showAlert('Text Cleared', 'success')
	}  
	
	const handleExtraSpaces = ()=>{
		let newText = text.split(/[ ]+/)
		
		setText(newText.join(' '))

		props.showAlert('Extra Spaces Removed', 'success')

	}
	const [text, setText] = useState('');
	const [mail, setMail] = useState('')
  return (
	<>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
		<h1 >{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
		  value={text}
		  onChange={handleOnChange}
          id="myBox"
          rows="8"
		  style={{backgroundColor:props.mode==='dark'?'grey':'white',
		  		color:props.mode==='dark'?'white':'black'}}
        ></textarea>
      </div>
	  <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
	  <button className="btn btn-primary mx-2 my-1" onClick={handleDClick}>Convert to LowerCase</button>
	  <button className="btn btn-secondary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
	  <button className="btn btn-warning mx-2 my-1" onClick={emailEx}>Extract Emails</button>
	  <button className="btn btn-info mx-2 my-1" onClick={handleCopy}>Copy Text</button>
	  <button className="btn btn-danger mx-2 my-1" onClick={del}>Clear Text</button>
    </div>
	<div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
		<h2>Your Text Summary</h2>
		<p>{text.split(' ').filter((arr)=>{ return arr !== ''}).length} words, {text.replaceAll(' ','').length} characters</p>
		<p>{0.008 * text.split(' ').length} Minutes to read</p>
		<h3>Preview</h3>
		<p>{text.length===0?'Enter text in textarea to preview here':text}</p>
		<h4>Emails</h4>

		<p>{mail}</p>
	</div>
	</>
  );
}
