import React, { useState, useEffect } from 'react';

const HomeFeed = (props) => {

  const [animation, setAnimation] = useState(false);

  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const updateProgress = async () => {
    await wait(300);
    props.updateProgress(10);
    await wait(300);
    props.updateProgress(30);
    await wait(300);
    props.updateProgress(50);
    await wait(300);
    props.updateProgress(70);
    await wait(300);
    props.updateProgress(100);
  };

  useEffect(() => {    
    updateProgress();

    // Trigger animation after mount
    setTimeout(() => {
      setAnimation(true);
    }, 200); // slight delay to ensure CSS transition
  }, []);

  return (
    <div className={`animation-circle ${animation?'animate':''}`}>
      <div className="text-center" style={{marginTop: "60px"}}>
        <img src="/images/home-feed-img.png" style={{height: "400px"}} alt="one piece"/>
        <h5 className="m-0 p-0">News Coo delivers news related to one piece characters and devil fruits.</h5>
      </div>
    </div>
  )
}

export default HomeFeed