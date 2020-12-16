import styled from 'styled-components';
import { device } from '../../config/device';

export const Container = styled.div`
	background-color: #7dede2;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const Wrapper = styled.div`
	background-color: white;
	box-shadow: 0px 0px 6px #0000004d;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: -3% 0 -3% 0;
	position: relative;
	max-width: 1082px;
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
	width: 90%;
	margin: 0 auto 10% auto;

	input {
		padding-left: 20px;
	}

	h3 {
		margin-top: 40px;
		text-transform: uppercase;
		text-align: center;
		font: normal normal bold 35px/46px Montserrat;
		letter-spacing: -0.88px;
		color: #63c7a9;
	}
	> span {
		text-align: left;
		margin: 2% auto 0 auto;
		font-size: 1em;
		color: #363636;
		@media ${device.tablet} {
			font-size: 1.1em;
		}
		@media ${device.laptop} {
			width: 77%;
			font-size: 1.2em;
		}
	}
`;

export const FormGroupOne = styled.div`
	margin-top: 5%;
	display: flex;
	align-items: center;
	flex-direction: column;

	@media ${device.laptop} {
		flex-direction: row;
		justify-content: space-between;
		width: 70%;
		margin: 2% auto 0 auto;
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
		height: 48px;
		border: 1px solid #363636;
		width: 100%;
		@media ${device.laptop} {
		}
	}
`;

export const FormGroupTwo = styled.div`
	margin-top: 3%;

	display: flex;
	flex-direction: column;

	@media ${device.laptop} {
		width: 70%;
		margin: 3% auto 0 auto;
	}

	input {
		padding: 11px 0 135px 20px;
		border: 1px solid #363636;
		width: 100%;
		@media ${device.laptop} {
		}
	}
	button {
		border: none;
		margin-top: 5%;
		height: 48px;
		background: #63c7a9;
		color: white;
		@media ${device.laptop} {
			width: 50%;
		}
	}
`;

export const Footer = styled.div`
	background-color: #363636;

	height: 200px;
	width: 100%;

	h1 {
		color: white;
		text-align: right;
		margin: 5% 0 0 0;
	}
`;
