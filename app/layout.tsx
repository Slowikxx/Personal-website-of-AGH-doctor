import type { Metadata } from 'next';
import { Inter, Petrona, Piazzolla } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const petrona = Petrona({ subsets: ['latin'] });
const piazzolla = Piazzolla({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Juliusz Godek AGH',
	description:
		'dr. inż. Juliusz Godek, AGH University of Science and Technology',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={piazzolla.className}>{children}</body>
		</html>
	);
}
