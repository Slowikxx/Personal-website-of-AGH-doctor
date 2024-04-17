'use client';
import React from 'react';
import Link from 'next/link';

type ButtonProps = {
	text: string;
	id: string;
};

const Button = ({ text, id }: ButtonProps) => {
	const handleScroll = (id: string) => {
		const nextSection = document.getElementById(id);

		if (nextSection) {
			nextSection.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<button onClick={() => handleScroll(id)} className="btn">
			{text}
		</button>
	);
};

export default Button;
