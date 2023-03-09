import './Chart.css';
import ChartBar from './ChartBar';

const Chart = props => {

    const chartData = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ]

    let expenseMonth;
    for (const item of props.items) {

        expenseMonth = new Date(item.date).getMonth();
        chartData[expenseMonth].value += item.amount;
    }

    const dataValues = chartData.map(item => item.value);
    const totalMaximum = Math.max(...dataValues);

    // console.log('chartData: ', chartData);
    // console.log('props.items: ', props.items);
    return (
        <div className='chart'>
            {
                chartData.map((item) => {
                    return <ChartBar
                        key={item.label}
                        value={item.value}
                        maxValue={totalMaximum}
                        label={item.label}
                    />
                })
            }
        </div >
    )
}

export default Chart;