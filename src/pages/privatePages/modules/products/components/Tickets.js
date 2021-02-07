import React from 'react';
import { StyledContainer, StyledModules } from './style';
import Ticket from './ticket/Ticket';

const Tickets = ({ products = [], id, name }) => {
    return (
        <StyledContainer>
            <StyledModules>
                {
                    products.length > 0 &&
                    products.map((product, i) => {
                        return <Ticket
                            key={`products${product._id}`}
                            text={product.name}
                            href={`/menu/${id}/${name}/producto/${product._id}`}
                            photo='https://cdn.potatopro.com/cdn/ff/JhBvxT_4ezHdsvvRqxhwrsSjCZvwIx7RRM4OqkItk_Y/1589463876/public/styles/amp_metadata_content_image_min_696px_wide/public/field/image/c%C3%B3mo-es-el-proceso-de-producci%C3%B3n-de-papas-fritas-en-argentina-809.jpg?itok=bEbbqziD'
                        />
                    }
                    )
                }
            </StyledModules>
        </StyledContainer>
    )
}

export default Tickets;
