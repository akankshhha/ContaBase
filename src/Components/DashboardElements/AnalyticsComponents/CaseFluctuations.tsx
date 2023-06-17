import {useQuery} from '@tanstack/react-query'

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts';

const CaseFluctuations = () => {
 
    const {data} = useQuery(['caseData'], async () => {
        const res = await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all");
        console.log(res);
        const result = res.json();
        return await result;
      },)

    const covidDataArray = data?.cases ? Object.entries(data.cases).map(([date, value]) => ({
        date: new Date(date).toISOString().slice(0, 10),
        cases: value
    })) : []

    const formatYaxis = (value: number) => {
        return `${(value / 10000000).toFixed(1)}M`
    }

    return (
        <div className="p-5 m-5 m-auto">
            <LineChart
                width={850}
                height={400}
                data={covidDataArray}>
                <XAxis dataKey="date" tick={{ fontSize: 10 }} />
                <YAxis tickFormatter={formatYaxis} tick={{ fontSize: 14 }} />
                <CartesianGrid stroke="#808080" strokeDasharray="3 3" strokeWidth="0.5" />
                <Line
                    type="monotone"
                    dataKey="cases"
                    stroke="#8884d8"
                    activeDot={{ r: 2 }}
                />
                <Tooltip label='Cases' />
                <Legend />
            </LineChart>
        </div>

    )
}

export default CaseFluctuations