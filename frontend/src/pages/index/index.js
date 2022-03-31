import React from 'react'
import './style.css'
import { Row, Col, Grid, Image, Layout } from 'antd';
import { Homepage } from './indexStyle';
import {GradientButton} from '../../components/gradientButton/GradientButton.js'
import { SemiHeader } from './indexStyle';
import landingPageIllustration from '../../images/landingPageIllustration.svg';
import landingPageIllustrationSmall from '../../images/landingPageIllustrationSmallScreen.svg';
import loanlyLogo from '../../images/loanlyLogo.svg';

const { Header, Footer, Sider, Content } = Layout;

const Home = () => {
  return (
    <Layout>
      <Content className='homepageContent'>
            <img className="logoHomepage" src={loanlyLogo} />
            <SemiHeader className='semiHeader'>
                Wszysto o kredycie hipotecznym <br></br>w jednym miejscu!
            </SemiHeader>
            <div className = 'homepageCTA'>
              <GradientButton to="/kalkulator">Oblicz ratę!</GradientButton>
            </div>
            <img className="illustrationHomepage" src={landingPageIllustration} />
            <img className="illustrationHomepageSmall" src={landingPageIllustrationSmall} />
      </Content>

      <Footer className='homepageFooter'>
        <img className="footerImage" src={loanlyLogo} />
      </Footer>
    </Layout>
  );
};

export default Home;