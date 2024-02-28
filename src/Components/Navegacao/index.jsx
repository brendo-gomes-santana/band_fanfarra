import React from 'react';

import { Main } from './styled';

export default function Navegacao({selecao}) {
  return (
    <Main>
        <button onClick={() => selecao(1)}>Novidades</button>
    </Main>
  )
}
