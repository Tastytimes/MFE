import React, { useRef, useEffect } from "react";
import ReactDom from "react-dom";
import { mount } from "marketing/Marketing";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, [mount]);

  return <div ref={ref} />;
};
