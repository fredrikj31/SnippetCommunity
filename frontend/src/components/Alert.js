import React from "react";

class Alert extends React.Component {
	constructor(props) {
		this.props = props;
	}

	render() {
		return (
			<>
				<div class="position-fixed top-0 end-0 pt-5 pe-3" style="z-index: 11">
					<div class="toast" id="liveToast" role="alert" aria-live="assertive" aria-atomic="true">
						<div class="toast-header">
							<img src="..." class="rounded me-2" alt="..."></img>
								<strong class="me-auto">Bootstrap</strong>
								<small>11 mins ago</small>
								<button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
						</div>
						<div class="toast-body">
							Hello, world! This is a toast message.
						</div>
					</div>
				</div>
			</>
		);
	}
}