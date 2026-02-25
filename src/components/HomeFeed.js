import { useState, useEffect } from 'react';

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

    // eslint-disable-next-line
  }, []);

  return (
    <div className={`d-flex flex-column justify-content-center align-items-center min-vh-100 animation-circle ${animation?'animate':''}`} style={{padding: "40px"}}>
      <img className="img-fluid" src="/images/home-feed-img.png" alt="one piece"/>
      <h5 className="m-0 p-0 text-center fs-6 fs-md-5 fs-lg-4">News Coo delivers news related to one piece characters and devil fruits.</h5>
    </div>
  )
}

export default HomeFeed