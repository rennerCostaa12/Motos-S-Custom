import { ContentUser } from '../styles/MenuUser';

import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { User } from 'phosphor-react';
import { useContext, useState } from 'react';
import { UsersContext } from '../contexts/Auth';

import { useNavigate } from 'react-router-dom';

type MenuUserProps = {
    firstName: string | undefined,
    lastName: string | undefined,
    isSeller: boolean | undefined
}

export default function MenuUser({ firstName, lastName, isSeller }: MenuUserProps) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const navigate = useNavigate();

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const { logout } = useContext(UsersContext);

    const handleLogout = () => {
        logout();
        navigate('/login');
    }

    const handleRedirectAnnounceSales = () => {
        navigate('/anunciar_vendas');
    }


    const handleRedirectEditProfile = () => {
        navigate('/editar_perfil');
    }

    return (
        <div>

            {!firstName ?
                <span style={{ color: '#f1f1f1' }}>Carregando</span>
                :
                <ContentUser>
                    <Button
                        color='secondary'
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <User size={20} weight="bold" />
                        {`${firstName} ${lastName}`}
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        {isSeller && <MenuItem onClick={handleRedirectAnnounceSales}>Anunciar vendas</MenuItem>}
                        <MenuItem onClick={handleRedirectEditProfile}>Editar Perfil</MenuItem>
                        <MenuItem onClick={handleLogout}>Sair</MenuItem>
                    </Menu>
                </ContentUser>
            }
        </div>
    );
}