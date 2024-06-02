import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  const severities = Array.from(new Set(data.map(alert => alert.alert?.severity).filter(severity => severity !== undefined)));
  const severityCounts = severities.map(severity => data.filter(alert => alert.alert?.severity === severity).length);

  const chartData = {
    labels: severities.map(severity => `Severity ${severity}`),
    datasets: [
      {
        label: 'Alert Severities',
        data: severityCounts,
        backgroundColor: [
          '#A95C68',
          '#DAF7A6',
          /*'#4caf50',
          '#ffeb3b',
          '#9c27b0',
          '#ff5722',*/
        ],
        //borderColor: '#fff',
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="bg-grey p-6 rounded-lg shadow-lg backdrop-blur-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Alert Severities</h2>
      <Pie
        data={chartData}
        options={{
          responsive: true,
          aspectRatio: 3, // Set the aspect ratio to make the chart square
          plugins: {
            legend: {
              display: true,
              position: 'bottom',
              labels: {
                font: {
                  size: 14,
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart;
