import { useEffect } from "react";
import { useLocation } from "react-router-dom";
//scrolls to top when navigating
const ScrollToTop = (props) => {
	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return <>{props.children}</>;
};

export default ScrollToTop;
