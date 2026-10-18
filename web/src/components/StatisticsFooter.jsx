import React from 'react';

export default function StatisticsFooter() {
  return (
    <footer className="statistics-footer" role="contentinfo" aria-label="Product highlights">
      <div className="statistics-container">
        {/* Stat 1 */}
        <div className="stat-item anim-stat-1">
          <svg
            className="stat-icon"
            width="16"
            height="16"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Hexagon / shield of invariants */}
            <path
              d="M9 1.5L15.5 5.25V12.75L9 16.5L2.5 12.75V5.25L9 1.5Z"
              stroke="#FFFFFF"
              strokeOpacity="0.75"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
            <circle cx="9" cy="9" r="2" fill="#FFFFFF" fillOpacity="0.85" />
          </svg>
          <span className="stat-text">6 core engineering invariants</span>
        </div>

        {/* Stat 2 */}
        <div className="stat-item anim-stat-2">
          <svg
            className="stat-icon"
            width="16"
            height="16"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Three layered tiers / integrations */}
            <path
              d="M2.5 5L9 2L15.5 5L9 8L2.5 5Z"
              stroke="#FFFFFF"
              strokeOpacity="0.75"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
            <path
              d="M2.5 9.5L9 12.5L15.5 9.5"
              stroke="#FFFFFF"
              strokeOpacity="0.75"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
            <path
              d="M2.5 14L9 17L15.5 14"
              stroke="#FFFFFF"
              strokeOpacity="0.75"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
          </svg>
          <span className="stat-text">3 integration approaches</span>
        </div>

        {/* Stat 3 */}
        <div className="stat-item anim-stat-3">
          <svg
            className="stat-icon"
            width="16"
            height="16"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Open source license / code node */}
            <circle cx="9" cy="9" r="7" stroke="#FFFFFF" strokeOpacity="0.75" strokeWidth="1.3" />
            <path
              d="M9 5V9L11.5 11.5"
              stroke="#FFFFFF"
              strokeOpacity="0.75"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
            <circle cx="9" cy="9" r="1.5" fill="#FFFFFF" fillOpacity="0.85" />
          </svg>
          <span className="stat-text">Open-source · MIT licensed</span>
        </div>
      </div>
    </footer>
  );
}
