
import styled from 'styled-components';

const CourseFilterWrapper = styled.div`

    ul{
        display: flex;
        margin: 0;
        padding: 0;
        align-items: center;
    }
    
    li{
        list-style: none;
        &:first-child{
            a{
                color:  ${(props) => props.theme.colors.colorActiveTwo};
                &:before{
                    opacity: 1;
                }
            }
        }
    }

    li+li{
        margin-left: 48px;
    }
    a{
        color: ${(props) => props.theme.colors.colorSecondary};
        position: relative;
        text-decoration: none;
        font-size: 24px;
        font-weight: 600;
        transition: all 0.3s ease-in;
        &:before{
            content: '';
            position: absolute;
            width: 24px;
            height: 3px;
            left: 0;
            right: 0;
            bottom: -11px;
            margin: 0 auto;
            opacity: 0;
            transition: all 0.3s ease-in;
            background-color: ${(props) => props.theme.colors.colorActiveTwo};
        }
        &:hover{
            color: ${(props) => props.theme.colors.colorActiveTwo};
            &:before{
                opacity: 1;
            }
        }
    }

    @media (max-width: 991px) { 
     
        ul{
            li+li{
                margin-left: 30px;
            }
            a{
                font-size: 20px;
            }
        }
    }

`;

export default CourseFilterWrapper;
