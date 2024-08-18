<template>
  <div>
    <div id="bar" class="chart-container" style="width: 800px; height: 400px;"></div>
    <div id="pie" class="chart-container" style="width: 800px; height: 500px;"></div>
  </div>
</template>

<script>
import axios from 'axios';
import * as echarts from 'echarts';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'daohang4',
  data() {
    return {
      barChart: null,
      pieChart: null,
      barOption: {
        title: {
          text: 'Code Submission Frequency'
        },
        tooltip: {},
        legend: {
          data: ['Submissions']
        },
        xAxis: {
          data: [],
          axisLabel: {
            rotate: 20, // 旋转角度
            interval: 0 // 显示所有标签
          }
        },
        yAxis: {},
        series: [{
          name: 'Submissions',
          type: 'bar',
          data: [],
          itemStyle: {
            normal: {
              color: function (params) {
                var colorList = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae'];
                return colorList[params.dataIndex % colorList.length];
              }
            }
          }
        }],
        grid: {
          top: '20%'
        }
      },
      pieOption: {
        title: {
          text: 'Code Submission Distribution',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: []
        },
        series: [{
          name: 'Submissions',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          label: {
            formatter: '{b}: {d}%'
          }
        }],
        grid: {
          top: '20%'
        }
      }
    };
  },
  mounted() {
    this.initCharts();
    this.fetchPieData();
    this.fetchBarData();
  },
  methods: {
    initCharts() {
      this.barChart = echarts.init(document.getElementById('bar'));
      this.pieChart = echarts.init(document.getElementById('pie'));
    },
    fetchPieData() {
      axios.get("/api/get_pie_chart_data")
        .then(response => {
          const data = response.data.data;
          const legendData = Object.keys(data);
          const seriesData = legendData.map(key => ({
            name: key,
            value: data[key]
          }));
          
          // 更新饼图数据
          this.pieOption.legend.data = legendData;
          this.pieOption.series[0].data = seriesData;
          this.pieChart.setOption(this.pieOption);
        })
        .catch(error => {
          console.error('Error fetching pie chart data:', error);
        });
    },
    fetchBarData() {
      axios.get("/api/get_bar")
        .then(response => {
          const data = response.data.data;
          const legendData = Object.keys(data);
          const seriesData = legendData.map(key => ({
            name: key,
            value: data[key]
          }));
          
          // 更新柱状图数据
          this.barOption.xAxis.data = legendData;
          this.barOption.series[0].data = seriesData.map(item => item.value);
          this.barChart.setOption(this.barOption);
        })
        .catch(error => {
          console.error('Error fetching bar chart data:', error);
        });
    }
  }
};
</script>

<style>
.chart-container {
  margin-bottom: 100px; /* 增加间隔 */
}
</style>
