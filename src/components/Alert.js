import React from "react";

export default function Alert(props) {

	const makeBig = (word)=>{
		let newText = word.slice(1)
     	word = word[0].toUpperCase()+newText
	 	return word
	}

  return (
  props.alert &&  <div>
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
       <strong>{makeBig(props.alert.type)}</strong>: {props.alert.msg}
       
      </div>
    </div>
  );
}
