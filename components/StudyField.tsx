import React from 'react';
import Image from 'next/image';
import { darkBlob2, darkCircut } from '@/public';

type StudyFieldProps = {
	id: string;
	name: string;
};

const StudyField = ({ id, name }: StudyFieldProps) => {
	return (
		<div
			id={id}
			className="flex w-full h-screen bg-darkBg overflow-hidden pt-20 pl-24 relative flex-col overflow-hidden"
		>
			<Image
				src={darkCircut}
				alt="dark-circut"
				className="absolute left-0 top-0 w-1/4"
			/>
			<div className="relative w-full">
				<div className="w-32 h-16 bg-darkBlue" />
				<h1 className="absolute top-4 left-12 font-piazzolla text-white font-bold text-5xl">
					{name}
				</h1>
				<div className="mt-10 relative">
					<div className="triangle" />
					<h1 className="text-white font-piazzolla text-2xl font-semibold absolute top-8 left-7">
						Laboratoria
					</h1>
					<div className="mt-8 gap-8 flex flex-col pl-10">
						<div className="flex flex-row items-center gap-5">
							<div className="w-3 h-3 rotate-45 bg-darkBlue" />
							<a
								href="https://home.agh.edu.pl/~godek/Cw1.pdf"
								target="_blank"
								className="font-piazzolla text-white text-xl font-light"
							>
								Laboratorium 1 - Centralki alarmowe
							</a>
						</div>
						<div className="flex flex-row items-center gap-5">
							<div className="w-3 h-3 rotate-45 bg-darkBlue" />
							<a
								href="https://home.agh.edu.pl/~godek/Cw2.pdf"
								target="_blank"
								className="font-piazzolla text-white text-xl font-light"
							>
								Laboratorium 2 - Nadajnik i odbiornik
							</a>
						</div>
						<div className="flex flex-row items-center gap-5">
							<div className="w-3 h-3 rotate-45 bg-darkBlue" />
							<a
								href="https://home.agh.edu.pl/~godek/Cw3.pdf"
								target="_blank"
								className="font-piazzolla text-white text-xl font-light"
							>
								Laboratorium 3 - Centralka z manipulatorem kodowym
							</a>
						</div>
					</div>
				</div>
				<div className="mt-10 relative">
					<div className="triangle" />
					<h1 className="text-white font-piazzolla text-2xl font-semibold absolute top-8 left-7">
						Wykłady
					</h1>
					<div className="mt-8 gap-8 flex flex-col pl-10">
						<div className="flex flex-row items-center gap-5">
							<div className="w-3 h-3 rotate-45 bg-darkBlue" />
							<p className="font-piazzolla text-white text-xl font-light">
								Wykład 1
							</p>
						</div>
					</div>
				</div>
			</div>

			<Image
				src={darkBlob2}
				alt="dark-circut"
				className="absolute right-0 bottom-20 w-1/5"
			/>
		</div>
	);
};

export default StudyField;
