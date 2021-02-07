import React, { useContext } from 'react';
import { Context } from '../../../../../../../store/appContext';
import { StyledCard, StyledHeader, StyledTableIcon } from './style';
import TableIcon from '../../../../../../../components/icons/TableIcon';
import TakeawayIcon from '../../../../../../../components/icons/TakeawayIcon';

const Header = ({ time, table }) => {

    const { store } = useContext(Context)
    
    return (
        <StyledCard>
            <StyledHeader>
                <span>{time.created_at}</span>
                <span>{time.minutes}</span>
                <StyledTableIcon>
                    {
                        table && table._id === 1 ?
                            <TakeawayIcon color={store.danger} size={20}/>
                            :
                            <>
                                <TableIcon color={store.danger} size={20}/>
                                <span>{table && table.number}</span>
                            </>
                    }
                </StyledTableIcon>
            </StyledHeader>
        </StyledCard>
    )
}

export default Header;

