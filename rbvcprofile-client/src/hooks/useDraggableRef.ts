import { useLayoutEffect, useRef } from "react";
import useDraggable from "./useDraggable";

const useDraggableRef = () => {
  const draggableRef1 = useRef<HTMLDivElement>(null);
  const draggableRef2 = useRef<HTMLDivElement>(null);
  const draggableRef3 = useRef<HTMLDivElement>(null);
  const draggableRef4 = useRef<HTMLDivElement>(null);
  const draggableRef5 = useRef<HTMLDivElement>(null);
  const draggableRef6 = useRef<HTMLDivElement>(null);
  const draggableRef7 = useRef<HTMLDivElement>(null);
  const draggableRef8 = useRef<HTMLDivElement>(null);
  const draggableRef9 = useRef<HTMLDivElement>(null);
  const draggableRef10 = useRef<HTMLDivElement>(null);

  const draggableRef1Current = draggableRef1.current;
  const draggableRef2Current = draggableRef2.current;
  const draggableRef3Current = draggableRef3.current;
  const draggableRef4Current = draggableRef4.current;
  const draggableRef5Current = draggableRef5.current;
  const draggableRef6Current = draggableRef6.current;
  const draggableRef7Current = draggableRef7.current;
  const draggableRef8Current = draggableRef8.current;
  const draggableRef9Current = draggableRef9.current;
  const draggableRef10Current = draggableRef10.current;

  const {
    registerElement,
    unregisterElement,
    handleMouseDown,
    handleMouseMove,
  } = useDraggable();

  useLayoutEffect(() => {
    if (draggableRef1Current) {
      registerElement(draggableRef1Current);
    }
    if (draggableRef2Current) {
      registerElement(draggableRef2Current);
    }
    if (draggableRef3Current) {
      registerElement(draggableRef3Current);
    }
    if (draggableRef4Current) {
      registerElement(draggableRef4Current);
    }
    if (draggableRef5Current) {
      registerElement(draggableRef5Current);
    }
    if (draggableRef6Current) {
      registerElement(draggableRef6Current);
    }
    if (draggableRef7Current) {
      registerElement(draggableRef7Current);
    }
    if (draggableRef8Current) {
      registerElement(draggableRef8Current);
    }
    if (draggableRef9Current) {
      registerElement(draggableRef9Current);
    }
    if (draggableRef10Current) {
      registerElement(draggableRef10Current);
    }
    return () => {
      if (draggableRef1Current) {
        unregisterElement(draggableRef1Current);
      }
      if (draggableRef2Current) {
        unregisterElement(draggableRef2Current);
      }
      if (draggableRef3Current) {
        unregisterElement(draggableRef3Current);
      }
      if (draggableRef4Current) {
        unregisterElement(draggableRef4Current);
      }
      if (draggableRef5Current) {
        unregisterElement(draggableRef5Current);
      }
      if (draggableRef6Current) {
        unregisterElement(draggableRef6Current);
      }
      if (draggableRef7Current) {
        unregisterElement(draggableRef7Current);
      }
      if (draggableRef8Current) {
        unregisterElement(draggableRef8Current);
      }
      if (draggableRef9Current) {
        unregisterElement(draggableRef9Current);
      }
      if (draggableRef10Current) {
        unregisterElement(draggableRef10Current);
      }
    };
  }, [
    registerElement,
    unregisterElement,
    draggableRef1Current,
    draggableRef2Current,
    draggableRef3Current,
    draggableRef4Current,
    draggableRef5Current,
    draggableRef6Current,
    draggableRef7Current,
    draggableRef8Current,
    draggableRef9Current,
    draggableRef10Current,
  ]);

  return {
    registerElement,
    unregisterElement,
    draggableRef1Current,
    draggableRef2Current,
    draggableRef3Current,
    draggableRef4Current,
    draggableRef5Current,
    draggableRef6Current,
    draggableRef7Current,
    draggableRef8Current,
    draggableRef9Current,
    draggableRef10Current,
    draggableRef1,
    draggableRef2,
    draggableRef3,
    draggableRef4,
    draggableRef5,
    draggableRef6,
    draggableRef7,
    draggableRef8,
    draggableRef9,
    draggableRef10,
  };
};

export default useDraggableRef;
