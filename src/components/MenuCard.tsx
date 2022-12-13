import { ContentIconCard } from '../styles/MenuCard';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

import { DotsThreeVertical } from 'phosphor-react';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { baseApi } from '../api/api';

import { useContext } from 'react';
import { UsersContext } from '../contexts/Auth';

import { v4 as uuidv4 } from "uuid";

type MenuCardProps = {
    idMotorbike: number
}

export default function MenuCard({ idMotorbike }: MenuCardProps) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const { setUpdateList } = useContext(UsersContext);

    const navigate = useNavigate();

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleEditAnnounce = () => {
        navigate(`/editar_anuncio/${idMotorbike}`);
    }

    const handleDeleteAnnounce = () => {
        baseApi.delete(`/motorbikes/${idMotorbike}`);
        setUpdateList(uuidv4());
    }

    return (
        <ContentIconCard>
            <IconButton
                color='primary'
                id="icon-menu-card"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <DotsThreeVertical size={32} />
            </IconButton>
            <Menu
                id="menu-items-card"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleEditAnnounce}>Editar Anúncio</MenuItem>
                <MenuItem onClick={handleDeleteAnnounce}>Deletar Anúncio</MenuItem>
            </Menu>
        </ContentIconCard>
    );
}