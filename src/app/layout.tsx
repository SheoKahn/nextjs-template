import '@/core/styles/globals.css'

export { metadata, viewport } from '@/core/config/metadata'

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
