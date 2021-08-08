
import styled from 'styled-components';

const MainContentWrapper = styled.div`
    width: 100%;
    background-color:  ${(props) => props.theme.colors.bgPrimary};
    header{
        padding: 50px 90px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        h4{
            font-family: ${(props) => props.theme.fonts.body};
            font-style: normal;
            font-weight: 400;
            font-size: 48px;
            color:  ${(props) => props.theme.colors.black};
        }
    }
    .course--list{
        height: calc(100vh - 190px);
        overflow-y: scroll;
        overflow-x: hidden;
        padding: 0 90px;
    }
    @media (max-width: 991px) { 
        header{
            display: block;
            padding: 50px 20px 35px 20px;
            h4{
                font-size: 35px;
                margin-bottom: 20px;
            }
        }
        .course--list{
            padding: 0 20px;
        }
    }

`;

export default MainContentWrapper;
