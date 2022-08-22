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
    data: [['2022-08-17T09:27:00.000Z', 1], ['2022-08-18T09:27:00.000Z', 2], ['2022-08-19T09:27:00.000Z', 3]]
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