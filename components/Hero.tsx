import React from 'react';
import { heroPhoto, darkBlob, lightBlob } from '@/public';
import Image from 'next/image';
import { BsDoorOpen } from 'react-icons/bs';
import { MdMailOutline } from 'react-icons/md';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import Button from './Button';
import Link from 'next/link';

const Logo = () => {
	return (
		<Link href="/" className="flex flex-col w-[270px] cursor-pointer">
			<h1 className="font-petrona text-3xl text-white">
				<span className="text-lightBlue">dr</span> inż.{' '}
				<span className="text-lightBlue">Juliusz</span> Godek
			</h1>
			<div className="w-[184px] h-[2px] mt-1 rounded-xl bg-lightBlue self-end"></div>
		</Link>
	);
};

const Hero = () => {
	return (
		<div id="/" className="bg-dark w-full h-screen pl-20 pt-8 overflow-hidden">
			<Image
				src={darkBlob}
				alt="light-blob"
				className="absolute -left-28 -top-28"
				width={400}
				height={402}
			/>
			<div className="flex flex-row w-full justify-between pr-20">
				<Logo />
				<div className="flex gap-10 flex-row">
					<Button text={'NTwK'} id="ntwk" />
					<Button text={'EiT'} id="eit" />
					<Button text={'Fotografie'} id="fotografie" />
				</div>
			</div>
			<div className="flex flex-col mt-64 ml-20 gap-10 font-medium font-piazzolla">
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
				className="absolute bottom-0 -right-8 overflow-hidden"
			/>
		</div>
	);
};

export default Hero;
