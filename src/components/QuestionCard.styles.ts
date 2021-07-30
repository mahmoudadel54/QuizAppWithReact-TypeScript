import styled from "styled-components";

export const QSWrapper = styled.div`
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
background-color: orange;
/* margin: 20px; */
padding: 40px;
border-radius: 25px ;
/* .answers{
display: flex;
flex-direction: column;
align-items: center;
} */
/* .answers >div{
    padding: 10px;
}
.answers >div button{
    width: 300px;
    border-radius: 15px;
    min-width:100px;
    background-color : chartreuse;
    font-size: medium;
} */
`
type ButtonWrapperProps = {
    correct:boolean;
    userClicked:boolean;
}
export const ButtonWrapper = styled.div<ButtonWrapperProps>`
transition: all 0.3s ease;
:hover{
opacity: 0.8;
}

button{
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({correct, userClicked})=>
correct? 'linear-gradient(90deg, #56ffa4,#59bc86)':
!correct&&userClicked?
'linear-gradient(90deg, #ff5656,#c16868)':
'linear-gradient(90deg, #56ccff,#6eafb4)'
};
border:3px solid #fff;
box-shadow: 1px 2px 0px rgba(0,0,0,.1);
border-radius: 10px;
color:white;
text-shadow: 0px 1px 0px rgba(0,0,0,.2);
}

`