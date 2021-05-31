import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart1 = () => {
    const divRef = useRef(null)
    useEffect(() => {
        const myChart = echarts.init(divRef.current);
        const option = {
            grid: {
                left: px(40),
                top: px(40),
                right: px(40),
                bottom: px(40)
            },
            xAxis: {
                type: 'category',
                data: ['兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区'],
                axisLabel: {
                    formatter(val) {
                        if (val.length > 2) {
                            const array = val.split('')
                            array.splice(2, 0 , '\n')
                            return array.join('')
                        } else {
                            return val
                        }
                    }
                },
                axisLine: {
                    // 显示 x 轴的轴线
                    show: true,
                    lineStyle: {color: '#083B70'},
                },
                axisTick: {show: false}
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    // 显示 y 轴的轴线
                    show: true,
                    lineStyle: {color: '#083B70'}
                },
                splitLine: {show: false} // 不显示坐标轴分割线
            },
            series: [{
                data: [20, 79, 39, 48, 21, 10, 58, 56, 23],
                type: 'bar'
            }]
        }
        myChart.setOption(createEchartsOptions(option))
    }, [])
    return (
        <div className='管辖统计 bordered'>
            <h2>案发派出所管辖统计</h2>
            <div ref={divRef} className="chart" />
        </div>
    )
}
