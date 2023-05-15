import styled from 'styled-components'
import Center from './Center'
import ButtonLink from './ButtonLink'
import Button from './Button'
import CartIcon from './icons/CartIcon'

const Bg = styled.div`
	background-color: #222;
`

const Wrapper = styled.div`
	padding: 20px 0;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 40px;

	img {
		max-width: 100%;
	}
`

const ColumnLeft = styled.div`
	display: flex;
	align-items: center;
`

const ColumnRight = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
`

const Title = styled.h1`
	font-weight: normal;
	color: #fff;
	padding-bottom: 30px;
	font-size: 3rem;
`

const Desc = styled.p`
	color: #aaa;
	font-size: 1rem;
`

const ButtonsWrapper = styled.div`
	margin-top: 20px;
	display: flex;
	align-items: center;
	gap: 10px;
`

export default function Featured({ product }) {
	return (
		<Bg>
			<Center>
				<Wrapper>
					<ColumnLeft>
						<div>
							<Title>{product.title}</Title>
							<Desc>{product.description}</Desc>
							<ButtonsWrapper>
								<ButtonLink
									outline={1}
									white={1}
									href={`/products/${product._id}`}
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										fill='currentColor'
										className='w-6 h-6'
									>
										<path
											fillRule='evenodd'
											d='M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z'
											clipRule='evenodd'
										/>
									</svg>
									Read more
								</ButtonLink>
								<Button white>
									<CartIcon />
									Add to cart
								</Button>
							</ButtonsWrapper>
						</div>
					</ColumnLeft>
					<ColumnRight>
						<img
							src='https://res.cloudinary.com/vanhungnguyen/image/upload/v1684124939/1684124932579.png'
							alt=''
						/>
					</ColumnRight>
				</Wrapper>
			</Center>
		</Bg>
	)
}
