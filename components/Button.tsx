import React from 'react';

type ButtonProps = {
	text: String;
};

const Button = ({ text }: ButtonProps) => {
	return <div className="btn">{text}</div>;
};

export default Button;
