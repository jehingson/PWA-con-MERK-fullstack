import React from "react"

export const Logo = props => {
  return (
    <svg
      width={246.228}
      height={126.802}
      viewBox="126.886 11.599 246.228 126.802"
      style={{
        background: "0 0",
      }}
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <linearGradient
          id="prefix__editing-gradow-gradient"
          x1={0}
          x2={1}
          y1={0.5}
          y2={0.5}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#d56cad" />
          <stop offset={1} stopColor="#d89e3f" />
        </linearGradient>
        <filter
          id="prefix__editing-gradow-filter"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feFlood
            floodColor="rgba(95.80952380952381%,94.8105168581832%,83.15543575920934%,0.797)"
            result="flood"
          />
          <feComposite
            operator="in"
            in2="SourceAlpha"
            in="flood"
            result="shadow"
          />
          <feOffset dx={-4} dy={-4} in="SourceGraphic" result="offset-1" />
          <feOffset dx={4} dy={4} in="shadow" result="offset-2" />
          <feMerge>
            <feMergeNode in="offset-2" />
            <feMergeNode in="offset-1" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#prefix__editing-gradow-filter)">
        <path
          d="M5.12-28.29l11.07.13 6.98-.19q.83 0 .83.7 0 1.28-4.03 7.55-4.03 6.28-7.01 10.95-2.98 4.67-2.98 5.63 0 .64 1.8.64 1.79 0 3.13-.54 1.35-.55 1.99-1.44 1.08-1.54 1.08-2.82 0-1.28-.25-2.5 0-.76 1.41-.89 3.32 0 4.41 1.85.83 1.48.83 3.01 0 3.46-2.81 5.19Q18.75.7 14.91.7L7.62.51 1.15.64Q0 .64 0-.16t2.08-4.19q2.08-3.39 4.19-6.4l2.11-3.01q5.38-8.45 5.73-9.12.35-.67.35-1.18 0-.9-1.85-.9-1.86 0-3.36.51-1.51.51-2.47 1.25-.96.74-1.66 1.5-1.28 1.41-1.28 1.8-.19.64-.7.64h-.07q-.89 0-.89-1.09 0-2.5 1.15-5.89l.45-1.15q.25-.9 1.34-.9zm27.46 4.16l-2.4.1q-.74.03-.74-.35 0-.39.38-.77 4.1-3.78 13.83-3.78 3.33 0 5.25.58l.64.19q.76.32.76.7 0 .32-.44.52-1.73.51-3.33 1.63-1.6 1.12-1.6 1.57l.38.44q2.05 1.16 3.17 3.65 1.12 2.5 1.25 4.42l.13 1.98q0 6.34-3.52 10.43-3.52 4.1-9.6 4.1-3.08 0-5.32-1.09t-3.29-2.46q-1.06-1.38-1.7-3.11-.77-2.36-.77-4.89t.87-5.09q.86-2.56 1.98-3.78 1.12-1.21 2.53-1.98 1.79-.96 2.88-.96 1.09 0 1.09.45l-.39.64q-1.4 1.66-2.01 4.35-.61 2.69-.61 4.77 0 2.08.51 4.13.51 2.04 1.15 3.04.64.99 1.48 1.5 1.21.77 2.56.77 1.34 0 2.62-1.06 1.28-1.05 1.86-2.78 1.15-3.2 1.15-6.59 0-5.38-2.72-8.32-2.72-2.95-8.03-2.95zm26.68 7.87l.07 1.6q0 .39.51.39 2.05-.19 3.58-1.06 1.54-.86 2.31-1.95 1.53-2.37 1.66-4.1l.07-.76q0-3.46-2.76-3.46-2.04 0-3.32 1.79-2.12 2.82-2.12 7.55zm13.96 8.52q0 2.43-1 4.25-.99 1.83-2.24 2.69-1.24.86-2.91 1.38-2.11.64-4.03.64-5.38 0-7.94-4.04-2.56-4.03-2.56-10.27 0-6.24 3.17-11.1 3.17-4.87 9.51-4.87 5.76 0 7.8 4.04.84 1.53.84 2.91 0 1.37-.13 2.17-.13.8-.9 2.4-.77 1.6-2.05 2.88-1.28 1.28-4.03 2.44-2.75 1.15-6.46 1.53-.51 0-.51.45 0 .58.41 1.7.42 1.12.93 1.88 1.41 1.8 4.16 1.8t4.67-1.8q1.03-.96 1.67-2.36.25-.52.67-.52.41 0 .67.71.26.7.26 1.09zM98.5-28.35q0 19.84.89 25.98 0 1.54-2.94 2.53-2.95.99-4.87.99T89.66.58q0-.39.2-.96 1.21-2.69 1.21-21.64 0-17.92-1.53-19.9l-.26-.38q-.38-.32-.38-.8 0-.48.7-.8.96-.58 3.42-1.16 2.47-.57 4.45-.57 1.99 0 1.99.89v.2q-.77 6.65-.96 16.19zm5.44 28.8q1.15-6.91 1.15-16.58 0-9.66-.58-12.54 0-.83 1.92-.83 2.95 0 3.91 2.24.06.19.32.19.25 0 .38-.13 1.98-2.05 6.14-2.05t6.6 2.11q2.43 2.12 2.43 6.15 0 2.43-.42 6.91-.41 4.48-.41 6.66 0 5.18 1.72 7.48.26.32.26.64 0 .84-1.79.84-7.94 0-7.94-7.04 0-2.69 1.22-7.49 1.21-4.8 1.21-7.3 0-5.12-4.22-5.12-2.05 0-3.1 1.22-1.06 1.21-1.19 2.78-.13 1.57-.13 5.92 0 6.66.45 11.59l.13 1.4q0 1.8-2.34 2.79-2.33.99-4.03.99-1.69 0-1.69-.83zm44.99-9.22q0 2.75-1.06 4.8-1.05 2.05-2.4 3.01-1.34.96-3.2 1.54-2.43.76-4.41.76-4.16 0-6.92-1.63-2.75-1.63-2.75-5.21 0-2.12 1.15-3.46 1.8-1.98 4.29-1.98.77 0 .77.7 0 .06-.29.99-.29.93-.29 2.34 0 1.41 1.12 2.49 1.12 1.09 2.72 1.09t2.56-.54q.96-.55 1.35-1.38.57-1.15.57-2.17 0-1.86-1.85-3.2-1.86-1.35-4.1-2.12-2.24-.76-4.09-2.56-1.86-1.79-1.86-4.48 0-4.6 2.91-6.91 2.91-2.3 7.91-2.3 2.17 0 4.57.61 2.4.6 2.4 2.04t-.48 2.66q-.48 1.22-1.18 1.22-.39 0-.51-.29-.13-.29-.45-.67-.32-.39-1.54-1-1.21-.6-2.08-.6-.86 0-1.15.03-.29.03-.99.19-.71.16-1.28.48-1.47.83-1.47 2.43 0 1.03.44 1.51.45.48.71.73.25.26.89.61t.9.48q.26.13 1.15.54.9.42 1.15.55 6.79 3.2 6.79 8.7zm1.6-16.19l.19-2.56q.06-.58.9-.58h2.24l-.26-5.12v-.25q0-1.47 2.24-2.82 2.24-1.34 4.1-1.34.57 0 .57.51v.06q-.25 1.73-.51 8.9 2.82 0 3.58-.13.77-.13.84-.13.44 0 .44.77t-.7 1.95q-.7 1.19-1.54 1.25h-2.68q-.07 2.18-.07 7.33t.1 8.48q.09 3.33.22 5.02.13 1.7.29 2.72.16 1.03.26 1.48.09.44.09.57 0 .64-.83.71-2.5 0-4.96-.71-2.46-.7-2.46-2.43 1.34-10.75 1.34-23.1-1.73 0-2.62.12h-.07q-.57 0-.7-.7z"
          fill="url(#prefix__editing-gradow-gradient)"
          transform="translate(167.898 98.745)"
        />
      </g>
      <style />
    </svg>
  )
}

