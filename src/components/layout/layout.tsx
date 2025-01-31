import { Outlet } from "@tanstack/react-router";
import Navbar from "./navbar/navbar";

const Layout = () => {
	return (
		<div className="relative">
			<header className="fixed w-full pt-10 px-20">
				<Navbar />
			</header>

			<main>
				<Outlet />
			</main>
			<footer>Footer</footer>
		</div>
	);
};

export default Layout;
