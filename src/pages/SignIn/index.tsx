import React from 'react';

import { 
    Container, 
    Content, 
    Centralize, 
    Topo, 
    HelpIcon,
    ArrowIcon,
    Form,
    LoginIcon,
    Infos,
    Background,
    WarningIcon,
    MinIcon,
    HelpMinIcon,
    CloseIcon,
    SettingsIcon,
} from './styles';

import LogoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <Centralize>
                <Topo>
                    <img src={LogoImg} alt="logo"/>
                    <div className="aviso">
                        <HelpIcon />
                        <div className="tooltip">
                            <span>
                                Você não precisa mais selecionar uma região antes de fazer login. Quando fizer login, 
                                a região associada à sua conta será atualizada automaticamente.
                            </span>
                            <p>Se estiver com problemas para fazer login, talvez precise 
                                <a href="league"> atualizar sua conta.<ArrowIcon /></a>
                            </p>
                            
                        </div>
                    </div>
                </Topo>

                <Form>
                    <h1>Sign in with your Riot Account</h1>
                    <div className="input-text">
                        <input type="text" placeholder=" " />
                        <label>Username</label>
                    </div>
                    <div className="input-text">
                        <input type="password" placeholder=" " />
                        <label>Password</label>
                    </div>
                    <div className="salvar">
                        <input className="styled-checkbox" id="styled-checkbox-1" type="checkbox" />
                        <label htmlFor="styled-checkbox-1">Stay signed in</label>
                    </div>

                    <div className="submit">
                        <button>
                            <LoginIcon />
                        </button>
                    </div>
                </Form>

                <Infos>
                    <a href="signUp">Create Account</a>
                    <div className="session">
                        <a href="forget">Can't sign in?</a>
                        <a className="version" href="version">V20.7.0</a>
                    </div>
                </Infos>
            </Centralize>
        </Content>
        <Background>
            <div className="avisos">
                <WarningIcon />
            </div>
            <div className="window">
                <div className="window-buttons">
                    <button><MinIcon /></button>
                    <button><HelpMinIcon /></button>
                    <button><CloseIcon /></button>
                </div>
                <div className="footer">
                    <button><SettingsIcon /></button>
                </div>
            </div>
        </Background>
    </Container>
);

export default SignIn;