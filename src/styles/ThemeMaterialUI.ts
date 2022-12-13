import { createTheme, experimental_sx as sx, } from '@mui/material/styles';

export const themeMaterial = createTheme({
    palette: {
        primary: {
            main: '#A20D00',
        },
        secondary: {
            main: '#f1f1f1',
        }
    },

    components: {
        MuiTextField: {  
            styleOverrides: {
                root: sx({
                    borderRadius: 1,
                    color: 'red',
                    fontSize: '1.6rem'
                })
            }
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '1rem',
                }
            }
        }
    }
});