import React, { useRef, useEffect } from "react";
import ReactDom from "react-dom";
import { useHistory } from "react-router-dom";
import { mount } from "auth/auth";

export default ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathName }) => {
        console.log("container noticed navigation", nextPathName);
        const { pathname } = history.location;
        if (pathname !== nextPathName) {
          history.push(nextPathName);
        }
      },
      onSignIn,
    });
    history.listen(onParentNavigate);
  }, [mount]);

  return <div ref={ref} />;
};
