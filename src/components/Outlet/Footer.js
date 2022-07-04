import React from 'react';
import './Footer.scss';

function Footer() {
    return (
        <footer>
            <div className="left main">
                <div className="company">
                    D-Share<span className="vertical-line"></span>
                    <span className="footHeader">사내공유자원 프로그램</span>
                    <span className="vertical-line"></span>
                    <span className="bizInfo">사업자정보</span>
                </div>
                <br />
                <div>사업자 등록번호 : 123-456-789 통신판매업신고: 2022-서울송파-1124</div>
                <div>호스팅서비스 제공자 : Amazon Web Service(AWS)</div>
                <div>Email: neohage@naver.com </div>
                <br />
                <div>서울특별시 송파구 중대로 135, 서관 12층 (가락동) 대표전화 : 02-2188-6900 사업자번호 : 214-82-04799</div>
            </div>
        </footer>
    );
}

export default Footer;
