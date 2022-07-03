import { ImgCard } from './SelectTableStyle';
import SimpleSlider from '../reservation/SimpleSlider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const SelectTableCard = (item) => {
    return (
        <div>
            {item.props.id}
            <div>
                {item.props && item.props.imgList.length ? (
                    <>
                        <div className="sliderLayout">
                            <SimpleSlider data={item.props.imgList} style={{ width: '100px', height: '50px' }} />
                        </div>
                    </>
                ) : (
                    <div className="sliderLayout"></div>
                )}
                {/* <ImgCard alt="차량이미지" src={`${item.props.imgList}`} /> */}
                <div>
                    {item.props.name}
                    {item.props.number}
                    {item.props.model}
                    {item.props.capacity}
                </div>
            </div>
        </div>
    );
};
