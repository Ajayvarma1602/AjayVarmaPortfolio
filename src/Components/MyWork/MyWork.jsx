import React, { useState } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  const [showMore, setShowMore] = useState(false);

  // Determine items to display based on show More state
  const displayedItems = showMore ? mywork_data : mywork_data.slice(0, 3);

  return (
    <div id='work' className='mywork'>
      <div className="title-box">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {displayedItems.map((work, index) => {
          return (
            <div key={index} className="mywork-item">
              <img src={work.w_img} alt={work.w_title} />
              <h3 className='work-title'>{work.w_title}</h3>
              <div className='button-container'>
              <a href={work.demo_link} target="_blank" rel="noopener noreferrer" className="demo-button">Demo</a>
              {index < 3 && <a href={work.code_link} target="_blank" rel="noopener noreferrer" className="extra-button">Code</a>}
            </div>
            </div>
          );
        })}
      </div>
      <div className="mywork-showmore" onClick={() => setShowMore(!showMore)}>
        <p>{showMore ? 'Show Less' : 'Show More'}</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;


