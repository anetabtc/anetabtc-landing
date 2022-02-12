import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Links from "@docusaurus/core/lib/client/exports/Link";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Cards from '../components/landing';
import Cards2 from '../components/landing2';
import LandingSocials from '../components/LandingSocials';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (

    <header className={clsx('hero hero--primary kek1', styles.heroBanner)}>
      <div className="grid_label">
<div className="box1"><h1>Decentralized,<br /> On-Chain Wrapped Bitcoin.</h1>
<h5>Fully On-chain Bitcoin on Ergo and Cardano.</h5>
<div className="imgSet"><img src={'/imgphoto/discord.svg'} />
<img src={'/imgphoto/twitter.svg'} />
<img src={'/imgphoto/medium.svg'} />
<img src={'/imgphoto/telegramwh.svg'} /></div>

 </div>
<div className="box2"><img src={'/img/angel3.svg'} /></div>
      </div>
       
    </header>

  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`anetaBTC wallet`}
      description="Description will go into a meta tag in <head />">
      
          <HomepageHeader />
      <main>
      <div className="ank">
      <img src={'/light/bubble.svg'}  width="400px" height="302px" className="ank4"/>
      <img src={'/light/bubble.svg'}  width="350px" height="252px" className="ank5"/></div>
 <div className="textSh1">
<h1>Decentralized, On Chain BTC</h1><p>A protocol to unlock the value of Bitcoin on Ergo and Cardano</p>
 </div>
          <div className="section1"> 
        <div className="guides">
<div className="guide1"><div  className="imgSave">
<img src={'/img/f1.svg'}/> </div><p><h3>Wrap Bitcoin on Ergo and Cardano</h3></p><p>Guaranteed and verifiable through transparent and accessible smart contracts. </p>
 </div>
<div className="guide1"><div  className="imgSave">
<img src={'/img/f2.svg'} /></div><p><h3>Security and Privacy</h3></p><p>Leverage built-in privacy and security tools of the most decentralized blockchains. </p>
 </div>
<div className="guide1"> <div  className="imgSave">
<img src={'/img/f3.svg'} /></div><p><h3>Research-driven</h3></p><p>A meticulous approach, ensuring correctness with constant oversight and testing.</p>
</div>
        </div>
          </div>

          <div class="block3"></div>
          <div className="textSh3"><h1>Our partners</h1><p>A protocol to unlock the value of Bitcoin on Ergo and Cardano</p></div>
       <div className="section1"> 
        <div className="guides">
<div className="guide"><img src={'/imgphoto/ergodex.svg'} /></div>
<div className="guide"> <img src={'/imgphoto/kyberswap.svg'} /></div>
<div className="guide"><img src={'/imgphoto/minswap.svg'} /> </div>
        </div>
          </div>
          <div className="block2"> 
          <div className="textSh1"><h1>Join Our Community</h1><p>Chat with our team and community members as anetaBTC brings DeFi to Ergo and Cardano.</p></div>
          <LandingSocials />  </div><div className="bord1"></div>

<div class="block3"></div>

          
      </main>
<footer className="foot1">

<div className="grid_footer">

<div className="foot1"><img src={'/img/footerlogo.svg'} /><br />anetaBTC is a decentralized, secure protocol that allows users to unlck the value on thier Bitcoin on Ergo and Cardano.</div>

<div className="foot2"><ul><b>anetaBTC</b> 
<li><a href="/team" class="active">Team</a></li>
<li><a href="/users/123" class="active">Docs</a></li>
<li><a href="/users/123" class="active">News & Updates</a></li>
<li><a href="/users/123" class="active">FAQ</a></li>
<li><a href="/users/123" class="active">Tokenomics</a></li>
</ul></div>

<div className="foot3"><ul> <b>Resources</b>
<li><a href="/users/123" class="active">Media Kit</a></li>
<li><a href="/users/123" class="active">Litepaper</a></li>
<li><a href="/users/123" class="active">Privacy policy</a></li>
<li><a href="/users/123" class="active">Terms & Conditions</a></li>
</ul></div>

<div className="foot4"><ul> <b>Foundation</b>
<li><a href="/users/123" class="active">Hiring</a></li>
<li><a href="/users/123" class="active">Contact</a></li>

</ul></div>

<div className="foot5">
<div className="imgconf">
<img src={'/icons/discord.svg'} />
<img src={'/icons/twitter.svg'} />
<img src={'/icons/medium.svg'} />
<img src={'/icons/telegram.svg'} />
</div>

<b>

anetaBTC is a Singapore <br />based DAO.</b></div>
</div>



</footer>
    </Layout>
  );
}
