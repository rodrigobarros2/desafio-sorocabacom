import styled from 'styled-components';
import { device } from '../../config/device';

export const Container = styled.div``;

export const Home = styled.div`
	> div {
		overflow: hidden;
		z-index: -10;
	}
`;

export const CardContainer = styled.div`
	align-items: center;
	box-shadow: 0px 3px 6px #00000099;
	display: flex;
	flex-direction: column;
	justify-content: center;

	> div {
		width: 32vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 90vh;
		background-image: linear-gradient(#9c020480, #4d101045);

		@media ${device.tablet} {
			width: 40vh;
		}
		@media ${device.laptop} {
			width: 48vh;
		}
		@media ${device.desktop} {
			width: 52vh;
		}
		@media ${device.big_desktop} {
			width: 55vh;
		}
	}

	span:first-child {
		color: #ffffff;
		display: block;
		font: bold 0.6em Open Sans;
		font-family: 'Montserrat', sans-serif;
		font-weight: bold;
		padding: 1.5% 0 2% 5%;
		text-transform: uppercase;
		text-align: center;
		@media ${device.mobileMedium} {
			font-size: 0.9em;
		}
		@media ${device.landscape_phones} {
			font-size: 0.7em;
		}
		@media ${device.tablet} {
			font-size: 0.9em;
			padding: 1.5% 0 2% 5%;
		}
		@media ${device.laptop} {
			text-align: left;
		}
		@media ${device.big_desktop} {
			margin: -8% 0 1% 0%;
		}
	}

	span:last-child {
		color: #f0f0f2;
		display: block;
		font: 1em 'Open Sans', sans-serif;
		text-align: center;
		text-shadow: 0px 3px 6px #00000029;
		width: 80%;
		margin: 4% auto 0 auto;

		@media ${device.mobileMedium} {
			width: 80%;
			font-size: 1.1em;
		}
		@media ${device.landscape_phones} {
			font-size: 0.8em;
		}
		@media ${device.tablet} {
			font-size: 1.1em;
			width: 65%;
			margin: 4% auto 0 auto;
		}
		@media ${device.laptop} {
			width: 60%;
			font-size: 1.1em;
		}
		@media ${device.desktop} {
			width: 64%;
			margin: 0% auto 0 auto;
		}
		@media ${device.big_desktop} {
			width: 260px;
			font-size: 1.3em;
			margin: 3% auto 0 auto;
		}
	}
`;

export const ContainerImg = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	width: 92%;
`;

export const FeatherOne = styled.div`
	margin: 15% 0 0 -14%;
	width: 28%;
`;
export const FeatherTwo = styled.div`
	margin: 3% -8% 0 0;
	width: 36%;
`;
export const FeatherThree = styled.div`
	margin: -4% 0px 0 -3%;
	width: 21%;
`;
export const FeatherFour = styled.div`
	margin: -11% -21% 0 0;
	width: 35%;
`;

export const ContainerPena = styled.div`
	margin: -99% 0 35% 0%;

	width: 100%;

	> div {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
`;
