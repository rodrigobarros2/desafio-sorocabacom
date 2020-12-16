import React from 'react';

import Image from 'next/image';

import Logo from '../../assets/logo.png';
import { Container } from './styles';

const Header = () => {
	return (
		<Container>
			<Image src={Logo} alt="Logo" width={109} height={109} />
			<h3>supergiantgames</h3>
		</Container>
	);
};

export default Header;
