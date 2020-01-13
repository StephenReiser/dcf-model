import React, {useEffect} from 'react'
import {useStockContext} from '../../context'
import { Line as LineChart } from 'react-chartjs-2'






const options = {
  scaleShowGridLines: true,
  scaleGridLineColor: 'rgba(0,0,0,.05)',
  scaleGridLineWidth: 1,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: true,
  bezierCurve: true,
  bezierCurveTension: 0.4,
  pointDot: true,
  pointDotRadius: 4,
  pointDotStrokeWidth: 1,
  pointHitDetectionRadius: 20,
  datasetStroke: true,
  datasetStrokeWidth: 2,
  datasetFill: true,
  legendTemplate: '<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
  elements: {
    point:{
        radius: 0
    }
}
}

const styles = {
  graphContainer: {
    border: '1px solid black',
    padding: '15px'
  }
}

const ChartTab = () => {
    const {chartData} = useStockContext()

    let myChartData = {
          labels: ( chartData && chartData.historical.map(price => {
            return price.date
          }) || ['January', 'February', 'March', 'April', 'May', 'June', 'July']),
          datasets: [
            {
              label: 'Closing Stock Price',
              fillColor: 'rgba(220,220,220,0.2)',
              strokeColor: 'rgba(220,220,220,1)',
              pointColor: 'rgba(220,220,220,1)',
              pointStrokeColor: '#fff',
              pointHighlightFill: '#fff',
              pointHighlightStroke: 'rgba(220,220,220,1)',
              data: (chartData && chartData.historical.map(price => {
                return price.close
              }) || [65, 59, 80, 81, 56, 55, 40])
            },
          //   {
          //     label: 'My Second dataset',
          //     fillColor: 'rgba(151,187,205,0.2)',
          //     strokeColor: 'rgba(151,187,205,1)',
          //     pointColor: 'rgba(151,187,205,1)',
          //     pointStrokeColor: '#fff',
          //     pointHighlightFill: '#fff',
          //     pointHighlightStroke: 'rgba(151,187,205,1)',
          //     data: [28, 48, 40, 19, 86, 27, 90],
          //   },
          ]
        }
      
    useEffect(() => {
        // myChartData() 
    }, [chartData])


      function testFunc(someDataSet) {

          const myChartData = someDataSet.historical.map(price => {
            return price.close
          })
          const myChartDates = someDataSet.historical.map(price => {
            return price.date
          })

          console.log(myChartData)
          console.log(myChartDates)
//         var shareholders = ['name1', 'name2', 'name3'];
// var users=new Array();
// shareholders.forEach(function(item,i){
//   users[i]=item;
// });
// console.log(users);
      }
    

    return (
        <>
            <button onClick = {() => testFunc(chartData)}> Test Button</button>
            <div style={styles.graphContainer}>
                <LineChart data={myChartData}
                options={options}
                width="600" height="250"/>
            </div>
        </>
    )

}

export default ChartTab