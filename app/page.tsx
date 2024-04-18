import { Hero, StudyField, Photography, Footer } from '@/components';
import { eitLab, eitLectures, ntwkLab, ntwkLectures } from '@/static';
export default function Home() {
	return (
		<main className="w-full h-full overflow-hidden">
			<Hero />
			<StudyField
				id="ntwk"
				name="Nowoczesne Technologie w Kryminalistyce"
				laboratory={ntwkLab}
				lectures={ntwkLectures}
				circutClassName="absolute -left-32 -top-10 w-1/4"
				blobClassName="absolute -right-32 bottom-20 w-1/4"
			/>
			<StudyField
				id="eit"
				name="Elektronika i Telekomunikacja"
				laboratory={eitLab}
				lectures={eitLectures}
				circutClassName="absolute right-0 -top-20 w-1/4"
				blobClassName="absolute right-1/3 -bottom-40 w-1/4"
			/>
			<Photography />
			<Footer />
		</main>
	);
}
