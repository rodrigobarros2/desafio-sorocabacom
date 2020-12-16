import styled from 'styled-components';
import { device } from '../../config/device';

export const Container = styled.div`
	align-items: center;
	display: flex;
	background-color: #7dede2;
	flex-direction: column;
	justify-content: center;
`;

export const Wrapper = styled.div`
	display: flex;
	background-color: white;
	box-shadow: 0px 0px 6px #0000004d;
	border-radius: 8px;
	flex-direction: column;
	position: relative;
	margin: -3% 0 -3% 0;
	max-width: 1082px;
	width: 100%;
	position: relative;
	z-index: 2;
	form {
		width: 100%;
		@media ${device.laptop} {
			height: 832px;
		}
	}
`;

export const ContentForm = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto 10% auto;
	width: 90%;

	input {
		padding-left: 20px;
	}

	h3 {
		color: #63c7a9;
		letter-spacing: -0.88px;
		font-family: 'Montserrat', sans-serif;
		font-size: 1.8em;
		font-weight: bold;
		margin-top: 8%;
		text-align: center;
		text-transform: uppercase;
		@media ${device.laptop} {
			font-size: 2.1em;
		}
	}
	> span {
		color: #363636;
		font: 1em 'Open Sans', sans-serif;
		margin: 2% auto 0 auto;
		text-align: left;
		width: 100%;
		@media ${device.tablet} {
			font-size: 1.1em;
		}
		@media ${device.laptop} {
			font-size: 1.3em;
			max-width: 745px;
			margin: 4% auto 0 auto;
		}
	}
`;

export const FormGroupOne = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	margin-top: 5%;

	@media ${device.laptop} {
		flex-direction: row;
		justify-content: space-between;
		margin: 5% auto 0 auto;
		width: 61%;
	}

	label {
		margin: 0 0px 2% 0;
		width: 100%;
		@media ${device.laptop} {
			margin: 0;
			width: 48%;
		}
	}
	input {
		border: 1px solid #363636;
		height: 48px;
		width: 100%;
	}

	span {
		color: red;
	}
`;

export const FormGroupTwo = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 3%;

	@media ${device.laptop} {
		margin: 3% auto 0 auto;
		width: 61%;
	}
	span {
		color: red;
	}
	input {
		border: 1px solid #363636;
		padding: 11px 0 135px 20px;
		width: 100%;
	}
	button {
		color: white;
		background: #63c7a9;
		border: none;
		height: 48px;
		margin-top: 5%;
		@media ${device.laptop} {
			width: 50%;
		}
	}
`;

export const Footer = styled.div`
	background-color: #363636;
	height: 414px;
	position: relative;
	text-align: center;
	width: 100%;
	z-index: 0;

	> div {
		border-radius: 100%;
		background: #ffffff;
		height: 80px;
		padding: 13px 0 0 0;
		position: absolute;
		top: 26%;
		right: 8%;
		width: 90px;
		transition: all 0.6s ease-in-out;
	}

	a {
		text-decoration: none;
		color: #363636;
		display: inline-block;
		font-size: 4em;
	}
`;
