import React from "react";

export default function () {
  return (
    <figure className="donutChart">
      <figcaption className="figure-key">
        <div className="key">
        <ul className="figure-key-list" aria-hidden="true" role="presentation">
          <li>
            <span className="shape-circle shape-light-blue"></span> Benjamin
            claim in 70
          </li>
          <li>
            <span className="shape-circle shape-dark-blue"></span> Jasmine claim
            in 68
          </li>
        </ul>
        </div>
      </figcaption>
      <div className="donut">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 42 42"
        className="donut"
        aria-labelledby="beers-title beers-desc"
        role="img"
      >
        <circle
          className="donut-hole"
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="#fff"
          role="presentation"
        ></circle>
        <circle
          className="donut-ring"
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke="#d2d3d4"
          strokeWidth="3"
          role="presentation"
        ></circle>

        <circle
          className="donut-segment"
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke="#437CF8"
          strokeWidth="3"
          strokeDasharray="50 0"
          strokeDashoffset="25"
          aria-labelledby="donut-segment-1-title donut-segment-1-desc"
        ></circle>
        <circle
          className="donut-segment"
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke="#090CBD"
          strokeWidth="3"
          strokeDasharray="70 65"
          strokeDashoffset="65"
        ></circle>

        <g className="chart-text">
          <text x="50%" y="50%" className="chart-label2">
            Estimated Household
          </text>
          <text x="50%" y="50%" className="chart-label">
            Annual Income
          </text>
          <text x="50%" y="50%" className="chart-number">
            10
          </text>
        </g>
      </svg>
      </div>
    </figure>
  );
}
