import permitpage from 'assets/image/permitpage.png';
import { FullWidthFrame, ImgCard } from './PermitPageStyle';

export const PermitPage = () => {
    return (
        <FullWidthFrame>
            <ImgCard src={permitpage} alt={'Access Denied'} />
        </FullWidthFrame>
    );
};
