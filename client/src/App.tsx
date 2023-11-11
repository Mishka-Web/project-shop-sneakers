import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PurchasesPage from "./pages/PurchasesPage";
import BookmarksPage from "./pages/BookmarksPage";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/purchases" element={<PurchasesPage />} />
				<Route path="/bookmarks" element={<BookmarksPage />} />
			</Routes>
			<SideMenu />
		</>
	);
}

export default App;
