export default function PaperDivider() {
  return (
    <div className="relative w-full overflow-hidden leading-none">
      <svg
        viewBox="0 0 1440 120"
        className="block h-[70px] w-full"
        preserveAspectRatio="none"
      >
        <path
          d="
            M0,20
            C40,50 80,0 120,20
            C160,40 200,10 240,20
            C280,30 320,60 360,35
            C400,10 440,20 480,30
            C520,40 560,5 600,20
            C640,35 680,45 720,25
            C760,5 800,40 840,30
            C880,20 920,0 960,20
            C1000,40 1040,50 1080,25
            C1120,0 1160,20 1200,35
            C1240,50 1280,15 1320,20
            C1360,25 1400,40 1440,20
            L1440,120
            L0,120
            Z
          "
          fill="#fffdf7"
          stroke="#181818"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
}