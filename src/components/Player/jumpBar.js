import React from 'react';

export default function jumpBar({Style}) {
  return (
    <svg viewBox="0 0 55 80" xmlns="http://www.w3.org/2000/svg" fill="#FFF" className={Style.barAnimation}>
      <g transform="matrix(1 0 0 -1 0 80)">
        <rect x="0" width="5" height="20" rx="3">
          <animate
            attributeName="height"
            begin="0s"
            dur="4.3s"
            values="20;45;57;80;64;32;46;45;64;23;66;13;44;56;34;34;2;25;76;69;10"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="5" width="5" height="50" rx="3">
          <animate
            attributeName="height"
            begin="0s"
            dur="2s"
            values="80;55;33;5;75;23;73;33;12;14;60;80"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="10" width="5" height="50" rx="3">
          <animate
            attributeName="height"
            begin="0s" dur="1.4s"
            values="50;34;78;23;56;23;34;76;80;54;21;50"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="15" width="5" height="50" rx="3">
          <animate
            attributeName="height"
            begin="0s" dur="1.4s"
            values="50;34;78;23;56;23;34;76;80;54;21;50"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="20" width="5" height="30" rx="3">
          <animate
            attributeName="height"
            begin="0s" dur="2s"
            values="30;45;13;80;56;72;45;76;34;23;67;30"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="25" width="5" height="30" rx="3">
          <animate
            attributeName="height"
            begin="0s" dur="1s"
            values="30;45;13;80;56;72;45;76;34;23;67;30"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="30" width="5" height="30" rx="3">
          <animate
            attributeName="height"
            begin="0s" dur="2.9s"
            values="30;45;13;80;56;72;45;76;34;23;67;30"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="35" width="5" height="30" rx="3">
          <animate
            attributeName="height"
            begin="0s" dur="2.3s"
            values="30;45;13;80;56;72;45;76;34;23;67;30"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="40" width="5" height="80" rx="3">
          <animate
            attributeName="height"
            begin="0s"
            dur="2s"
            values="80;55;33;5;75;23;73;33;12;14;60;80"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="45" width="5" height="80" rx="3">
          <animate
            attributeName="height"
            begin="0s"
            dur="2s"
            values="80;55;33;5;75;23;73;33;12;14;60;80"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="50" width="5" height="80" rx="3">
          <animate
            attributeName="height"
            begin="0s"
            dur="2s"
            values="80;55;33;5;75;23;73;33;12;14;60;80"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="55" width="5" height="80" rx="3">
          <animate
            attributeName="height"
            begin="0s"
            dur="2s"
            values="80;55;33;5;75;23;73;33;12;14;60;80"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </rect>

        
        
        
        
      </g>
    </svg>
  );
}
