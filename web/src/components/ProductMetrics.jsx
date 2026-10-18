import React from 'react';

export default function ProductMetrics() {
  const metrics = [
    {
      value: '06',
      label: 'Core Invariants',
      detail: 'Hard engineering rules that gate completion'
    },
    {
      value: '03',
      label: 'Integration Approaches',
      detail: 'Portable Skills · Native Antigravity · OpenCode'
    },
    {
      value: 'MIT',
      label: 'Open-Source Project',
      detail: 'Permissive license with verifiable source code'
    },
    {
      value: 'v0.1',
      label: 'Research Preview',
      detail: 'Measured on synthetic fixtures with full evidence'
    }
  ];

  return (
    <section className="arch-metrics-section" aria-label="Project Summary and Specifications">
      <div className="arch-metrics-container">
        <div className="arch-metrics-grid">
          {metrics.map((item, index) => (
            <div key={index} className="arch-metric-col">
              <div className="arch-metric-header">
                <span className="arch-metric-value">{item.value}</span>
                <span className="arch-metric-index">[{String(index + 1).padStart(2, '0')}]</span>
              </div>
              <div className="arch-metric-label">{item.label}</div>
              <div className="arch-metric-detail">{item.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
