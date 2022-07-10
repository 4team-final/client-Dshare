import React from 'react';
import LoginForm from '../../components/LoginForm';
import Logo from '../../components/LoginForm/Logo';
import { FullFrame, ComponentFrame } from './LoginPageStyle';

export const LoginPage = () => {
    return (
        <FullFrame>
            <ComponentFrame>
                <Logo />
            </ComponentFrame>
            <ComponentFrame>
                <LoginForm />
            </ComponentFrame>
        </FullFrame>
    );
};
