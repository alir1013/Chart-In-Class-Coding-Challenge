const ctx= document.getElementById('barChart');
new Chart(
    ctx, {
        type:'bar', //Creating a Bar Chart
        data:{
          
            labels:["Red","Blue","Yellow"],
            datasets: [{
                label: "Votes",
                data: [40,57,25],
                borderWidth: 5,
                backgroundColor:[
                    '#FFB6C1', 
                    '#ADD8E6', 
                    '#FFFFE0'],
                borderColor: [
                        '#FFC0CB',
                        '#87CEFA',
                        '#F0E68C'  
                    ]
        }]
        }
    });
