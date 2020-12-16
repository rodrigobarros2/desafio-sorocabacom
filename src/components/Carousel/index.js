import React from 'react';
import Carousel from 'react-elastic-carousel';
import Image from 'next/image';

import * as S from './styles';

import Grandt from '../../assets/character/grant.png';
import Red from '../../assets/character/red.png';
import Sybil from '../../assets/character/sybil.png';

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 500, itemsToShow: 2 },
	{ width: 900, itemsToShow: 3 },
];

const Carrousel = () => {
	return (
		<S.Carrousel>
			<Carousel breakPoints={breakPoints}>
				<S.Item>
					<S.Content>
						<S.WrapperImage>
							<div>
								<Image
									src={Grandt}
									alt="Grandt"
									width={397}
									height={543}
								/>
							</div>
							<span>
								A Camerata foi apenas os dois no início, e suas
								fileiras nunca foram destinadas a exceder um
								número a ser contado em uma mão.
							</span>
						</S.WrapperImage>
					</S.Content>
				</S.Item>

				<S.Item>
					<S.Content>
						<S.WrapperImage>
							<div>
								<Image
									src={Red}
									alt="Red"
									width={404}
									height={554}
								/>
							</div>
							<span>
								Red, uma jovem cantora, entrou em posse do
								Transistor. Sendo a poderosa espada falante. O
								grupo Possessores quer tanto ela quanto o
								Transistor e está perseguindo implacavelmente a
								sua procura.
							</span>
						</S.WrapperImage>
					</S.Content>
				</S.Item>

				<S.Item>
					<S.Content>
						<S.WrapperImage>
							<div>
								<Image
									src={Sybil}
									alt="Sybil"
									width={403}
									height={551}
								/>
							</div>
							<span>
								A Camerata foi apenas os dois no início, e suas
								fileiras nunca foram destinadas a exceder um
								número a ser contado em uma mão.
							</span>
						</S.WrapperImage>
					</S.Content>
				</S.Item>
			</Carousel>
		</S.Carrousel>
	);
};

export default Carrousel;
