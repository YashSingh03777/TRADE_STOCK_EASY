import React, { useRef, useEffect } from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  Legend,
  Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  Legend,
  Tooltip
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      type: 'bar',
      label: 'Apple',
      backgroundColor: 'rgba(255, 99, 132, 0.7)',
      data: [172, 175, 180, 178, 185, 190, 195],
    },
    {
      type: 'bar',
      label: 'Microsoft',
      backgroundColor: 'rgba(54, 162, 235, 0.7)',
      data: [310, 315, 320, 318, 325, 330, 340],
    },
    {
      type: 'bar',
      label: 'Uber',
      backgroundColor: 'rgba(75, 192, 192, 0.7)',
      data: [45, 47, 50, 48, 51, 53, 55],
    },
    {
      type: 'bar',
      label: 'Yahoo Finance',
      backgroundColor: 'rgba(255, 206, 86, 0.7)',
      data: [30, 32, 31, 29, 30, 33, 34],
    },
  ],
};

const options = {
  plugins: {
    tooltip: {
      enabled: true,
      // Optional: change tooltip behavior here if needed
    },
  },
};

function triggerTooltip(chart) {
  const tooltip = chart?.tooltip;
  if (!tooltip) return;

  if (tooltip.getActiveElements().length > 0) {
    tooltip.setActiveElements([], { x: 0, y: 0 });
  } else {
    const { chartArea } = chart;

    tooltip.setActiveElements(
      [
        {
          datasetIndex: 0,
          index: 2,
        },
        {
          datasetIndex: 1,
          index: 2,
        },
      ],
      {
        x: (chartArea.left + chartArea.right) / 2,
        y: (chartArea.top + chartArea.bottom) / 2,
      }
    );
  }

  chart.update();
}

const ChartRef = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current?.chart;
    triggerTooltip(chart);
  }, []);

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
      <Chart ref={chartRef} type="bar" data={data} options={options} />
    </div>
  );
};

export default ChartRef;
