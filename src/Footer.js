/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import HoverFillFooterButton from './HoverFillFooterButton.js';

import GithubLogo from './assets/Logos/GitHub-Mark-Light-32px.png';

import FooterData from './data/Footer.json';


function Footer(props) {
  const styling = css`
    /* border: 1px solid red; */

    width: 100%;
    height: 130px;

    background-color: rgb(85, 85, 85);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    box-shadow: inset 1px 4px 9px -6px;

    .links, .socials {
      ${'' /* border: 1px solid blue; */}

      width: 100%;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    a {
      text-decoration: none;

      color: rgb(255, 255, 255);
    }

    .links a {
      text-decoration: none;
      color: rgb(37, 37, 37);
      background: linear-gradient(to bottom, rgb(34, 107, 0) 0%, rgb(34, 107, 0) 100%);
      background-position: 0 100%;
      background-repeat: repeat-x;
      background-size: 2px 2px;

      transition: color 0.2s ease-in-out;
    }

    .links a:hover {
      color: rgb(0, 0, 0);
      background: linear-gradient(to bottom, rgb(47, 148, 0) 0%, rgb(47, 148, 0) 100%);
      background-position: 0 100%;
      background-repeat: repeat-x;
      background-size: 2px 2px;
    }

    h2, h3 {
      /* border: 1px solid green; */

      font-family: 'Spartan', sans-serif;

      margin: 0;
      text-align: center;
    }

    h2 {
      font-size: 18px;
      width: 100%;
      margin: 5px 0px;
    }

    h2.title {
      margin-top: 10px;
    }

    h3 {
      font-size: 16px;

      padding: 3px 10px;
      margin: 2px 10px;
    }

    .linkedin {
      @import url("https://use.typekit.net/gej5mzo.css");
      font-family: myriad-pro, sans-serif;
      font-weight: 700;
      font-style: normal;
      font-size: 28px;
      text-align: center;
    }

    .github {
      ${'' /* border: 1px solid red; */}

      padding-top: 5px;
    }
  `;

  return (
    <div css={styling}>
      <h2 className="title">Site created by Adam Barton</h2>
      <div className='links'>
        {
          FooterData.websites.map((item) => {
            return (<HoverFillFooterButton
                      content={item.text}
                      link={item.link}
                      key={item.link} />);
          })
        }
      </div>
      <div className='socials'>
        <a className="github" href="https://github.com/Stygain"><img src={GithubLogo} alt="Github logo" /></a>
        <h3 className="linkedin"><a href="https://www.linkedin.com/in/adam-barton-a43151133">in</a></h3>
      </div>
    </div>
  );
}


export default Footer;
