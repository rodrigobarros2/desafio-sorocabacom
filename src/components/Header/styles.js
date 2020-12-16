import styled from 'styled-components';
import { device } from '../../config/device';

export const Container = styled.div`
	align-items: center;
	background-color: #363636;
	display: flex;
	height: 10vh;
	justify-content: center;
	margin-left: -7%;
	overflow: hidden;
	@media ${device.tablet} {
		margin: 0 0 0 -1%;
	}

	h3 {
		color: white;
		font-family: 'Montserrat', sans-serif;
		font-weight: bold;
		text-transform: uppercase;
	}
`;
