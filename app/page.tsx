import { Hero, StudyField } from '@/components';
export default function Home() {
	return (
		<main className="w-full h-full overflow-hidden">
			<Hero />
			<StudyField id="ntwk" name="Nowoczesne Technologie w Kryminalistyce" />
		</main>
	);
}
