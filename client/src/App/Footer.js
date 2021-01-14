import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa'
import styled from 'styled-components'

const Footer = () => {

    return(
        <StyledFooter className="ui two column centered grid">
            <div className="one column centered row">
              <StyledFooterColumn className="column">
                <h3 style={{ "text-align": "center" }}>Contact</h3>
                <h5 style={{ "text-align": "center" }}>Magmoth@moth.com</h5>
              </StyledFooterColumn>
            </div>
            <div className="four column centered row">
              <StyledFooterColumn className="column">
                <a style={{ "text-align": "center" }} href='https://www.instagram.com/magalimdemers/' >
                  <FaInstagram className="footer-icon" size='2em' style={{ margin: '0em -22em -.35em 0em' }} />
                </a>
              </StyledFooterColumn>
              <StyledFooterColumn className="column">
                <a href='https://www.facebook.com/Magali-Moth-1121660184676639/?hc_ref=ARSNDlA8XeY2SEv_y3LoYaSIWVBcyPPLtJq31T9Ex-8Ey3N_h7W-Ao1fkqa9u_ks3JQ&fref=nf&__xts__[0]=68.ARBdsrumkto_ueHtwio3N0mRdR95ITrtURdpiUPjRUq4l67QPI2hNoBPxf9Z1545vENuc7fGxGu-fFxc3thKi96W3YLnI9peq96VK1tpT5ax-MXTEIbp8YpfnSXfEgIiXIsCl1FBA4_i9kmSahL0VrRoOs8HUkK8s7wreQsDJudj3vgtDsjknvMgQnEYTYJ99dzcgpaM0SHvhtOuRjvmWNXqIRdw9NX53ZQGqAQF_XEDYVFiIQDVWSfWfIUjk7CFKnDt4w_jMfi17iftP9NVvuqiaR-I2kRmuBoZWmIXCPhpWC9qgsJ80LEhBgmdRaHkir5VoHhCUiTl_Kc3h6EJbK_aaK9njhsT8tHk_qga&__tn__=kC-R'>
                  <FaFacebook className="footer-icon" size='2em' style={{ margin: '0em 0em -.15em -22em', }} />
                </a>
              </StyledFooterColumn>
            </div>
          </StyledFooter>
    )
    
}


const StyledFooterColumn = styled.div`
  margin: 1em 0 1em 0;
  text-align: center !important;
  /* color: #9e85c7 !important; */
  /*Style Guide*/
  /* color: #e94c64;
  color: #f0c456;
  color: #499097; */
  color: #d2d1d6;
  /* color: #c5bccf;
  color: #dac7bc;
  color: #232119;
  color: #786b66; */
`


const StyledFooter= styled.div`
  background-image: linear-gradient(to bottom, rgb(0, 0, 0, .75), rgb(0, 0, 0, 1)) !important;
  padding: 1.5em 0 1.5em 0 !important;
  box-shadow: 0px 0px .7rem .1rem black!important;
  width: 100% !important;
  position: absolute;
  margin: 0 !important;
  bottom: 0;
  `

const StyledFooterItem = styled.div`
  justify-content: ${props => props.iconPlacement == "right" ? "flex-end" : "flex-start"} !important;
  margin: 25px !important;
`

export default Footer