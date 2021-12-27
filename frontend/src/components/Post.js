import React from "react";

class Post extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<div class="container">
					<div class="bg-secondary rounded ms-5 me-5">
						<div class="d-flex ms-4 pt-4 mt-3">
							{/* Profile Picture */}
							<div class="d-inline me-4">
								<img class="rounded-circle ml-3" height="55" width="55"
									src="http://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f"></img>
							</div>
							
							{/* Profile Information */}
							<div class="d-inline">
								<div class="row">@JohnDoe</div>
								<div class="row"> 14:25 - 22/12/2021</div>
							</div>
						</div>
						
						{/* Post Text */}
						<div class="row">
							<div class="col-1"></div>
							<div class="col-10">
								<p class="text-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
									malesuada, est vel rutrum viverra, enim dolor fringilla arcu, in ullamcorper velit risus
									eu diam. Sed consequat vestibulum ex pellentesque lacinia. Sed malesuada porttitor est
									ac blandit.</p>
							</div>
							<div class="col-1"></div>
						</div>
						
						{/* Code Snippet */}
						<div class="row">
							<div class="col-1"></div>
							<div class="col-10">
								<div class="mb-2">
									<span class="text-light align-middle">Language: <b>PHP</b></span>
									<button class="btn btn-secondary float-end"><i class="fas fa-copy text-white"></i></button>
								</div>
								<pre class="rounded w-100 overflow-hidden">
									<code class="language-php">&lt;?php
										class User {
											private function helloWorld() {
												print(& quot;Hello World&quot;);
											}
										}
										?&gt;
									</code>
								</pre>
							</div>
							<div class="col-1"></div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Post;