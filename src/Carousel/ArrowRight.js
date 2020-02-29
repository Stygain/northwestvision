/** @jsx jsx */
import { jsx, css } from '@emotion/core';


function ArrowRight(props) {
  const styling = css`
    &.button-container {
      ${'' /* border: 1px solid green; */}

      position: absolute;
      top: 48%;
      width: 40px;
      height: 40px;
      z-index: 3;

      cursor: pointer;
    }

    &.button-container.right {
      right: 10px;
    }

    .arrow {
      width: 25px;
      height: 8px;
      
      transition: color 0.4s ease-in-out;
      background-color: ${props.accentColor};
    }

    .arrow.top.right {
      transform: translateY(10px) translateX(7px) rotate(45deg);
    }

    .arrow.bot.right {
      transform: translateY(14px) translateX(7px) rotate(-45deg);
    }
  `;
  return (
    <div css={styling} className="button-container right" onClick={
      () => {
        props.setCurrent(props.current + 1)
      }
    }>
      <div className="arrow top right"></div>
      <div className="arrow bot right"></div>
    </div>
  );
}

export default ArrowRight;
