import {
	createRootRoute,
	createRoute,
	createRouter,
} from "@tanstack/react-router";
import { LandingPage, GalleryPage, PricingPage, RoutesPage } from "@/pages";
import Layout from "@/components/layout/layout"; // Adjust the import path as necessary

const rootRoute = createRootRoute({
	component: Layout,
});

const landingRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: LandingPage,
});

const loginRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/gallery",
	component: GalleryPage,
});

const pricingRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/pricing",
	component: PricingPage,
});

const routesRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/routes",
	component: RoutesPage,
});

const routeTree = rootRoute.addChildren([
	loginRoute,
	landingRoute,
	pricingRoute,
	routesRoute,
]);

export const router = createRouter({ routeTree });
