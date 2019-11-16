import styled from 'theme';
import snow1 from "../../assets/images/snow1.png";
import snow2 from "../../assets/images/snow2.png";
import snow3 from "../../assets/images/snow3.png";

export const AppWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  
   $ease--out-quad: cubic-bezier(.25,.46,.450,.94);
  
  %on-top {
    z-index: 100;
    pointer-events: none;
  }
  
  .winter-snow {
    @extend %on-top;
    overflow: hidden;
    position: absolute;
    top: 0;
    z-index: -1;
    margin-right: -10%;
    height: 100%;
    width: 110%;
    max-width: 100%;
    background: ${props => props.theme.variables.colors.snowBackground};
  }
  
  .snow {
    @extend %on-top;
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    animation: falling linear infinite both;
    transform: translate3D(0,-100%,0);
      
    &--near {
      animation-duration: 10s;
      background-image: url(${snow1});
      background-size: contain;
      
      & + .snow--alt {
        animation-delay: 5s;
      }
    }
      
    &--mid {
      animation-duration: 20s;
      background-image: url(${snow2});
      background-size: contain;
      
      & + .snow--alt {
        animation-delay: 10s;
      }
    }
      
    &--far {
      animation-duration: 30s;
      background-image: url(${snow3}');
      background-size: contain;
      
      & + .snow--alt {
        animation-delay: 15s;
      }
    }
  }
        
  @keyframes falling {
    0% {
      transform: translate3D(-7.5%,-100%, 0);
    }
        
    100% {
      transform: translate3D(7.5%,100%, 0);
    }  
  }
`;

export const ContentWrapper = styled("div")`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 40px);
  margin-top: 40px;
  padding: 20px;
  overflow: auto;
`;
