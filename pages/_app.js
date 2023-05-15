import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }  

  body {  
    font-family: 'Roboto', sans-serif;
    background-color: #f0f0f0;
  }

  button {
    font-family: inherit;
  }

  img {
    max-width: 100%;
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
