window.onload = () => {

    const loadchart = async function () {
       let covidData= await loadData()
    //    console.log(covidData.covidDate);
    //    console.log(covidData.covidCases);
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                // ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
                labels: covidData.covidDate ,
                datasets: [{
                    label: '# Covid 19',
                    //  [12, 19, 30, 35, 40, 32]
                    data: covidData.covidCases,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)'
                        // 'rgba(255, 100, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 0.5
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }

        });

        myChart // my chart is a object. when you call the obj/ 
        //  you only need to write the func..

    }


    const loadData = async function () {
        let date = Array()
        let cases = Array()
        const responce = await fetch('https://api.covid19api.com/dayone/country/india')

        const responceData = await responce.json()
        // console.log(responceData);

        responceData.forEach(element => {
            // console.log(element.Confirmed)
            // console.log(element.Date)
            date.push(element.Date)
            cases.push(element.Confirmed)
            // console.log(element)
        });

        const covidData = {
            covidDate: date,
            covidCases: cases
        };

        // console.log(covidData.covidDate);
        // console.log(covidData.covidCases);

        return covidData  
    }
    loadchart()

    const dayall= async function(){
        const country="india"
        url4 =`https://api.covid19india.org/v4/min/timeseries.min.json`
        url3=`https://api.covid19api.com/summary`
        url2 =`https://api.covid19api.com/country/${country}/status/confirmed/live?from=2020-03-01T00:00:00Z&to=2021-05-31T00:00:00Z`
        url1=`https://api.covid19api.com/dayone/country/${country}/status/confirmed/live`
       url=`https://api.covid19api.com/total/dayone/country/${country}`
        const responce= await fetch(url4);
        const data = await responce.json();
        console.log(data)
        // console.log(data.Countries[76]);
    }       
    // dayall();

}

