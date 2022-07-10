import { FullFrame, ImgCard } from './LoginFormStyle';
import IMG from '../../assets/image/Logo.png';

function Logo() {
    return (
        <FullFrame>
            <ImgCard src={IMG} alt="" className="LogoImg" />
        </FullFrame>
    );
}
export default Logo;
