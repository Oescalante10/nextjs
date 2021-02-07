import React, { useContext } from 'react';
import { StyledCard, StyledHeader, StyledTableIcon } from './style';
import TableIcon from '../../../../../../../components/icons/TableIcon';
import TakeawayIcon from '../../../../../../../components/icons/TakeawayIcon';
import { Context } from '../../../../../../../store/appContext';

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
                        <TakeawayIcon size={20} color={store.danger}/>
                            :
                            <>
                                <TableIcon size={20} color={store.danger}/>
                                <span>{table && table.number}</span>
                            </>
                    }
                </StyledTableIcon>
            </StyledHeader>
        </StyledCard>
    )
}

export default Header;

