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
            height: 450,
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
                            to: 20,
                            name: '0~20',
                            color: '#00A100'
                        },
                        {
                            from: 21,
                            to: 40,
                            name: '21~40',
                            color: '#128FD9'
                        },
                        {
                            from: 41,
                            to: 60,
                            name: '41~60',
                            color: '#FFB200'
                        },
                        {
                            from: 61,
                            to: 150,
                            name: '61~150',
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

export const chartData3 = {
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
            height: 350,
            type: 'line',
            dropShadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 0.2
            },
            toolbar: {
                show: false
            }
        },
        colors: ['#77B6EA', '#545454', '#545454'],
        dataLabels: {
            enabled: true
        },
        stroke: {
            curve: 'smooth'
        },
        title: {
            text: '',
            align: 'left'
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            }
        },
        markers: {
            size: 1
        },
        xaxis: {
            categories: [],
            title: {
                text: ''
            }
        },
        // yaxis: {
        //     title: {
        //         text: ''
        //     },
        //     min: 5,
        //     max: 40
        // },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
        }
    }
};
