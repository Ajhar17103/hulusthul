import "./VideoCard.css";
import {
	VerifiedTooltip,
	UnverifiedTooltip,
} from "../CustomCheckTooltips/CustomCheckTooltips";
import {Row,Col} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'
import ProductCard from "./ProductCard";
import ProductSlide from "./ProudctSlide";

function VideoCard({
	iconHref = "/video-show",
	imgHref = "/video-show",
	imgSrc,
	imgAlt = "",
	time = "-:-",
	videoTitle = "/video-show",
	videoTitleHref="/video-show",
	views,
	timeAgo,
	videoCategory,
	verified = null,
}) {
	return (
		<>
			<div className="video-card">
				<div className="video-card-image">
					<Link className="play-icon" to={iconHref}>
						<FontAwesomeIcon icon={faPlayCircle} />
					</Link>
					<Link to={imgHref}>
						<img className="img-fluid" src={imgSrc} alt={imgAlt} />
					</Link>
					<div className="time">{time}</div>
				</div>
				<div className="video-card-body">
					<div className="video-title">
						<Link to={videoTitleHref}>{videoTitle}</Link>
					</div>
					<div
						className={
							verified
								? "video-page text-success-custom"
								: "video-page text-danger-custom"
						}
					>
						{videoCategory}{" "}
						{verified ? <VerifiedTooltip /> : <UnverifiedTooltip />}
					</div>
					<div className="video-view">
						{views} views &nbsp;
						<FontAwesomeIcon icon={faCalendarAlt} /> {timeAgo} ago
					</div>
					<hr/>
					<div style={{  margin:'5px 0px'}}>
					<Row>
                       <Col>
					   <ProductSlide/>
					   </Col>
					  </Row>
					</div>
				</div>
			</div>
		</>
	);
}

export default VideoCard;
