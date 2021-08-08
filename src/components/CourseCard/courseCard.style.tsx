
import styled from 'styled-components';

const CourseCardWrapper = styled.div`
    position: relative;
    border-radius: 24px;
    margin-bottom: 60px;
   .course--info{
       position: absolute;
       top: 42px;
       left: 42px;
        h5{
            font-family: ${(props) => props.theme.fonts.body};
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            margin-bottom: 12px;
            color: ${(props) => props.theme.colors.white};
        }
        p{
            font-family: ${(props) => props.theme.fonts.body};
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 29px;
            color: ${(props) => props.theme.colors.white};
        }
   }
   .course--duration{
        position: absolute;
        top: 42px;
        right: 96px;
        font-family: ${(props) => props.theme.fonts.body};
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        color: ${(props) => props.theme.colors.white};
   }

   .course--play--btn{
        position: absolute;
        width: 84px;
        height: 75px;
        left: 42px;
        bottom: 64px;
        background: rgba(255, 255, 255, 0.4);
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        svg{
            color: ${(props) => props.theme.colors.white};
        }
   }

    @media (max-width: 991px) { 
        margin-bottom: 20px;
        .course--info{
            top: 10px;
            left: 23px;
            h5{
                font-size: 17px;
                margin-bottom: 0px;
            }
            p{
                font-size: 13px;
                line-height: 16px;
            }
        }
        .course--play--btn{
            width: 52px;
            height: 35px;
            left: 25px;
            bottom: 23px;
        }
        .course--duration{
            top: 14px;
            right: 25px;
            font-size: 15px;
        }

    }

`;

export default CourseCardWrapper;
