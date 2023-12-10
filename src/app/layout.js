import AuthProvider from "./context/AuthProvider"
import Navigation from "./components/navigationComponent/Navigation"
import './assets/SCSS/styles.scss'

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<AuthProvider>
					<Navigation />
					{children}
				</AuthProvider>
			</body>
		</html>
	)
}