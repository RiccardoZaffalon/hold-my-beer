import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { colors } from '../styles/variables';

const Main = styled.main`
    background: ${colors.background.primary};
    color: ${colors.foreground.secondary};
`;

export default function Default({ children }) {
    return(
        <>
            <Header />
            <Main>
                { children }
            </Main>
            <Footer />
        </>
    )
}