/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import * as S from './styles';

const schema = Yup.object().shape({
	name: Yup.string().required('Um nome é obrigatório'),
	email: Yup.string()
		.email('Insira um e-mail válido')
		.required('O e-mail é obrigatório'),
	message: Yup.string().required('Uma mensagem é obrigatório'),
});

export default function Forms() {
	function handleSubmit(data) {}
	return (
		<S.Container>
			<S.Wrapper>
				<Form onSubmit={handleSubmit} schema={schema}>
					<S.ContentForm>
						<h3>formulário</h3>
						<span>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat.
						</span>
						<S.FormGroupOne>
							<label htmlFor="name">
								<Input
									type="text"
									name="name"
									placeholder="Nome"
								/>
							</label>
							<label htmlFor="email">
								<Input
									type="email"
									name="email"
									placeholder="Email"
								/>
							</label>
						</S.FormGroupOne>

						<S.FormGroupTwo>
							<label htmlFor="message">
								<Input
									type="text"
									name="message"
									placeholder="Mensagem"
								/>
							</label>
							<button type="submit">Enviar</button>
						</S.FormGroupTwo>
					</S.ContentForm>
				</Form>
			</S.Wrapper>
			<S.Footer>
				<div>
					<a href="#home">^</a>
				</div>
			</S.Footer>
		</S.Container>
	);
}
