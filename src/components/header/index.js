// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Styled from 'styled-components'

import signatureBlack from './signature.1.0.0-black.png'
import signatureWhite from './signature.1.0.0-white.png'

import './index.css'

// const Header = ({ siteTitle }) => (
//   <header>
//     <div>
//       <h1 style={{ margin: 0 }}>
//         {/* <Link
//           to="https://martinbanks.com.au"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           Martin Banks
//         </Link> */}
//         <a
//           href="https://martinbanks.com.au"
//         >
//           Martin Banks
//         </a>
//       </h1>
//     </div>
//   </header>
// )

const theme = typeof window !== 'undefined' 
  ? (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark') 
    : 'dark'

const logoToUse = theme === 'light' ? signatureBlack : signatureWhite

const LogoImageWrapper = Styled.div`
  position: relative;
  width: 110%;
  height: auto;
  left: 50%;
  transform: translateX(-30%);
  background-size: contain;
  background-repeat: no-repeat;
  background-image: ${p => `url(${logoToUse})`};
`

const LogoImage = Styled.img`
  opacity: 0;
  width: 200px;
  max-width: 500px;
`

const Header = ({ siteTitle }) => (
  <header>

    <div className="headerElement">
      <div className="logo">

        <a href="https://martinbanks.com.au">
          <div className="logo__wrapper">

            <div className ="logo__box">
              <div className="logo__corner tl"></div>
              <div className="logo__corner tr"></div>
              <div className="logo__corner br"></div>
              <div className="logo__corner bl"></div>
            </div>

            {/* <div className="logo__imageWrapper"> */}
            <LogoImageWrapper>
              <LogoImage src={ logoToUse } />
            </LogoImageWrapper>
                {/* <img src="./files/images/signature.1.0.0-black.png" alt="Martin Banks signature logo" /> */}
            {/* </div> */}

          </div>
        </a>
      </div>
    </div>

    <div className="headerEndElement">
      <div className="forkMe"></div>
    </div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
