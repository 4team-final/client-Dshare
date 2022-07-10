import { HalfFrame, TitleFrame, ContentFrame, MainTextFrame, MiddleFrame } from './LoginFormStyle';
import InputLogin from './InputLogin';
export const LoginForm = () => {
    return (
        <HalfFrame>
            <MiddleFrame>
                <TitleFrame>
                    <h2>HELLO, CO-WORKERS</h2>
                </TitleFrame>
                <ContentFrame>
                    ‘직장 내 회의’ 관련 설문조사에 따르면 직장인들은
                    <br />
                    <br /> 하루 평균 1.4회 회의에 참석하고 있다고 합니다.
                </ContentFrame>

                <ContentFrame>
                    그런데 회의 일정을 잡을 때 한정된 회의 공간때문에 <br />
                    <br /> 혼란을 겪은 적은 없으신가요?
                </ContentFrame>
                <ContentFrame>
                    사내 회의 일정을 한 번에 확인하고 회의실을 예약할 수 있는
                    <br />
                    <br />
                    <br />
                    <MainTextFrame>"자원관리(D-Share)"</MainTextFrame>
                    <br />
                    <br />
                    <br />
                    기능이 있다면 업무 일정 관리가 더욱 편리해질 것입니다.
                </ContentFrame>
                <ContentFrame>
                    <InputLogin />
                </ContentFrame>
            </MiddleFrame>
        </HalfFrame>
    );
};
