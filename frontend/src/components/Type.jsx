import React from "react";
import Typed from "typed.js";

function Type({ strings }) {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: strings,
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, [strings]);

  return (
    <div className="App flex align-left ">
      <span ref={el} />
    </div>
  );
}

export default Type;
