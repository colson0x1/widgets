import React from 'react';

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    event.preventDefault();
    // change url without full page refresh
    window.history.pushState({}, '', href);

    // emit navigation event when user clicks on Link
    // i.e This communicates to the Route component that the URL has just changed
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
