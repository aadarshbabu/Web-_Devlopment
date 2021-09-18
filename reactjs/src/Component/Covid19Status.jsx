// api https://data.covid19india.org/data.json to get data..
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'
import Covid19data from './covid19data';

function Covid19Status() {
    const [data, setData] = useState([]);

    async function getdata() {
        const res = await fetch('https://data.covid19india.org/data.json');
        if (res.status === 200) {
            let responceJson = await res.json();
            let { statewise } = responceJson;
            setData(statewise);
            console.log(data[0]);
        }
    }

    useEffect(() => {
        getdata();
    }, []);

    return (
        <>
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr className="table-info">
                            <th scope="col">#</th>
                            <th scope="col">State</th>
                            <th scope="col">Recovered</th>
                            <th scope="col">Confirmed</th>
                            <th scope="col">Active</th>
                        </tr>
                    </thead>
                    {data.map((obj, index) => {
                        return <Covid19data value={obj} index={index} key={index} />
                    })}
                </table>
            </div>
        </>
    )
}

export default Covid19Status
