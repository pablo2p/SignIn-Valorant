import styled, { css } from 'styled-components';

import BackgroundImg from '../../assets/background.jpg';

import { 
    QuestionMarkCircle, 
    Cog, 
    ExternalLink,
} from 'styled-icons/heroicons-solid';

import { 
    ArrowForward,
    Minimize,
    Close,
    PriorityHigh,
} from 'styled-icons/material-outlined';

import { Help } from '@styled-icons/ionicons-solid/Help';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    max-width: 600px;
`;
export const Centralize = styled.div`
    margin: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 360px;
    height: 100%;
`;

export const Topo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .aviso {
        position: relative;

        &:hover .tooltip {
            display: block;
        }

        .tooltip {
            display: none;
            background: #FFF;
            border-radius: 5px;
            padding: 25px 20px;
            width: 300px;
            position: absolute;
            z-index: 1;

            font-size: 13px;
            font-weight: 600;

            top: -24px;
            left: 39px;
            box-shadow: -1px -1px 15px rgba(0, 0, 0, 0.4);

            &::before {
                content: "";
                position: absolute;
                left: -10px;
                display: inline-block;
                vertical-align: middle;
                margin-right: 10px;
                width: 0; 
                height: 0; 

                border-top: 10px solid transparent;
                border-bottom: 10px solid transparent; 
                border-right: 10px solid rgb(255, 255, 255); 
            }

            p {
                margin-top: 15px;

                a {
                    text-decoration: none;
                    color: #d5484b;

                    svg {
                        margin-top: -4px;
                    }
                }
            }
        }
    }

    img {
        width: 50px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;

    h1 {
        margin-bottom: 40px;
    }

    .input-text {
        width: 100%;
        height: 60px;
        background: #ededed;
        margin-bottom: 15px;
        display: flex;
        align-items: flex-end;
        position: relative;
        transition: all 0.2s;

        label {
            top: 22px;
            left: 20px;
            pointer-events: none;
            text-transform: uppercase;
            font-size: 11px;
            font-weight: 800;
            color: #999999;
            position: absolute;
            transition: all 0.2s;
        }

        input {
            background: #ededed;
            width: 100%;
            height: 100%;
            border: 2px solid #ededed;
            border-radius: 3px;

            padding: 8px 10px;
            
            font-size: 16px;
            font-weight: 800;
            color: #333333;

            &::placeholder {
                text-transform: uppercase;
                font-size: 11px;
                color: #999999;
            }

            &:hover {
                background: #e7e7e7;
                color: #7e7e7e;
            }

            &:focus + svg {
                display: none;
            }

            &:focus + label {
                left: 10px;
                top: 7px;
                font-size: 9px;
            }

            &:focus, .input-text {
                background: white;
                border: 2px solid #333333;
                color: #333333;
            }
            
            &:not(:placeholder-shown) + label {
                left: 10px;
                top: 7px;
                font-size: 9px; 
            }
        }
    }

    .salvar {
        margin-top: 15px;

        .styled-checkbox {
            position: absolute; 
            opacity: 0; 
            
            & + label {
                position: relative;
                cursor: pointer;
                padding: 0;
                font-size: 14px;
                font-weight: 700;
                color: #7e7e91;
                transition: all 0.2s;

                &:hover {
                opacity: 0.9;
                }
            }

            & + label:before {
                content: '';
                margin-right: 10px;
                display: inline-block;
                vertical-align: text-top;
                width: 18px;
                height: 17px;
                background: #ececec;
                border-radius: 3px;
            }
            
            &:hover + label:before {
                background: #e7e7e7;
                color: #7e7e7e;
            }
            
            &:checked + label:before {
                background: #d13639;
            }
            
            &:checked + label:after {
                content: '';
                position: absolute;
                left: 4px;
                top: 8px;
                background: white;
                width: 2px;
                height: 2px;
                box-shadow: 
                2px 0 0 white,
                4px 0 0 white,
                4px -2px 0 white,
                4px -4px 0 white,
                4px -6px 0 white,
                4px -8px 0 white;
                transform: rotate(45deg);
            }
            }
    }

    h2 {
        font-size: 14px;
    }

    .submit {
        margin-top: 60px;
        width: 100%;
        text-align: center;

        button {
            background: #d13639;
            border: 0;
            width: 70px;
            height: 70px;
            border-radius: 20px;

            cursor: pointer;
            transition: all 0.2s;

            &:hover {
                background: #bc252a;
            }

            svg {
                color: white;
            }
        }
    }
`;

export const Infos = styled.div`
    width: 100%;

    .session {
        display: flex;
        justify-content: space-between;
    }

    .version {
        color: black;
        opacity: 0.3;
        transition: all 0.2s;

        &:hover {
            opacity: 0.5;
        }
    }

    a {
        color: #b2b2b6;
        text-decoration: none;
        font-size: 11px;
        font-weight: 800;
        text-transform: uppercase;
        transition: color 0.2s;

        &:hover {
            color: #111111;
        }
    }
`;

export const Background = styled.div`
    background: black url(${BackgroundImg}) no-repeat right;
    background-size: cover;
    display: flex;
    flex: 1;
    justify-content: space-between;

    .avisos {
        margin: 40px 40px;
        background: #d452e6;
        width: 50px;
        height: 50px;
        transform: rotate(45deg);

        cursor: pointer;
        transition: background 0.2s;

        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            background: #c24fd2;
        }
    }

    .window {
        height: 100%;
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        justify-content: space-between;

        .window-buttons {
            margin: 0;

            button {
                width: 55px;
                height: 50px;
                background: transparent;
                border: 0;

                transition: all 0.1s;
                cursor: pointer;
                opacity: 0.7;

                &:hover {
                    background: rgba(255, 255, 255, 0.1);
                    opacity: 1;
                }

                svg {
                    color: white;
                    filter: drop-shadow( 1px 1px 1px rgba(0, 0, 0, .3));
                }
            }
        }

        .footer {
            padding: 30px;

            button {
                padding: 10px 12px;
                border: 0;
                background: #7d797c; 
                border-radius: 5px;
                cursor: pointer;
                transition: all 0.3s;

                &:hover {
                    background: #a5a3a5;
                }
            }
        }
    }

    @media only screen and (max-width: 900px) {
        .avisos, .window {
            display: none;
        }
    }
`; 

/* Icons */

const IconsFix = css`
    width: 20px;
    height: 20px;

    fill: white;
`;

export const MinIcon = styled(Minimize)`${IconsFix}`;
export const CloseIcon = styled(Close)`${IconsFix}`;
export const SettingsIcon = styled(Cog)`${IconsFix}`;
export const HelpMinIcon = styled(Help)`${IconsFix}`;

export const HelpIcon = styled(QuestionMarkCircle)`
    width: 20px;
    height: 20px;

    fill: #b4b4b4;
`;

export const LoginIcon = styled(ArrowForward)`
    width: 32px;
    height: 32px;
`;

export const ArrowIcon = styled(ExternalLink)`
    width: 19px;
    height: 19px;
    position: absolute;
`;

export const WarningIcon = styled(PriorityHigh)`
    width: 35px;
    height: 35px;

    transform: rotate(-45deg);
`;