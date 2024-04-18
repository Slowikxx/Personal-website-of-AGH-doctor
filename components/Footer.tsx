import React from 'react';
import { triangles } from '@/public';
import Image from 'next/image';
import { RiPhoneFill } from 'react-icons/ri';
import { FiExternalLink } from 'react-icons/fi';

const Footer = () => {
	return (
		<div className="flex bg-darkBlue w-full h-36 flex-row justify-between">
			<div className="flex flex-col self-center ml-[600px]">
				<div className="flex flex-row gap-10 ">
					<div className="flex flex-row items-center justify-center gap-2">
						<RiPhoneFill className="text-white w-8 h-8" />
						<p className="text-white font-piazzolla">+48 12 617 30 23</p>
					</div>
					<div className="flex flex-row items-center justify-center gap-2">
						<FiExternalLink className="text-white w-8 h-8" />
						<a
							className="font-piazzolla text-white"
							href="https://skos.agh.edu.pl/osoba/juliusz-godek-6630.html"
							target="_blank"
						>
							Skos AGH
						</a>
					</div>
				</div>
				<p className="text-white font-pizzolla mt-5 text-center">
					©2024 Juliusz Godek. All rights reserved
				</p>
			</div>
			<Image src={triangles} alt="triangles" />
		</div>
	);
};

export default Footer;
