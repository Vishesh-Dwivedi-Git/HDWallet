import React, { useState } from 'react';
import Texty from 'rc-texty';
import TweenOne from 'rc-tween-one';
import 'rc-texty/assets/index.css';

function AnimationTest() {
  const [show, setShow] = useState(true);

  const handleAnimationClick = () => {
    setShow(false);
    setTimeout(() => {
      setShow(true);
    }, 500);
  };

  return (
    <div className="text-center my-10">
      <button onClick={handleAnimationClick}>Trigger Animation</button>
      {show && (
        <div>
          <Texty className="title" type="mask-top">
            Welcome to Dev Wallet
          </Texty>
          <TweenOne
            className="combined-bar"
            animation={{ width: 0, x: 158, type: 'from', ease: 'easeInOutExpo', delay: 1000 }}
            style={{ width: '200px', height: '4px', backgroundColor: 'white', margin: '0 auto' }}
          />
          <Texty className="content" type="bottom" delay={1500}>
            Manage your Ethereum and Solana wallets securely.
          </Texty>
        </div>
      )}
    </div>
  );
}

export default AnimationTest;
