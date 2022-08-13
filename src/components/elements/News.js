import React, {useEffect, useState, useRef, useCallback} from "react";
import './News.css'
const newsItems = [{
        key: "Bangalore",
      },
      {
        key: "Pune",
      },
      {
        key: "Delhi",
      },
      {
        key: "New York",
      },
      {
        key: "Dubai",
      },
      {
        key: "Germany",
      },
      {
        key: "Bangkok",
      },
      {
        key: "UK",
      }];

const Element = (props) => {
  const {title} = props;
  
  return (
    <div className="element">{title}</div>
  )
}

const News = () => {
  const [items, setItems] = useState(newsItems);
  const [animationRunning, setAnimationRunning] = useState(false);
  const wrapperRef = useRef();
  const indexRef = useRef();
  
  const handleRefUpdate = useCallback(node => {
    if (node !== null && items.length > 0) {
      indexRef.current = node.firstChild;
      wrapperRef.current = node;
      document.documentElement.style.setProperty('--animationDistance', `${0 - indexRef.current.offsetWidth}px`);
      document.documentElement.style.setProperty('--animationDuration', `${Math.round(indexRef.current.offsetWidth / 33)}s`);
      wrapperRef.current.classList.add('moving');
    }
  }, [items]);
  
  const handleLoop = () => {
    wrapperRef.current.classList.remove('moving');
    wrapperRef.current.style.animation = 'none';
    const t = wrapperRef.current.offsetHeight; /* trigger reflow */
    wrapperRef.current.style.animation = null;
    shiftNext([...items]);
  };

  const shiftNext = (copy) => {
    const firstitem = copy.shift();
    copy.splice(copy.length, 0, firstitem);
    setItems(copy);
  };
  
  const handleAnimationEnd = () => {
    handleLoop();
  }
  
  return (
    <div className="root2">
         <div className="wrapper2">
      <div className="inner" ref={handleRefUpdate} onAnimationEnd={handleAnimationEnd}>
        {items.map((obj, index) => <Element title={obj.key} key={obj.key+index} />
        )} 
      </div>
    </div>

    </div>
   
  )
}
export default News