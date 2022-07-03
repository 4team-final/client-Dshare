import { SelectTableService } from './SelectTableService';
import { SComponentFrame, SHalfWidthFrame } from './SelectTableStyle';

export const SelectTableFrame = () => {
    return (
        <SHalfWidthFrame>
            <SComponentFrame>
                <SelectTableService />
            </SComponentFrame>
        </SHalfWidthFrame>
    );
};
