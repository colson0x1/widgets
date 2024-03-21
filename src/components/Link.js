import React from 'react';

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    // on macOS, we make use of metaKey
    // on windows, we make use of ctrlKey
    // These are going to hold either true or false to indicate whether or not
    // respective keys are held down when user clicked on this thing
    if (event.metaKey || event.ctrlKey) {
      // We're going to allow the browser to just do its normal thing, which is
      // to open a new tab and navigate to href on this link
      // So if either those are true, we're going to return early
      return;
    }

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
