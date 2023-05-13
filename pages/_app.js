import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`

export default function App({ Component, pageProps }) {
	return (
		<>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	)
}
