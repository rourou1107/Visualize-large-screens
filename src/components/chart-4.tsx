import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts'
import {px} from '../shared/px';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart4 = () => {
    const divRef = useRef(null)
    useEffect(() => {
        const myChart = echarts.init(divRef.current)
        const option = {
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['02', '04',  '06', '08', '10', '12', '14', '16', '18', '20', '22', '24'],
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
                }
            },
            grid: {
                left: px(55),
                top: px(20),
                right: px(40),
                bottom: px(60)
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
                    data: [15, 14, 13, 14, 15, 18, 25, 27, 26, 25, 21, 14],
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#414a9f'
                        }, {
                            offset: 1,
                            color: '#1b1d52'
                        }]),
                    }
                },
            ]
        }
        myChart.setOption(createEchartsOptions(option))
    }, [])
    return (
        <div className='案发时段 bordered'>
            <h2>案发时段分析</h2>
            <div className="chart" ref={divRef}>

            </div>
        </div>
    )
}
