import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

type LoadingComponentTypes = {
    typeLoading: 'linear' | 'backdrop'
}

export default function LoadingComponent({ typeLoading }: LoadingComponentTypes) {
    return (
        <div>
            {
                typeLoading === 'backdrop' ?
                    <Backdrop
                        sx={{ color: '#A20D00', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={true}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                    :
                    <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                        <LinearProgress color="primary" />
                    </Stack>
            }
        </div>
    );
}