import errorimg from 'assets/image/errorpage.png';
import { FullWidthFrame, ImgCard } from './ErrorPageStyle';

export const ErrorPage = () => {
    return (
        <FullWidthFrame>
            <ImgCard src={errorimg} alt={'404 Not Found'} />
        </FullWidthFrame>
    );
};
