import React from 'react'
import { Card } from 'antd'
import ReactEcharts from 'echarts-for-react';
import echartTheme from '@/lib/echartsTheme'
// import echarts from 'echarts'
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts'
// 引入饼图和折线图
import 'echarts/lib/chart/pie'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
export default class Bar extends React.Component {

    state={}

    componentWillMount(){
        echarts.registerTheme('Imooc',echartTheme);
    }

    getOption(){
        let option = {
          title : {
              text: '某站点用户访问来源',
              subtext: '纯属虚构',
              x:'center'
          },
          tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
              orient: 'vertical',
              left: 'left',
              data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
          },
          series : [
              {
                  name: '访问来源',
                  type: 'pie',
                  radius : '55%',
                  center: ['50%', '60%'],
                  data:[
                      {value:335, name:'直接访问'},
                      {value:310, name:'邮件营销'},
                      {value:234, name:'联盟广告'},
                      {value:135, name:'视频广告'},
                      {value:1548, name:'搜索引擎'}
                  ],
                  itemStyle: {
                      emphasis: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  }
              }
          ]
      };
        return option;
    }

    getOption2(){
        let option = {
          tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
              orient: 'vertical',
              x: 'left',
              data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
          },
          series: [
              {
                  name:'访问来源',
                  type:'pie',
                  radius: ['30%', '60%'],//环状半角
                  avoidLabelOverlap: false,
                  label: {
                      normal: {
                          show: false,
                          position: 'center'
                      },
                      emphasis: {
                          show: true,
                          textStyle: {
                              fontSize: '30',
                              fontWeight: 'bold'
                          }
                      }
                  },
                  labelLine: {
                      normal: {
                          show: false
                      }
                  },
                  data:[
                      {value:335, name:'直接访问'},
                      {value:310, name:'邮件营销'},
                      {value:234, name:'联盟广告'},
                      {value:135, name:'视频广告'},
                      {value:1548, name:'搜索引擎'}
                  ]
              }
          ]}
        return option;
    }

    render(){
        return (
            <div>
                <Card title="饼状图之一" >
                    <ReactEcharts option={this.getOption()} theme="Imooc" notMerge={true} lazyUpdate={true} style={{ height: 500 }} />
                </Card>
                <Card title="饼状图之二" style={{marginTop:10}} >
                    <ReactEcharts option={this.getOption2()} theme="Imooc" notMerge={true} lazyUpdate={true} style={{ height: 500 }} />
                </Card>
            </div> 
        );
    }
}