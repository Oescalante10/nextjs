import React from 'react';
import { StyledContainer, StyledModules } from './style';
import Module from './module/Module';

const Modules = ({ modules = [] }) => {
    return (
        <StyledContainer>
            <h1>Módulos</h1>
            <StyledModules>
                {
                    modules.length > 0 &&
                    modules.map( ({text, href, logo}, i) =>
                        <Module
                            key={`modules${text}${href}`}
                            text={text}
                            href={href}
                            logo={logo}
                        />
                    )
                }
            </StyledModules>

        </StyledContainer>
    )
}

export default Modules;
