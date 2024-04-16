import React from 'react';
import { heroPhoto, darkBlob, lightBlob } from '@/public';
import Image from 'next/image';
import { BsDoorOpen } from 'react-icons/bs';
import { MdMailOutline } from 'react-icons/md';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';

const Logo = () => {
	return (
		<div className="flex flex-col w-56">
			<h1 className="font-piazzolla text-2xl text-white">
				<span className="text-lightBlue">dr</span> inż.{' '}
				<span className="text-lightBlue">Juliusz</span> Godek
			</h1>
			<div className="w-[152px] h-[2px] mt-1 rounded-xl bg-lightBlue self-end"></div>
		</div>
	);
};

const Hero = () => {
	return (
		<div className="bg-dark w-full h-screen pl-20 pt-8">
			<Image
				src={darkBlob}
				alt="light-blob"
				className="absolute left-0 top-0"
				width={256}
				height={252}
			/>
			<Logo />
			<div className="flex flex-col mt-64 ml-20 gap-10 font-medium">
				<div className="flex flex-row items-center gap-5">
					<BsDoorOpen className="text-white w-12 h-12" />
					<span className="text-white text-4xl">
						Katedra <span className="text-lightBlue">Elektroniki</span> C3 p.{' '}
						<span className="text-lightBlue">406</span>
					</span>
				</div>
				<div className="flex flex-row items-center gap-5">
					<MdMailOutline className="text-white w-12 h-12" />
					<span className="text-white text-4xl">
						<span className="text-lightBlue">godek</span> @agh.edu.pl
					</span>
				</div>
				<div className="flex flex-row items-center gap-5">
					<HiOutlineChatBubbleLeftRight className="text-white w-12 h-12" />
					<span className="text-white text-4xl">
						Konsultacje: po <span className="text-lightBlue">zgłoszeniu</span>{' '}
						przez email
					</span>
				</div>
			</div>
			<Image
				src={heroPhoto}
				alt="hero-image"
				className="absolute bottom-0 -right-8"
			/>
		</div>
	);
};

export default Hero;
