/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';
import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Teste Sorocabacom</title>
			</Head>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
