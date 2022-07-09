// Install
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// User
import {
    TextFrame,
    CardFrame,
    ComponentFrame,
    ContentFrame,
    HalfWidthFrame,
    TextContent,
    TitleFrame,
    SectionFrame,
    TextTitle,
    CustomButton
} from './BoardTableStyle';
import { selectByTitle, selectByContent } from '../../../store/actions/WebsocketAction';

const BoardTableTitleBar = (props) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const setTitleHandler = (e) => {
        setTitle(e.target.value);
    };
    useEffect(() => {
        if (props.props) {
            dispatch(selectByTitle(title));
        }
    }, [props.props]);
    return (
        <TitleFrame>
            <TextTitle disabled={props.props} placeholder=" 제목을 입력해주세요" onChange={setTitleHandler} />
        </TitleFrame>
    );
};

const BoardTableContentBar = () => {
    const dispatch = useDispatch();
    const [content, setContent] = useState('');
    const [disabled, setDisabled] = useState(false);
    const resetStore = useSelector((state) => state.websocketReducer.resetdata);
    const contentHandler = (e) => {
        setContent(e.target.value);
    };
    const setTabHandler = (e) => {
        if (e.keyCode === 9) {
            e.preventDefault();
            let val = e.target.value;
            let start = e.target.selectionStart;
            let end = e.target.selectionEnd;
            e.target.value = val.substring(0, start) + '\t' + val.substring(end);
            e.target.selectionStart = e.target.selectionEnd = start + 1;
            contentHandler(e);
            return false;
        }
    };
    useEffect(() => {
        if (resetStore && resetStore.ready) {
            setDisabled(false);
        }
    }, [resetStore]);
    useEffect(() => {
        if (disabled) {
            dispatch(selectByContent(content));
        }
    }, [disabled]);
    return (
        <SectionFrame>
            <TextFrame>
                <BoardTableTitleBar props={disabled} />
            </TextFrame>
            <ContentFrame>
                <CardFrame>
                    <TextContent
                        placeholder="  사유를 기재하여 주십시오"
                        value={content}
                        onChange={(e) => contentHandler(e)}
                        onKeyDown={setTabHandler}
                        disabled={disabled}
                    />
                </CardFrame>
            </ContentFrame>
            <div>
                <CustomButton onClick={() => setDisabled(true)} disabled={disabled}>
                    저장
                </CustomButton>
                <CustomButton onClick={() => setDisabled(false)}>재입력</CustomButton>
            </div>
        </SectionFrame>
    );
};

export const BoardTableService = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);
    return <>{loading ? <></> : <BoardTableContentBar />}</>;
};

export const BoardTableFrame = () => {
    return (
        <HalfWidthFrame>
            <ComponentFrame>
                <BoardTableService />
            </ComponentFrame>
        </HalfWidthFrame>
    );
};
