import { waves } from '@/public';
import Image from 'next/image';
import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Photography = () => {
	return (
		<div
			id="fotografie"
			className="flex w-full h-screen overflow-hidden bg-darkBg  flex-col"
		>
			<div className="relative w-full pt-20 pl-24">
				<div className="w-32 h-12 bg-darkBlue " />
				<h1 className="absolute top-20 left-32 font-piazzolla text-white font-bold text-5xl">
					Fotografie nieba
				</h1>
			</div>
			<div className="flex justify-center items-center w-full mt-20 relative">
				<Image
					src={waves}
					alt="waves"
					className="z-0 absolute bottom-24 right-[450px]"
				/>
				<div className="flex justify-between items-center">
					<IoIosArrowBack className="text-white w-24 h-24 cursor-pointer" />
					<div className="w-[450px] h-[450px] bg-gray-500 z-10"></div>
					<IoIosArrowForward className="text-white w-24 h-24 z-10 cursor-pointer" />
				</div>
			</div>
		</div>
	);
};

export default Photography;
