import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/variables';

const Footer = styled.footer`
    background: ${colors.background.secondary};
    color: ${colors.foreground.primary};
`;

export default function () {
    return(
        <Footer>
            footer here
        </Footer>
    )
}