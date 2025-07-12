import React, { useEffect } from 'react'

const HomeFeed = (props) => {

  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const updateProgress = async () => {
    props.updateProgress(10);
    await wait(300);
    props.updateProgress(50);
    await wait(300);
    props.updateProgress(100);
  };

  useEffect(() => {    
    updateProgress();
  }, []);

  return (
    <div className="text-center">
      <img src="/images/img1.png" style={{height: "400px"}} alt="one piece"/>
      <h5 className="m-0 p-0">News Coo delivers news related to one piece characters and devil fruits.</h5>
    </div>
  )
}

export default HomeFeed