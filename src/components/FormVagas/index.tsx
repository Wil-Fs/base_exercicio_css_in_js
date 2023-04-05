import { FormEvent, useState } from 'react';

import { BtnStyled, FormStyled, InputStyled } from './styles';

type Props = {
	aoPesquisar: (termo: string) => void;
};

const FormVagas = ({ aoPesquisar }: Props) => {
	const [termo, setTermo] = useState<string>('');

	const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		aoPesquisar(termo.toLocaleLowerCase());
	};

	return (
		<FormStyled onSubmit={aoEnviarForm}>
			<InputStyled
				placeholder="Front-end, fullstack, node, design"
				onChange={(e) => setTermo(e.target.value)}
				type="search"
			/>
			<BtnStyled type="submit">Pesquisar</BtnStyled>
		</FormStyled>
	);
};
export default FormVagas;
