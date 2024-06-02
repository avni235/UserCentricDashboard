import React from 'react';
import Plot from 'react-plotly.js';

const LineChart = ({ data }) => {
  const timestamps = data.map(alert => new Date(alert.timestamp));
  const alertCounts = data.map((_, index) => index + 1);

  const trace = {
    x: timestamps,
    y: alertCounts,
    type: 'scatter',
    mode: 'lines',
    line: {
      color: '#AA336A',
    },
  };

  return (
    <div className="bg-grey p-6 rounded-lg shadow-lg backdrop-blur-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Alerts Over Time</h2>
      <div className="chart-container" style={{ margin: 'auto', maxWidth: '600px' }}>
        <Plot
          data={[trace]}
          layout={{
            title: '',
            template: 'plotly_dark',
            paper_bgcolor: 'rgba(0,0,0,0)',
            plot_bgcolor: 'rgba(0,0,0,0)',
            responsive: true,
            font: {
              //color: '#fff',
            },
            xaxis: {
              title: 'Time',
              tickfont: {
                size: 12,
                //color: '#fff',
              },
              gridcolor: '#444',
            },
            yaxis: {
              title: 'Alert Count',
              tickfont: {
                size: 12,
                //color: '#fff',
              },
              gridcolor: '#444',
            },
            autosize: true,
          }}
        />
      </div>
    </div>
  );
};

export default LineChart;
