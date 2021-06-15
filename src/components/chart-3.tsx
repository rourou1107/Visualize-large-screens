import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';
export const Chart3 = () => {
    const divRef = useRef(null)
    useEffect(() => {
        const myChart = echarts.init(divRef.current)
        const option = {
            legend: {
                data: ['盗窃', '两抢', '诈骗', '醉驾', '故意杀人'],
                bottom: px(2),
                textStyle: {color: 'white'},
                itemWidth: px(30),
                itemHeight: px(16)
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#073E78'
                    }
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#073E78'
                    }
                },
                axisLabel: {
                    interval: 1
                }
            },
            grid: {
                left: px(55),
                top: px(20),
                right: px(40),
                bottom: px(90)
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter:  function (value) {
                        return value + '%';
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#073E78'
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#073E78'
                    }
                }
            },
            series: [
                {
                    name: '盗窃',
                    type: 'line',
                    stack: '总量',
                    data: [10, 20, 30, 40, 50, 60, 70]
                },
                {
                    name: '两抢',
                    type: 'line',
                    stack: '总量',
                    data: [20, 30, 40, 50, 60, 70, 90]
                },
                {
                    name: '诈骗',
                    type: 'line',
                    stack: '总量',
                    data: [30, 40, 50, 60, 70, 80, 90]
                },
                {
                    name: '醉驾',
                    type: 'line',
                    stack: '总量',
                    data: [40, 50, 60, 70, 80, 90, 100]
                },
                {
                    name: '故意杀人',
                    type: 'line',
                    stack: '总量',
                    data: [50, 60, 70, 80, 90, 100, 110]
                }
            ].map(obj => {
                return {
                    ...obj,
                    symbol: 'circle',
                    symbolSize: px(6),
                    lineStyle: {width: px(2)}
                }
            })
        }
        myChart.setOption(createEchartsOptions(option))
    }, [])
    return (
        <div>
            <div className='趋势分析 bordered'>
                <h2>案发趋势分析</h2>
                <div ref={divRef} className="chart" />
            </div>
        </div>
    )
}
