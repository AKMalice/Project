import React from "react";
import { Doughnut, Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'

export default function Analytics() {
  return (
    <div >
     <h2 style={{marginTop : 30, marginBottom:30}}>ANALYTICS</h2>
     <div style={{margin: 'auto', height: '500px' ,width: '800px'}}>
     <Line
  datasetIdKey='id'
  data={{
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Google Ads",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Facebook Ads",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774"
      },
      {
        label: "Youtube Ads",
        data: [30, 15, 50, 62, 61, 66],
        fill: false,
        borderColor: "#FF0000"
      }
    ]
  }}
/>
<h5 style={{marginTop:5,marginBottom:30}}>Revenue 2022</h5>
</div>

<div style={{margin: 'auto', height: '100px' ,width: '400px'}}>
<Doughnut
datasetIdKey="id"
data={{
  labels: [
    'Youtube',
    'Facebook',
    'Instagram'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255,0,0)',
      'rgb(54, 162, 235)',
      '	rgb(139,0,139)'
    ],
    hoverOffset: 4
  }]
}}/>
<h5 style={{marginTop:20,marginBottom:30}}> Cost Distribution</h5>
</div>

    </div>
  );
}
