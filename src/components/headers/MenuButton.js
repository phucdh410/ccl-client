import styled from "styled-components"
import tw from "twin.macro"

const MenuButtonStyled = styled.button`
    ${tw`w-6 h-6 relative rotate-0 transition duration-300 ease-in-out lg:hidden cursor-pointer`}

    span {
        ${tw`block absolute h-[2px] w-full bg-white rounded opacity-100 left-0 rotate-0 transition ease-in-out duration-300`}
    }


    ${props =>
        !props.isOpen && `
    span:nth-child(1) {
        top: 2px;
      }
      
    span:nth-child(2) {
        top: 10px;
      }
      
    span:nth-child(3) {
        top: 18px;
    }
    `}

    ${props =>
        props.isOpen &&
        `
        span:nth-child(1) {
          top: 10px;
          transform: rotate(135deg);
        }
    
        span:nth-child(2) {
          opacity: 0;
        }
    
        span:nth-child(3) {
          top: 10px;
          transform: rotate(-135deg);
        }
    `}
`


export const MenuButton = ({isOpen, onToggle}) => {
    return <MenuButtonStyled isOpen={isOpen} onClick={onToggle}>
        <span/>
        <span/>
        <span/>
    </MenuButtonStyled>
}