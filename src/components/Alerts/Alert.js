import { Alert } from './AlertStyle';
import { AiFillExclamationCircle } from 'react-icons/ai';

export const AlertModule = ({ status, notice, font, contents }) => {
    return (
        <Alert visible={status} notice={notice} font={font}>
            <AiFillExclamationCircle size={30} />
            <h5>{contents}</h5>
        </Alert>
    );
};
