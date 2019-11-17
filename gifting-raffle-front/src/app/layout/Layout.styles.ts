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
    height: 100%;
    width: 100%;
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
  height: calc(100vh - 74px);
  margin-top: 74px;
  padding: 20px 0;
  overflow: auto;
`;


export const ChrimstansText = styled("p")`
  font-size: 4rem;
  color: ${props => props.theme.variables.colors.action};
  position: absolute;
  bottom: 5%;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  z-index: -1;
  animation: text-flicker 10s linear infinite;
  
  @keyframes text-flicker {
  0% {
    opacity:0.1;
    text-shadow: 0px 0px 29px ${props => props.theme.variables.colors.action};
  }
  
  2% {
    opacity:1;
    text-shadow: 0px 0px 29px ${props => props.theme.variables.colors.action};
  }
  8% {
    opacity:0.1;
    text-shadow: 0px 0px 29px ${props => props.theme.variables.colors.action};
  }
  9% {
    opacity:1;
    text-shadow: 0px 0px 29px ${props => props.theme.variables.colors.action};
  }
  12% {
    opacity:0.1;
    text-shadow: 0px 0px ${props => props.theme.variables.colors.action};
  }
  20% {
    opacity:1;
    text-shadow: 0px 0px 29px ${props => props.theme.variables.colors.action}
  }
  25% {
    opacity:0.3;
    text-shadow: 0px 0px 29px ${props => props.theme.variables.colors.action}
  }
  30% {
    opacity:1;
    text-shadow: 0px 0px 29px ${props => props.theme.variables.colors.action}
  }
  
  70% {
    opacity:0.7;
    text-shadow: 0px 0px 29px ${props => props.theme.variables.colors.action}
  }
  
  72% {
    opacity:0.2;
    text-shadow:0px 0px 29px ${props => props.theme.variables.colors.action}
  }
  
  77% {
    opacity:.9;
    text-shadow: 0px 0px 29px ${props => props.theme.variables.colors.action}
  }
  100% {
    opacity:.9;
    text-shadow: 0px 0px 29px ${props => props.theme.variables.colors.action}
  }
}
`;
