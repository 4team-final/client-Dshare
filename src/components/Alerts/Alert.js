import { Alert } from './AlertStyle';
import { AiFillExclamationCircle } from 'react-icons/ai';

export const AlertModule = ({ status, notice, font, contents }) => {
    return (
        <Alert visible={status} notice={notice} font={font}>
            <AiFillExclamationCircle style={{ color: '#fff' }} size={40} />
            <h5>{contents}</h5>
        </Alert>
    );
};
