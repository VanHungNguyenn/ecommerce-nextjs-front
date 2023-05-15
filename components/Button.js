import styled, { css } from 'styled-components'

export const ButtonStyle = css`
	border: 0;
	padding: 5px 15px;
	border-radius: 5px;
	cursor: pointer;
	border: 1px solid transparent;
	text-decoration: none;
	font-weight: bold;

	display: inline-flex;
	align-items: center;

	svg {
		height: 16px;
		margin-right: 5px;
	}

	${({ white, outline }) =>
		white &&
		!outline &&
		`
		background-color: #fff;
		color: #000;
	`}

	${({ white, outline }) =>
		white &&
		outline &&
		`
	background-color: transparent;
	color: #fff;
	border: 1px solid #fff;
	`}

	


	${({ size }) =>
		size === 'large' &&
		`
        padding: 10px 20px;
        font-size: 1.2rem;

		svg {
			height: 20px;
		}
    `}

	${({ primary }) =>
		primary &&
		`
		background-color: ${primary};
		color: #fff;
	`}

	${({ primary, outline }) =>
		primary &&
		outline &&
		`
	background-color: transparent;
	color: ${primary};
	border: 1px solid ${primary};
	`}
`

const StyledButton = styled.button`
	${ButtonStyle}
	font-size: 1rem;
`

export default function Button({ children, ...rest }) {
	return <StyledButton {...rest}>{children}</StyledButton>
}
