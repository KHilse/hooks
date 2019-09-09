import React, { useState } from "react";


const Form = ({ setLastInput }) => {
	const [inputText, setInputText] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		console.log(`${inputText} was submitted`);
		setLastInput(inputText);
	}

	return (
		<div>This is the form, {inputText}
			<form onSubmit={handleSubmit}>
				<input type="text" value={inputText} onChange={e => {setInputText(e.target.value)}} />
				<input type="submit" />
			</form>
		</div>
	)
}

export default Form;