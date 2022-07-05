//CustomLoading.js
import React from 'react';
// import ReactLoading from 'react-loading';

import 'react-spinner-animated/dist/index.css';
import { Spinner } from 'react-spinner-animated';

const Loading = ({ type, color, text, width, height }) => (
    <>
        <Spinner className="border" text={text} bgColor={'white'} center={false} width={'200px'} height={'200px'} />
    </>
);

export default Loading;
