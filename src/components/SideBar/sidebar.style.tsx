
import styled from 'styled-components';

const SidebarWrapper = styled.div`
    width: 160px;
    height: 100vh;
    display: flex;
    justify-content: center;
    padding-top: 127px;
    background: ${(props) => props.theme.colors.bgSecondary};
    ul{
        margin: 0 auto;
        padding: 0;
        li{
            list-style: none;
            position: relative;
            &.active{
                a{
                    color: ${(props) => props.theme.colors.colorActiveTwo};
                }
                &:before{
                    content: '';
                    position: absolute;
                    width: 3px;
                    height: 100%;
                    left: -54px;
                    top: -4px;
                    opacity: 1;
                    transition: all 0.3s ease-in;
                    background-color: ${(props) => props.theme.colors.colorActiveTwo};
                }

            }
            &:before{
                content: '';
                position: absolute;
                width: 3px;
                height: 100%;
                left: -54px;
                top: -4px;
                opacity: 0;
                transition: all 0.3s ease-in;
                background-color: ${(props) => props.theme.colors.colorActiveTwo};
            }
            &:hover{
                &:before{
                    opacity: 1;
                }
            }
        }
        li+li{
            margin-top: 78px;
        }
        a{
            color: ${(props) => props.theme.colors.colorPrimary};
            transition: all 0.3s ease-in;
            &:hover{
                color: ${(props) => props.theme.colors.colorActiveTwo};
            }
        }
        svg{
            font-size: 30px;
        }
    }

    @media (max-width: 991px) { 
        width: 100px;
        padding-top: 100px;
        ul{
            li+li{
                margin-top: 50px;
            }
            svg{
                font-size: 22px;
            }
            li{
                &.active{
                    &:before{
                        left: -39px;
                    }
                }
                &:before{
                    left: -39px;
                }
            }
        }
    }

`;

export default SidebarWrapper;
