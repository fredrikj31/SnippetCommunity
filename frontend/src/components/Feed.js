import React from "react";
import Post from "./Post";

function Feed() {
	return(
		
		
	);
}

export default Feed;

class Feed extends React.Component {
	posts = [];
	
	constructor(props) {
		super(props);
	}

	markAsDone = () => {
		console.log("Hello World");
	}

	render() {
		for (const [index, value] of this.props.posts.entries()) {
			this.posts.push(<Post todo={value} id={index}></Post>)
		}

		return (
			<>
				<div class="row mw-100 mt-5 gx-0">
					<div class="col-md-4 col-sm-1"></div>
					<div class="col-md-4 col-sm-10 bg-dark rounded pt-3 pb-5">
						<h2 class="ms-3 text-white">Activity Feed:</h2>
						{this.posts}
					</div>
					<div class="col-md-4 col-sm-1"></div>
				</div>
			</>
		);
	}
}

export default Item;