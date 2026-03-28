import { useEffect, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";

import Marquee from "react-fast-marquee";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  if (percent >= 100) {
    setTimeout(() => {
      setLoaded(true);
      setTimeout(() => {
        setIsLoaded(true);
      }, 350);
    }, 200);
  }

  useEffect(() => {
    import("./utils/initialFX").then((module) => {
      if (isLoaded) {
        setClicked(true);
        setTimeout(() => {
          if (module.initialFX) {
            module.initialFX();
          }
          setIsLoading(false);
        }, 350);
      }
    });
  }, [isLoaded]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <>
      <div className="loading-header">
        <a
          href={`${import.meta.env.BASE_URL}#`}
          className="loader-title"
          data-cursor="disable"
        >
          AG
        </a>
        <div className={`loaderGame ${clicked && "loader-out"}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, index) => (
                <div className="loaderGame-line" key={index}></div>
              ))}
            </div>
            <div className="loaderGame-ball"></div>
          </div>
        </div>
      </div>
      <div className="loading-screen">
        <div className="loading-marquee">
            <Marquee>
            <span> AI / ML Engineer</span> <span>Computer Vision &amp; NLP</span>
            <span> Full-Stack ML</span> <span>Product-minded builder</span>
          </Marquee>
        </div>
        <div
          className={`loading-wrap ${clicked && "loading-clicked"}`}
          onMouseMove={(e) => handleMouseMove(e)}
        >
          <div className="loading-hover"></div>
          <div className={`loading-button ${loaded && "loading-complete"}`}>
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">
                  Loading <span>{percent}%</span>
                </div>
              </div>
              <div className="loading-box"></div>
            </div>
            <div className="loading-content2">
              <span>Welcome</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  let percent = 0;
  let interval: ReturnType<typeof setInterval> | undefined;

  const stop = () => {
    if (interval !== undefined) {
      clearInterval(interval);
      interval = undefined;
    }
  };

  // While the GLTF + decrypt + parse runs, creep 88 → 99 on a curve so the bar
  // never looks frozen (the real wait can be 10–40s on slow networks).
  const startWaitPhase = () => {
    const waitStart = Date.now();
    stop();
    interval = setInterval(() => {
      const elapsed = Date.now() - waitStart;
      const next = Math.min(
        99,
        Math.floor(88 + 11 * (1 - Math.exp(-elapsed / 5500)))
      );
      if (next > percent) {
        percent = next;
        setLoading(percent);
      }
    }, 200);
  };

  interval = setInterval(() => {
    if (percent < 55) {
      percent = Math.min(55, percent + 4 + Math.round(Math.random() * 4));
      setLoading(percent);
    } else if (percent < 88) {
      percent = Math.min(88, percent + 2 + Math.round(Math.random() * 3));
      setLoading(percent);
    } else {
      stop();
      startWaitPhase();
    }
  }, 120);

  function clear() {
    stop();
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      stop();
      interval = setInterval(() => {
        if (percent < 100) {
          percent++;
          setLoading(percent);
        } else {
          resolve(percent);
          stop();
        }
      }, 2);
    });
  }
  return { loaded, percent, clear };
};
