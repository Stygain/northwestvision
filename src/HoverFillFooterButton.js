/** @jsx jsx */
import { jsx, css } from '@emotion/core';


function HoverFillVert(props) {
  const styling = css`
    ${'' /* border: 1px solid red; */}

    margin: 0px 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
      outline: none;

      display: block;
      padding: 8px 15px;

      position: relative;

      text-align: center;
      text-transform: uppercase;
      user-select: none;
      font-weight: 700;
      font-size: 16px;
      color: rgb(255, 255, 255);

      border: none;
      background-color: rgba(6, 66, 111, 0);

      overflow: hidden;

      cursor: pointer;

      transition: color 0.3s ease-in-out;
    }

    button span {
      position: relative;
      z-index: 1;
    }

    button:after {
      content: "";

      position: absolute;
      left: 0;
      bottom: 0;
      height: 10%;
      width: 100%;

      background: rgb(255, 255, 255);

      transition: all .3s ease-in-out;
    }

    button:hover {
      color: rgb(85, 85, 85);
    }

    button:hover:after {
      height: 100%;
    }
  `;

  return (
    <div css={styling}>
      <form action={props.link} target="_blank">
        <button>
          <span>
            {props.content}
          </span>
        </button>
      </form>
  	</div>
  );
}

export default HoverFillVert;
