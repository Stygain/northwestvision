/** @jsx jsx */
import { jsx, css } from '@emotion/core';


function ProgressDots(props) {
  const styling = css`
    ${'' /* border: 1px solid blue; */}

    width: 100%;
    position: absolute;
    bottom: 10px;
    height: 40px;
    z-index: 3;

    .dot-container {
      ${'' /* border: 1px solid green; */}

      margin: 0 auto;
      width: 100px;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }

    .dot-container .outer-dot {
      ${'' /* border: 1px solid red; */}

      padding: 5px;
      cursor: pointer;
      transition: transform 0.3s;
    }

    .dot-container .dot {
      border-radius: 100%;
      width: 10px;
      height: 10px;

      transition: color 0.4s ease-in-out;
      transition: background-color 0.4s ease-in-out;
      background-color: ${props.accentColor};
    }

    .outer-dot:hover {
      transform: scale(1.3);
    }

    .outer-dot:nth-child(${props.current + 1}) {
      ${'' /* border: 4px solid orange; */}

      transform: scale(1.7);
    }
  `;
  return (
    <div css={styling}>
      <div className="dot-container">
        {props.data.map((data, index) => {
          return (
            <div
              className="outer-dot"
              key={index}
              onClick={() => {
                props.setCurrent(index)
            }}>
              <div className="dot"></div>
            </div>);
        })}
      </div>
    </div>
  );
}

export default ProgressDots;
