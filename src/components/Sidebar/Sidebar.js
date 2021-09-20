import { Link } from "react-router-dom";
import "./Sidebar.css";

import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";

import ChannelSidebarList from "./ChannelSidebarList";
import NavItem from "./NavItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faUsers,
	faUserAlt,
	faVideo,
	faCloudUploadAlt,
	faFolder,
	faHistory,
	faListAlt,
	faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ props }) => {
	const sidebarClass = props.showMenu
		? "sidebar navbar-nav toggled"
		: "sidebar navbar-nav";

	return (
		<>
			<ul className={sidebarClass}>
				<NavItem href="/" faIcon={faHome} label="Home" active />
				<NavItem href="/channels" faIcon={faUsers} label="Channels" />

				<NavItem
					href="/single-channel"
					faIcon={faUserAlt}
					label="Single Channel"
				/>
				<NavItem
					href="/video-page"
					faIcon={faVideo}
					label="Video Page"
				/>
				<NavItem
					href="/upload-video"
					faIcon={faCloudUploadAlt}
					label="Upload Video"
				/>

			

				<NavItem
					href="/history"
					faIcon={faFolder}
					label="History Page"
				/>

				<NavDropdown
					title={
						<>
							<FontAwesomeIcon icon={faListAlt} fixedWidth />{" "}
							<span>Categories</span>
						</>
					}
				>
					<Link to="/categories" className="dropdown-item">
						Movie
					</Link>

					<Link to="/categories" className="dropdown-item">
						Music
					</Link>

					<Link to="/categories" className="dropdown-item">
						Television
					</Link>
				</NavDropdown>

				<NavItem
					href="/Shop"
					faIcon={faShoppingBag}
					label="Shop"
				/>
				<ChannelSidebarList />
			</ul>
		</>
	);
};

export default Sidebar;
