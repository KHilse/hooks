import React, { useState, useEffect } from "react";
import Post from "./post";
import Form from "./form";

const Blog = props => {

	// Define the posts state var
	const [posts, setPosts] = useState([]);
	const [lastInput, setLastInput] = useState("");

	// Initial AJAX request
 	useEffect(() => {
 		console.log("Blog - fetching data with useEffect");
 		fetchData();
 	}, [lastInput])
 
 	// Runs after every render
 	useEffect(() => {
 		console.log("Updating title post count", posts.length, "items");
 		document.title = `${posts.length} posts`;
 	})

 	function fetchData() {

 		const url = "https://jsonplaceholder.typicode.com/posts";
 		console.log("URL:", url + `/${lastInput}`);
 		fetch (url + `/${lastInput}`)
 		.then(res => res.json())
 		.then(json => {
 			if (Array.isArray(json)) {
 				setPosts(json);
 			} else {
 				setPosts([json]);
 			}
 		})
 	}

 	function handleDelete(idx) {
 		console.log("Deleting post", idx);
 		let postsCopy = [...posts];
 		postsCopy.splice(idx, 1);
 		setPosts(postsCopy);
 	}

 	let postElements = posts.map((post, idx) => {
 		return (
 			<Post
 				key={idx}
 				title={post.title}
 				body={post.body}
 				handleDelete={handleDelete}
 				idx={idx}
 			/>
 		)
 	})

	return (
		<div>
		    <Form setLastInput={setLastInput} />
			{postElements}
		</div>
	)
}

export default Blog;