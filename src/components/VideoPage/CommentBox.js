import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import CommentBody from "./CommentBody";

const CommentBox = () => {
	return (
		<>
			<div className="box  single-video-comment-tabs">
				<Tabs defaultActiveKey="vidoe">
					<Tab eventKey="vidoe" title="Tag-01">
						<CommentBody />
					</Tab>
					<Tab eventKey="disqus" title="Tag-02">
						<CommentBody />
					</Tab>
					<Tab eventKey="fb" title="Tag-03">
						<CommentBody />
					</Tab>
				</Tabs>
			</div>
		</>
	);
};

function Soon() {
	return <p>Coming Soon...</p>;
}

export default CommentBox;
