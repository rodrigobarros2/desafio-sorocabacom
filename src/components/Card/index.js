/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import Image from 'next/image';

import * as S from './styles';

import Header from '../Header';

import ImageCard from '../../assets/img-card.png';

import BgImage from '../../assets/bg-image.png';

import Feather1 from '../../assets/feather/feather-1.png';
import Feather2 from '../../assets/feather/feather-2.png';
import Feather3 from '../../assets/feather/feather-3.png';
import Feather4 from '../../assets/feather/feather-4.png';

const App = () => {
	return (
		<S.Container>
			<S.Home>
				<Image
					alt="Background"
					src={BgImage}
					layout="fill"
					objectFit="cover"
					quality={100}
				/>
				<Header />
				<S.CardContainer>
					<div>
						<span>transistor - red the singer</span>
						<S.ContainerImg>
							<Image
								src={ImageCard}
								alt="Red The Singer"
								width={544}
								height={772}
								quality={100}
							/>

							<S.ContainerPena>
								<div>
									<S.FeatherOne>
										<Image
											src={Feather1}
											alt="Red The Singer"
											width={149}
											height={138}
											quality={100}
										/>
									</S.FeatherOne>

									<S.FeatherTwo>
										<Image
											src={Feather2}
											alt="Red The Singer"
											width={199}
											height={173}
											quality={100}
										/>
									</S.FeatherTwo>
								</div>

								<div>
									<S.FeatherThree>
										<Image
											src={Feather3}
											alt="Red The Singer"
											width={114}
											height={119}
											quality={100}
										/>
									</S.FeatherThree>

									<S.FeatherFour>
										<Image
											src={Feather4}
											alt="Red The Singer"
											width={176}
											height={173}
											quality={100}
										/>
									</S.FeatherFour>
								</div>
							</S.ContainerPena>
						</S.ContainerImg>

						<span className="subtitle">
							"Olha, o que quer que você esteja pensando, me faça
							um favor, não solte."
						</span>
					</div>
				</S.CardContainer>
			</S.Home>
		</S.Container>
	);
};

export default App;
