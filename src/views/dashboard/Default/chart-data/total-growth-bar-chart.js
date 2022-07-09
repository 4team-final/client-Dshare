// ===========================|| DASHBOARD - TOTAL GROWTH BAR CHART ||=========================== //
import { ThirteenMp } from '@mui/icons-material';
import { useState, useEffect } from 'react';
export const roomCnt = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0,
    nine: 0,
    ten: 0,
    eleven: 0,
    twelve: 0,
    thirteen: 0,
    fourteen: 0,
    fifteen: 0
};
export const chartData = {
    height: 480,
    type: 'bar',
    options: {
        chart: {
            id: 'bar-chart',
            stacked: true,
            toolbar: {
                show: true
            },
            zoom: {
                enabled: true
            }
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 0
                    }
                }
            }
        ],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '50%'
            }
        },
        xaxis: {
            type: 'category',
            categories: ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '01:00', '01:30']
        },
        legend: {
            show: true,
            fontSize: '14px',
            fontFamily: `'Roboto', sans-serif`,
            position: 'bottom',
            offsetX: 20,
            labels: {
                useSeriesColors: false
            },
            markers: {
                width: 16,
                height: 16,
                radius: 5
            },
            itemMargin: {
                horizontal: 15,
                vertical: 8
            }
        },
        fill: {
            type: 'solid'
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            show: true
        }
    },
    series: [
        {
            name: '1일',
            data: []
        },
        {
            name: '3일',
            data: []
        },
        {
            name: '7일',
            data: []
        }
    ]
};

export const chartData2 = {
    series: [
        {
            name: '1일',
            data: []
        },
        {
            name: '3일',
            data: []
        },
        {
            name: '7일',
            data: []
        }
    ],
    options: {
        chart: {
            height: 480,
            type: 'heatmap'
        },
        dataLabels: {
            enabled: false
        },
        colors: '#d3d3d3',
        xaxis: {
            type: 'category',
            categories: ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '01:00', '01:30']
        },
        plotOptions: {
            heatmap: {
                shadeIntensity: 0.5,
                radius: 0,
                useFillColorAsStroke: true,
                colorScale: {
                    ranges: [
                        {
                            from: 0,
                            to: 10,
                            name: '0~10',
                            color: '#00A100'
                        },
                        {
                            from: 11,
                            to: 20,
                            name: '11~20',
                            color: '#128FD9'
                        },
                        {
                            from: 21,
                            to: 40,
                            name: '21~40',
                            color: '#FFB200'
                        },
                        {
                            from: 41,
                            to: 100,
                            name: '41~100',
                            color: '#FF0000'
                        }
                    ]
                }
            }
        },
        title: {
            text: ''
        },
        grid: {
            padding: {
                right: 20
            }
        }
    }
};
