import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import './SearchBar.scss';
import { Form } from 'react-bootstrap';

const Header = () => {
    const getAuthInfo = useSelector((state) => state);
    const [modalShow, setModalShow] = useState(false);
    const [loginTitle, setLoginTitle] = useState('로그인/회원가입');
    const [myPageUrl, setMyPageUrl] = useState('/');
    const [sellingUrl, setSellingUrl] = useState('/');
    const [searchTitle, setSearchTitle] = useState('');
    const searchIcon = useRef(null);

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            searchIcon.current.click();
        }
    };

    useEffect(() => {
        if (getAuthInfo.isTrue) {
            setLoginTitle('로그아웃');
            setMyPageUrl(`/mypage/${getAuthInfo.user.idx}`);
            setSellingUrl('/new-product');
        } else {
            setLoginTitle('로그인/회원가입');
        }
    }, []);

    const logout = () => {
        window.location.href = `${process.env.REACT_APP_BASE_URL}/logout`;
    };

    return (
        <header>
            <div className="logo-container">
                <img src="" alt="" className=""></img>
                <div className="">
                    <Link to="/" className="D-share">
                        D-Share
                    </Link>{' '}
                </div>
            </div>
            {/* 서치바 */}
            {/* <div>{searchTitle}</div>

      <form className="search-container" action="">
        <input id="search-box" type="text" className="search-box" name="q" />
        <label htmlfor="search-box">
          <span className="fa-solid fa-magnifying-glass glyphicon glyphicon-search search-icon"></span>
        </label>
        <input type="submit" id="search-submit" />
      </form> */}

            <div className="menu-container">
                <Link to={sellingUrl}>
                    <p className="selctor">회의실 예약 하기</p>
                </Link>

                <span className="vertical-line2"></span>
                <Link to={myPageUrl}>
                    <p className="selctor">차량 예약 하기</p>
                </Link>
                <span className="vertical-line2"></span>
                <Link to="/">
                    <p className="selctor">마이페이지</p>
                </Link>
                <span className="vertical-line2"></span>
                <p className="selctor"> 로그아웃</p>
            </div>
        </header>
    );
};

export default Header;
