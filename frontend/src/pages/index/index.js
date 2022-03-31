import React from 'react'
import './style.css'
import { Layout } from 'antd';
import {GradientButton} from '../../components/gradientButton/GradientButton.js'
import { SemiHeader } from './indexStyle';
import landingPageIllustration from '../../images/landingPageIllustration.svg';
import landingPageIllustrationSmall from '../../images/landingPageIllustrationSmallScreen.svg';
import loanlyLogo from '../../images/loanlyLogo.svg';

const { Footer, Content } = Layout;

const Home = () => {
  return (
    <Layout>
      <Content className='homepageContent'>
            <img className="logoHomepage" src={loanlyLogo} alt="" />
            <SemiHeader className='semiHeader'>
                Wszystko o kredycie hipotecznym <br></br>w jednym miejscu!
            </SemiHeader>
            <div className = 'homepageCTA'>
              <GradientButton to="/kalkulator">Oblicz ratę!</GradientButton>
            </div>
            <img className="illustrationHomepage" src={landingPageIllustration} alt="" />
            <img className="illustrationHomepageSmall" src={landingPageIllustrationSmall} alt="" />
      </Content>

      <Footer className='homepageFooter'>
        <img className="footerImage" src={loanlyLogo} alt="" />
      </Footer>
    </Layout>
  );
};

export default Home;