import NavbarButton from "./navbar-button";

const Navbar = () => {
	return (
		<nav className="bg-stone-300 text-gray-900 py-2 px-6 rounded-full shadow-md flex flex-row gap-2">
			<NavbarButton to="/">Home</NavbarButton>
			<NavbarButton to="/gallery">Gallery</NavbarButton>
			<NavbarButton to="/routes">Routes</NavbarButton>
			<NavbarButton to="/pricing">Pricing</NavbarButton>
		</nav>
	);
};

export default Navbar;
