async function getData() 
{
    const response = await fetch("Popular_Baby_Names.csv");
    const data = await response.text();
    const rows = data.split("\n").slice(1);
    
    let names = [];
    let counts = [];
    let colors = [];

    rows.forEach((elem) => 
    {
        const row = elem.split(",");

        if (row[0] == "2021" && row[5] <= 5) 
        {
            names.push(row[3]);
            counts.push(row[4]);
            colors.push(`rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.7)`);
        }
    });

    const ctx = document.getElementById('myChart');
    new Chart(ctx, 
    {
        type: 'bar',
        data: 
        {
            labels: names,
            datasets: 
            [{
                label: 'Count',
                data: counts,
                backgroundColor: colors,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {scales: {y: {beginAtZero: false}}}
    });
}  

getData();