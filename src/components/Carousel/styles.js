import styled from 'styled-components';
import { device } from '../../config/device';

export const Carrousel = styled.div`
	align-items: center;
	background: #363636;
	display: flex;
	height: 100vh;
	overflow: hidden;
	> div {
		margin: 0 auto;
		max-width: 1200px;
	}

	.sc-gKsewC {
		display: none;
	}
	button {
		color: white;
		box-shadow: none !important;
		background: none !important;
		font-size: 2.2em;
	}
`;

export const Item = styled.div`
	align-items: center;
	color: #fff;
	display: flex;
	justify-content: center;
	margin: 15px;
	font-size: 4em;
	@media ${device.laptop} {
		margin: 15px 30px;
	}
`;

export const Content = styled.div`
	margin: 35% 0 0 0;
	max-width: 387px;
`;

export const WrapperImage = styled.div`
	align-items: center;
	background: #ffffff;
	border-radius: 31px;
	display: flex;
	height: 60vh;
	min-height: 400px;
	max-height: 500px;
	flex-direction: column;

	span {
		color: #363636;
		display: block;
		font: 0.2em 'Open Sans', sans-serif;
		margin: 0 auto;
		padding: 5% 0 10% 0;
		text-align: left;
		width: 85%;
		@media ${device.desktop} {
			font-size: 0.25em;
		}
	}
	> div {
		align-items: center;
		display: flex;
		background-color: #363636;
		border: 2px solid #fff;
		border-radius: 20%;
		justify-content: center;
		margin: -17% 0 0 0;
		width: 95%;

		& > div {
			margin: -25% 0 0 0 !important;
		}
	}
`;
