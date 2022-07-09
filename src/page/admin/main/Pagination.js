import * as React from 'react';
import { useEffect, useCallback, useState, useRef } from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { dividerClasses } from '@mui/material';

export default function CustomIcons(props) {
    const [nowPage, setNowPage] = useState();

    const selectPage = (item) => {
        props.res(item.page);
        console.log(item.page);
    };

    return (
        <Stack spacing={2}>
            <Pagination
                count={props.totalPage}
                renderItem={(item) => (
                    <div onClick={() => selectPage(item)} onKeyPress={() => console.log(item)}>
                        <PaginationItem components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }} {...item} />
                    </div>
                )}
            />
        </Stack>
    );
}
