import styled from 'styled-components'
import Button from './Button'
import CartIcon from './icons/CartIcon'

const ProductWrapper = styled.div``

const WhiteBox = styled.div`
	background-color: #fff;
	padding: 20px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 10px;

	div {
		height: 120px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;

		img {
			height: 80%;
			object-fit: cover;
		}
	}
`

const Title = styled.h2`
	font-weight: normal;
	font-size: 0.9rem;

	margin: 0;

	text-align: center;
`

const ProductInfoBox = styled.div`
	margin-top: 5px;
`

const PriceRow = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const Price = styled.div`
	font-size: 1.5rem;
	font-weight: bold;
`

export default function ProductBox({ product }) {
	const { _id, title, description, price, images } = product

	console.log({ _id, title, description, price, images })

	return (
		<ProductWrapper>
			<WhiteBox>
				<div>
					<img src={images[0]} alt={title} />
				</div>
			</WhiteBox>
			<ProductInfoBox>
				<Title>{title}</Title>
				<PriceRow>
					<Price>${price}</Price>
					<Button primary outline>
						<CartIcon />
					</Button>
				</PriceRow>
			</ProductInfoBox>
		</ProductWrapper>
	)
}
