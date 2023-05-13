import Link from 'next/link'
import styled from 'styled-components'
import Center from './Center'

const StyledHeader = styled.header`
	background-color: #222;
`

const Logo = styled(Link)`
	color: #fff;
	text-decoration: none;
`

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 30px 0;
`

const NavLink = styled(Link)`
	color: #aaa;
`

export default function Header() {
	return (
		<StyledHeader>
			<Center>
				<Wrapper>
					<Logo href='/'>Ecommerce</Logo>
					<nav>
						<NavLink href='/'>Home</NavLink>
						<NavLink href={'/products'}>All products</NavLink>
						<NavLink href={'/categories'}>Categories</NavLink>
						<NavLink href={'/account'}>Account</NavLink>
						<NavLink href={'/cart'}>Cart (0)</NavLink>
					</nav>
				</Wrapper>
			</Center>
		</StyledHeader>
	)
}
