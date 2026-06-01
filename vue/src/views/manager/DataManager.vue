<template>
  <div class="dashboard-page">
    <div class="dashboard-stats">
      <div class="card stat-card stat-card-gold">
        <div class="stat-label">销售总额</div>
        <div class="stat-value">￥{{ data.count.total }}</div>
        <div class="stat-desc">平台累计营业额</div>
      </div>
      <div class="card stat-card stat-card-orange">
        <div class="stat-label">今日销售额</div>
        <div class="stat-value">￥{{ data.count.today }}</div>
        <div class="stat-desc">今日订单成交金额</div>
      </div>
      <div class="card stat-card stat-card-blue">
        <div class="stat-label">商品总数</div>
        <div class="stat-value">{{ data.count.goods }}</div>
        <div class="stat-desc">当前上架商品数量</div>
      </div>
      <div class="card stat-card stat-card-purple">
        <div class="stat-label">注册用户</div>
        <div class="stat-value">{{ data.count.user }}</div>
        <div class="stat-desc">平台用户规模增长</div>
      </div>
    </div>

    <div class="dashboard-charts">
      <div class="card chart-card">
        <div id="line" class="chart-box"></div>
      </div>
      <div class="card chart-card">
        <div id="pie" class="chart-box"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import request from '@/utils/request'
import * as echarts from 'echarts'

const data = reactive({
  count: {}
})

const lineOption = {
  title: {
    text: '近一周订单销售的趋势图',
    left: 'center',
    textStyle: {
      color: '#303133',
      fontSize: 18,
      fontWeight: 700
    }
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    left: 'left'
  },
  xAxis: {
    name: '日期',
    type: 'category',
    data: [],
    axisLine: {
      lineStyle: {
        color: '#d8d8d8'
      }
    },
    axisLabel: {
      color: '#7a7f87'
    }
  },
  yAxis: {
    name: '销售额（元）',
    type: 'value',
    splitLine: {
      lineStyle: {
        color: '#f0f0f0'
      }
    },
    axisLabel: {
      color: '#7a7f87'
    }
  },
  grid: {
    top: '20%',
    bottom: '10%',
    left: '12%',
    right: '6%'
  },
  series: [
    {
      data: [],
      type: 'line',
      smooth: true,
      symbolSize: 8,
      lineStyle: {
        width: 4,
        color: '#efbb1a'
      },
      itemStyle: {
        color: '#efbb1a'
      },
      areaStyle: {
        opacity: 0.8,
        color: 'rgba(239, 187, 26, 0.18)'
      },
      markPoint: {
        data: [
          { type: 'max', name: 'Max' },
          { type: 'min', name: 'Min' }
        ]
      },
      markLine: {
        data: [{ type: 'average', name: 'Avg' }]
      }
    }
  ]
}

const pieOption = {
  title: {
    text: '分类商品销售额统计',
    subtext: '比例图',
    left: 'center',
    textStyle: {
      color: '#303133',
      fontSize: 18,
      fontWeight: 700
    },
    subtextStyle: {
      color: '#a8abb2'
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c}元 ({d}%)'
  },
  legend: {
    top: 0,
    orient: 'vertical',
    left: 'left',
    textStyle: {
      color: '#7a7f87'
    }
  },
  color: ['#efbb1a', '#f08c5a', '#3ca6e7', '#44c6b5', '#7d72f2', '#ff6e7a'],
  series: [
    {
      name: '销售额',
      type: 'pie',
      center: ['50%', '60%'],
      radius: '50%',
      data: [],
      label: {
        show: true,
        formatter(param) {
          return param.name + ' (' + param.percent + '%)'
        }
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 18,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.18)'
        }
      }
    }
  ]
}

request.get('/count').then((res) => {
  data.count = res.data
})

// 等页面所有元素加载完成后再设置 echarts图表
onMounted(() => {
  // 折线图
  let lineDom = document.getElementById('line')
  let lineChart = echarts.init(lineDom)
  // 请求数据  初始化图表
  request.get('/selectLine').then((res) => {
    lineOption.xAxis.data = res.data.date
    lineOption.series[0].data = res.data.count
    lineChart.setOption(lineOption)
  })

  // 饼图
  let pieDom = document.getElementById('pie')
  let pieChart = echarts.init(pieDom)
  // 请求数据  初始化图表
  request.get('/selectPie').then((res) => {
    pieOption.series[0].data = res.data
    pieChart.setOption(pieOption)
  })
})
</script>

<style scoped>
.dashboard-page {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.dashboard-stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.stat-card {
  position: relative;
  overflow: hidden;
  min-height: 142px;
  padding: 22px;
}

.stat-card::after {
  content: '';
  position: absolute;
  top: -22px;
  right: -16px;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  opacity: 0.18;
}

.stat-label {
  color: #8a8f98;
  font-size: 14px;
}

.stat-value {
  margin-top: 18px;
  color: #303133;
  font-size: 34px;
  font-weight: 700;
}

.stat-desc {
  margin-top: 14px;
  color: #b3b6bc;
  font-size: 12px;
}

.stat-card-gold {
  border-color: #f5e4ac;
}

.stat-card-gold::after {
  background: #efbb1a;
}

.stat-card-orange::after {
  background: #f08c5a;
}

.stat-card-blue::after {
  background: #3ca6e7;
}

.stat-card-purple::after {
  background: #7d72f2;
}

.dashboard-charts {
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  gap: 14px;
}

.chart-card {
  padding: 18px;
}

.chart-box {
  height: 480px;
}
</style>
