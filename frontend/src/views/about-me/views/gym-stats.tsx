import React from "react"
import HighCharts from 'highcharts/highstock';
import HighchartsReact from "highcharts-react-official";

const options: HighCharts.Options = {
  title: {
    text: 'My chart'
  },
  series: [{
    name: 'Custom Series 2',
    type: 'line',
    data: [[1597930200000, 1], [1597930200032, 2], [1597930200043, 3]]
  },
  {
    name: 'Custom Series 1',
    type: 'line',
    data: [5, 6, 7]
  }
]
}

export const GymStats = () => {

  return (
    <div>
      <HighchartsReact 
        highcharts={HighCharts}
        constructorType={'stockChart'}
        options={options}
      />
    </div>
  )
}