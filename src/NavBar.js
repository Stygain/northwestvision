/** @jsx jsx */
import { jsx, css } from '@emotion/core';

// eslint-disable-next-line
import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { getCompressorShow } from './Redux/selectors.js';

import { NavLink } from 'react-router-dom';

import dataTypes from './data/dataTypes.json'


function NavBar(props) {
  const [ open, setOpen ] = useState(false);

  const compressorShow = useSelector(getCompressorShow);

  const [ prevScrollPos, setPrevScrollPos ] = useState(null);
  const [ showNavBar, setShowNavBar ] = useState(true);

  const styling = css`
    transition: top 0.3s;

    &.hide {
      top: -70px;
    }

    & {
      margin: 0px;
      padding: 0px;
      width: 100%;
      z-index: 1;
      position: fixed;
      top: 0px;
      font-family: 'Kaushan Script', cursive;
      background-color: rgb(255, 255, 255);

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    & a {
      text-decoration: none;
      color: #000;
    }

    & .title {
      margin: 0;
      margin-left: 35px;

      width: 350px;
      font-size: 40px;
      text-align: left;
      font-weight: 500;
    }

    & .navlist {
      margin: 0px;
      padding: 0px;
      width: 100%;
      background: rgb(255, 255, 255);
    }

    .navlist .home {
      display: none;
    }

    & .button-container {
      display: none;
    }

    .navlist ul {
      list-style-type: none;
      margin: 0;
      padding: 0;

      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }

    .navlist a {
      padding: 8px 12px;
      font-family: 'Oswald', cursive;
      font-size: 20px;
      color: rgb(166, 166, 166);
      transition: color 0.3s ease-in-out;
    }

    .navlist ul li a.active {
      color: #000;
    }

    .navlist ul li a:hover:not(.active) {
      color: #111;
    }

    @media (min-width: 1550px) {
      .navlist a {
        color: rgb(108, 108, 108);
        transition: color .4s ease;
        padding: 4px 6px;
        margin-bottom: 7px;
        position: relative;

        &:hover {
          color: rgb(0, 0, 0);

          &::after,
          &::before {
            width: 100%;
            left: 0;
          }

        }

        &::after,
        &::before {
          content: '';
          position: absolute;
          top: calc(85%);
          width: 0;
          right: 0;
          height: 2px;
        }

        &::before {
          transition: width .4s cubic-bezier(0.51, 0.18, 0, 0.88) .1s;
          background: rgb(136, 136, 136);
        }

        &::after {
          transition: width .2s cubic-bezier(0.29, 0.18, 0.26, 0.83);
          background: rgb(0, 0, 0);
        }
      }
    }

    @media (max-width: 1550px) {
      & .title {
        width: 100%;
        padding: 0;
        margin: 0;
        text-align: center;
        position: absolute;
        background: rgb(255, 255, 255);
        top: 0px;
      }

      .navlist {
        width: 100%;
        position: absolute;
        top: 59px;
        box-shadow: 0px 15px 10px rgba(33, 33, 33, 0.66);
        overflow: hidden;

        height: 0;
        transition: height 0.5s;
      }

      .navlist .home {
        display: block;
      }

      .navlist.open {
        height: auto;
        height: 540px;
      }

      .navlist ul {
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: stretch;
      }

      .navlist ul li a {
        padding: 0;
        display: block;
        text-align: center;
      }

      .navlist a {
        font-size: 30px;
      }

      & .button-container {
        background-color: rgb(244, 244, 244);
        border-radius: 5px;
        margin: 0;
        padding: 4px 8px;
        margin-right: 8px;
        font-size: 25px;
        margin-left: 0px;
        transition: background-color 0.5s;
        z-index: 10;
        width: 35px;
        cursor: pointer;
        display: block;
        color: #000;

        position: absolute;
        top: 0px;
        right: 0px;
        margin-top: 5px;
      }

      .button-container:hover {
        background-color: rgb(230, 230, 230);
      }

      .button-container.open {
        background-color: rgb(220, 220, 220);
      }

      .bar1.open {
        transform: translateY(1px) translateX(8.5px) rotate(-135deg) scaleX(0.8);
      }

      .bar2.open {
        transform: translateY(2px) translateX(0px) rotate(90deg) scaleY(1.2);
      }

      .bar3.open {
        transform: translateY(-20.5px) translateX(-8.5px) rotate(135deg) scaleX(0.8);
      }

      .button-container .button {
        display: inline-block;
        cursor: pointer;
      }

      .bar1, .bar2, .bar3 {
        width: 35px;
        height: 5px;
        background-color: #333;
        margin: 6px 0;
        transition: 0.4s;
      }
    }

    @media (max-width: 768px) {
      & .title {
        font-size: 32px;

        text-align: center;
        position: absolute;
        top: 0px;

        height: 55px;
      }

      .navlist {
        top: 47px;
      }

      .navlist ul li a {
        text-align: center;
      }

      & .button-container {
        position: absolute;
        top: 0px;
        right: 0px;
        margin-top: 5px;
      }
    }
  `;

  useEffect(() => {
      const handleScroll = () => {
        if (compressorShow) {
          setShowNavBar(true);
          return;
        }
        var currentScrollPos = window.pageYOffset;
        if (prevScrollPos === null) {
          setPrevScrollPos(currentScrollPos);
        } else {
          if (prevScrollPos > currentScrollPos) {
            setShowNavBar(true);
          } else {
            setShowNavBar(false);
          }
          setPrevScrollPos(currentScrollPos);
        }
      }

      window.addEventListener("scroll", handleScroll);

      return(() => window.removeEventListener("scroll", handleScroll));
    })

  return (
    <div css={styling} className={showNavBar ? "navbar" : "navbar hide"}>
      <NavLink
        className="title"
        to='/'
        onClick={() => {
          setOpen(false);
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }}>
        Northwest Vision
      </NavLink>
      <div className={open ? "button-container open" : "button-container"} onClick={() => {
        setOpen(!open);
      }}>
        <div className="hamburger-button">
          <div className={open ? "bar1 open" : "bar1"}></div>
          <div className={open ? "bar2 open" : "bar2"}></div>
          <div className={open ? "bar3 open" : "bar3"}></div>
        </div>
      </div>
      <div className={open ? "navlist open" : "navlist"}>
        <ul>
          <li className="navlink home" key="/">
            <NavLink exact to='/' onClick={() => {
              setOpen(!open);
              window.scrollTo({
                top: 0,
                behavior: "smooth"
              });
            }}>
              Home
            </NavLink>
          </li>
          {dataTypes["dataTypes"].map(({name, url}) => {
            return (<li className="navlink" key={url}>
              <NavLink exact to={url} onClick={() => {
                setOpen(!open);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
                });
              }}>
                {name}
              </NavLink>
            </li>);
          })}
        </ul>
      </div>
    </div>
  );
}


export default NavBar;
