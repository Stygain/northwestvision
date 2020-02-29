/** @jsx jsx */
import { jsx, css } from '@emotion/core';


function Footer(props) {
  const styling = css`
    & {
      /* border: 1px solid red; */

      width: 100%;
      height: 80px;

      background-color: rgb(85, 85, 85);

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    & .links {
      /* border: 1px solid blue; */

      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    & a {
      text-decoration: none;
      color: rgb(37, 37, 37);
      background: linear-gradient(to bottom, rgb(34, 107, 0) 0%, rgb(34, 107, 0) 100%);
      background-position: 0 100%;
      background-repeat: repeat-x;
      background-size: 2px 2px;

      transition: color 0.2s ease-in-out;
    }

    a:hover {
      color: rgb(0, 0, 0);
      background: linear-gradient(to bottom, rgb(47, 148, 0) 0%, rgb(47, 148, 0) 100%);
      background-position: 0 100%;
      background-repeat: repeat-x;
      background-size: 2px 2px;
    }

    & h2, & h3 {
      /* border: 1px solid green; */

      font-family: 'Spartan', sans-serif;

      margin: 0;
      text-align: center;
    }

    & h2 {
      font-size: 18px;
      width: 100%;
      margin: 5px 0px;
    }

    & h3 {
      font-size: 16px;

      padding: 3px 10px;
      margin: 2px 10px;
    }
  `;

  return (
    <div css={styling}>
      <h2>Site created by Adam Barton</h2>
      <div className='links'>
        <h3><a href='https://github.com/Stygain'>Github</a></h3>
        <h3><a href='https://stygain.github.io/css-loaders/'>Loaders</a></h3>
      </div>
    </div>
  );
}


export default Footer;
