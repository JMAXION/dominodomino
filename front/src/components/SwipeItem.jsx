import React from 'react';

export default function SwipeItem({
  keyword,
  title,
  description,
  tag,
  img,
  background,
  fontColor,
  tagColor,
  tagBackground,
  isActive,
  index,
}) {
  const backgroundStyle = { backgroundColor: background };
  const fontStyle = { color: fontColor };
  const tagStyle = {
    color: tagColor,
    backgroundColor: tagBackground,
  };

  return (
    <li
      className={`swipe-item-wrapper ${
        isActive === index ? 'swipe-item-active' : ''
      }`}
      key={keyword}>
      <a className="swipe-item" style={backgroundStyle}>
        <div className="wrapper__swipe-item-contents">
         
            <div className="align-swipe-item-content">
              {tag && (
                <div className="wrapper__swipe-item-tag">
                  {tag.map(tag => (
                    <span
                      className="swipe-item-tag"
                      style={tagStyle}
                      key={Math.random()}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            
            </div>
            <img src={img} alt={keyword} />
          </div>
        
         
          
        
      </a>
    </li>
  );
}