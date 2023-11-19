import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SideMenu from "./components/SideMenu";
import HomePage from "./pages/HomePage";
import PurchasesPage from "./pages/PurchasesPage";
import BookmarksPage from "./pages/BookmarksPage";
import AuthPage from "./pages/authPage";

function App() {
	return (
		<>
			<Header />
			<AnimatePresence>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/purchases" element={<PurchasesPage />} />
					<Route path="/bookmarks" element={<BookmarksPage />} />
					<Route path="/authorization" element={<AuthPage />} />
				</Routes>
			</AnimatePresence>
			<SideMenu />
		</>
	);
}

export default App;
