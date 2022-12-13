import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

type MessageAlert = {
    typeMessage: 'success' | 'warning' | 'info' | 'error',
    message: string,
    isShowMessageAlert: boolean,
    setIsShowMessageAlert: (valueBoolean: boolean) => void
}

export default function MessageAlert({ typeMessage, message, isShowMessageAlert, setIsShowMessageAlert }: MessageAlert) {

    let componentAlert;

    if (typeMessage === 'success') {
        componentAlert = <Alert severity='success' onClose={() => { setIsShowMessageAlert(false) }}>{message}</Alert>
    } else if (typeMessage === 'warning') {
        componentAlert = <Alert severity='warning' onClose={() => { setIsShowMessageAlert(false) }}>{message}</Alert>
    } else if (typeMessage === 'info') {
        componentAlert = <Alert severity='info' onClose={() => { setIsShowMessageAlert(false) }}>{message}</Alert>
    } else if (typeMessage === 'error') {
        componentAlert = <Alert severity='error' onClose={() => { setIsShowMessageAlert(false) }}>{message}</Alert>
    }

    return (
        <>
            {
                isShowMessageAlert &&
                <Stack sx={{ width: '100%' }} spacing={2}>
                    {componentAlert}
                </Stack>
            }
        </>
    );
}