import { FaUsers } from "react-icons/fa6";

import React from 'react';

import Header from '../../Components/Header';

import { Main } from './styled'

export default function Patrocinio() {
    return (
        <>
            <Header />
            <Main>

                <article>
                    <FaUsers/>
                    <h1>Patrocinadores</h1>
                </article>
                
            </Main>
        </>
    )
}
