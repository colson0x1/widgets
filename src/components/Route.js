import { useEffect, useState } from 'react';

const Route = ({ path, children }) => {
  // we're going to create a piece of state, that essentially follows or tracks
  // whatever the value of window.location.pathname is
  // i.e We're essentially introducing a piece of state that is just has the
  // soul purpose of trying to get the Route component to rerender itself.
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      // Every single time, we console log, we get 4 copies of the Route component
      // and each of them is listening to the navigation event
      // console.log('Location Change');

      setCurrentPath(window.location.pathname);
    };

    // Listen to the event emitted by Link
    window.addEventListener('popstate', onLocationChange);

    // If we ever decide to stop showing the Route component on the screen,
    // we would want to make sure that we clean up this event listener
    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;
