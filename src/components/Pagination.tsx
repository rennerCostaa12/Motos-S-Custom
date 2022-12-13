import { Pagination as PaginationComponent } from '@mui/material';
import Stack from '@mui/material/Stack';
import { ChangeEvent } from 'react';

type PaginationProps = {
    countPages: number,
    page: number,
    setPages: (data: number) => void,
}

export default function Pagination({ countPages, setPages, page }: PaginationProps) {

    const handlePagination = (event:ChangeEvent<unknown>, page:number) => {
        setPages(page);
        scroll(0, 0);
    }

    return (
        <Stack spacing={2}>
            <PaginationComponent
                count={countPages}
                variant="outlined"
                color='primary'
                shape="rounded"
                page={page}
                onChange={handlePagination}
            />
        </Stack>
    );
}