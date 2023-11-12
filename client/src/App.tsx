import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PurchasesPage from "./pages/PurchasesPage";
import BookmarksPage from "./pages/BookmarksPage";

import { AnimatePresence } from "framer-motion";

function App() {
	return (
		<>
			<Header />
			<AnimatePresence>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/purchases" element={<PurchasesPage />} />
					<Route path="/bookmarks" element={<BookmarksPage />} />
				</Routes>
			</AnimatePresence>
			<SideMenu />
		</>
	);
}

export default App;
