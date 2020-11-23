import React from "react";
import {
 ResponsiveContainer,
Line,
LineChart, XAxis, ReferenceLine, CartesianGrid
} from 'recharts';
import dayjs from 'dayjs';
import { calculateBiorhythmSeries } from '../calculations';
import './BiorythmChart.css';

function formatDate(isoString) {
    return dayjs(isoString).format("D MMM");
}

function BiorhythmChart({ birthDate, targetDate }) {
    const startDate = dayjs(targetDate).toISOString();
    const data = calculateBiorhythmSeries(birthDate, startDate, 31) 
        .map((item) => ({ ...item, date: formatDate(item.date)}));
    return (
        <ResponsiveContainer className="Biorythm-chart" width="100%" height={200}>
            <LineChart data={data}>
            <ReferenceLine x={data[15].date}/>
                <CartesianGrid vertical={false} strokeDasharray="3 3"/>
               <XAxis dataKey="date" ticks={[data[3].date, data[15].date, data[27].date]} />
                <Line dot={false} className="physical" type="natural" dataKey="physical"/>
                <Line dot={false} className="emotional" type="natural"  dataKey="emotional"/>
                <Line dot={false} className="intellectual" type="natural"  dataKey="intellectual" />
            </LineChart>
        </ResponsiveContainer>

    );
}

export default BiorhythmChart;