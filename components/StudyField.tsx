'use server';
import React from 'react';
import Image from 'next/image';
import { darkBlob, darkCircut } from '@/public';

type StudyFieldProps = {
	id: string;
	name: string;
	laboratory: { title: string; link: string }[];
	lectures: { title: string; link: string }[];
	circutClassName: string;
	blobClassName: string;
};

const StudyField = ({
	id,
	name,
	laboratory,
	lectures,
	circutClassName,
	blobClassName,
}: StudyFieldProps) => {
	return (
		<div
			id={id}
			className="flex w-full h-screen bg-darkBg overflow-hidden pt-20 pl-24 relative flex-col"
		>
			<Image src={darkCircut} alt="dark-circut" className={circutClassName} />
			<div className="relative w-full">
				<div className="w-32 h-12 bg-darkBlue" />
				<h1 className="absolute top-0 left-12 font-piazzolla text-white font-bold text-5xl">
					{name}
				</h1>
				<div className="mt-10 relative">
					<div className="triangle" />
					<h1 className="text-white font-piazzolla text-2xl font-semibold absolute top-8 left-7">
						Laboratoria
					</h1>
					<div className="mt-8 gap-8 flex flex-col pl-10">
						{laboratory.map((lab, index) => (
							<div key={index} className="flex flex-row items-center gap-5">
								<div className="w-3 h-3 rotate-45 bg-darkBlue" />
								<a
									href={lab.link}
									target="_blank"
									className="font-piazzolla text-white text-xl font-light"
								>
									{lab.title}
								</a>
							</div>
						))}
					</div>
				</div>
				<div className="mt-10 relative">
					<div className="triangle" />
					<h1 className="text-white font-piazzolla text-2xl font-semibold absolute top-8 left-7">
						Wykłady
					</h1>
					<div className="mt-8 gap-8 flex flex-col pl-10">
						{lectures.map((lecture, index) => (
							<div key={index} className="flex flex-row items-center gap-5">
								<div className="w-3 h-3 rotate-45 bg-darkBlue" />
								<a
									href={lecture.link}
									target="_blank"
									className="font-piazzolla text-white text-xl font-light"
								>
									{lecture.title}
								</a>
							</div>
						))}
					</div>
				</div>
			</div>

			<Image src={darkBlob} alt="blob" className={blobClassName} />
		</div>
	);
};

export default StudyField;
