import React from "react";

const Post = ({title, body, handleDelete, idx}) => {
	return (
		<div>
			<h1>{title}</h1>
			<p>{body}</p>
			<button onClick={() => handleDelete(idx)}>X</button>
		</div>
	)
}


export default Post;