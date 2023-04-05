import Header from './components/Cabecalho';
import Hero from './components/Hero';
import ListaVagas from './containers/ListaVagas';

import GlobalStyle, { Container } from './global';

function App() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Hero />
			<Container>
				<ListaVagas />
			</Container>
		</>
	);
}

export default App;
