import {baseEchartsOptions} from './base-echarts-options';
import {px} from './px';

export const createEchartsOptions = (option) => {
    const result = {
        ...baseEchartsOptions,
        ...option
    }
    if (!(option?.xAxis?.axisLabel?.fontSize)) {
        option.xAxis = option.xAxis || {}
        option.xAxis.axisLabel = option.xAxis.axisLabel || {}
        option.xAxis.axisLabel.fontSize = px(12)
    }
    if (!(option?.yAxis?.axisLabel?.fontSize)) {
        option.yAxis = option.yAxis || {}
        option.yAxis.axisLabel = option.yAxis.axisLabel || {}
        option.yAxis.axisLabel.fontSize = px(12)
    }
    return result
}
