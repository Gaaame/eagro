import { useEffect, useState } from "react";

function LoadingIntro() {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);

      setTimeout(() => {
        setLoading(false);
      }, 700);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#061810]
        transition-all
        duration-700
        ${visible ? "opacity-100" : "opacity-0"}
      `}
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[30rem]
            w-[30rem]
            -translate-x-1/2
            -translate-y-1/2
            animate-pulse
            rounded-full
            bg-[#8BCF63]/10
            blur-3xl
            [animation-duration:4s]
          "
        />

        <div
          className="
            absolute
            -left-32
            top-1/4
            h-64
            w-64
            animate-pulse
            rounded-full
            bg-green-500/5
            blur-3xl
            [animation-duration:3s]
          "
        />

        <div
          className="
            absolute
            -right-32
            bottom-1/4
            h-64
            w-64
            animate-pulse
            rounded-full
            bg-[#F5B900]/5
            blur-3xl
            [animation-duration:5s]
          "
        />
      </div>

      {/* Decorative Dots */}
      <div
        className="
          absolute
          left-[15%]
          top-[25%]
          h-2
          w-2
          animate-ping
          rounded-full
          bg-[#8BCF63]/40
          [animation-duration:3s]
        "
      />

      <div
        className="
          absolute
          right-[18%]
          top-[30%]
          h-1.5
          w-1.5
          animate-pulse
          rounded-full
          bg-[#F5B900]/60
          [animation-duration:2s]
        "
      />

      <div
        className="
          absolute
          bottom-[25%]
          left-[25%]
          h-1.5
          w-1.5
          animate-pulse
          rounded-full
          bg-[#8BCF63]/30
          [animation-duration:4s]
        "
      />

      {/* Loading Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Logo Mark */}
        <div
          className="
            animate-entrance-scale
            relative
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-[24px]
            border
            border-[#8BCF63]/30
            bg-[#0B2116]
            shadow-2xl
            shadow-green-500/10
          "
        >
          {/* Outer Ring */}
          <div
            className="
              absolute
              -inset-2
              animate-spin
              rounded-[28px]
              border
              border-dashed
              border-[#8BCF63]/20
              [animation-duration:8s]
            "
          />

          {/* Leaf */}
          <svg
            viewBox="0 0 48 48"
            className="h-10 w-10 text-[#8BCF63]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.5 8.5C25.5 9.2 13.2 14.1 9.4 24.3C6.8 31.4 10.4 37.5 16.2 38.1C24.8 39 34.6 31.8 38.5 8.5Z"
              fill="currentColor"
              fillOpacity="0.18"
            />

            <path
              d="M38.5 8.5C25.5 9.2 13.2 14.1 9.4 24.3C6.8 31.4 10.4 37.5 16.2 38.1C24.8 39 34.6 31.8 38.5 8.5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="M10 38C16.2 27.8 23.2 21.7 33.8 15.7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Brand */}
        <div
          className="
            animate-entrance-up
            entrance-delay-300
            mt-8
          "
        >
          <h1
            className="
              text-3xl
              font-bold
              tracking-[-0.04em]
              text-[#F1F5EE]
            "
          >
            E-<span className="text-[#8BCF63]">Agro</span>
          </h1>

          <p className="mt-2 text-xs tracking-[0.2em] text-white/35">
            GROWING TOGETHER
          </p>
        </div>

        {/* Loading Bar */}
        <div
          className="
            animate-entrance-up
            entrance-delay-500
            mt-10
            w-48
          "
        >
          <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="
                h-full
                w-full
                origin-left
                animate-[loading_2s_ease-in-out_forwards]
                rounded-full
                bg-[#8BCF63]
              "
            />
          </div>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-[9px] uppercase tracking-[0.15em] text-white/25">
              Preparing
            </span>

            <span className="text-[9px] text-[#8BCF63]/60">E-AGRO</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingIntro;
