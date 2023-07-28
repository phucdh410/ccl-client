import { createGlobalStyle } from 'styled-components'
import  tw, { globalStyles } from 'twin.macro'

const GlobalStyles = createGlobalStyle(globalStyles, `
   /* Below animations are for modal created using React-Modal */
     .ReactModal__Overlay {
     transition: transform 300ms ease-in-out;
     transition-delay: 100ms;
     transform: scale(0);
   }
   .ReactModal__Overlay--after-open{
     transform: scale(1);
   }
   .ReactModal__Overlay--before-close{
     transform: scale(0);
   }

   @media screen and (max-width: 576px) {
    .slick-list {
      width: calc(100vw - 64px) !important;
      margin-top: 2rem;
    }
   }
   
`)

export default GlobalStyles