

var selected = document.querySelector(".selected");
var consented = document.querySelector(".consented");
var collected = document.querySelector(".collected");
var decline = document.querySelector(".decline");
var declineConsent = document.querySelector(".declineConsent");
var NotCollected = document.querySelector(".Notcollected");
var progressBar = document.querySelector(".progress-bar");
var progressBarText = document.querySelector(".pText");
var tbody = document.querySelector(".reportTblBody");
var table= document.querySelector(".reportTbl");




let d1 = new Date();
let d2 = new Date(2022, 0, 24)

let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d1);
let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d1);
let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d1);

let ye2 = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d2);
let mo2 = new Intl.DateTimeFormat('en', { month: 'short' }).format(d2);
let da2 = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d2);


var date1 = `${da}/${mo}/${ye}`;
var date2 = `${da2}/${mo2}/${ye2}`;



jQuery.ajax({
    type: "GET",
    /*url: `/main/main_result?date1=${date2}&date2=${date1}`,*/
    url: `/pcs/main/main_result?date2=${date1}`,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (data) {
       

        

        selected.textContent = data[2].data;
        consented.textContent = data[0].data;
        collected.textContent = data[3].data;
        decline.textContent = data[4].data;
        declineConsent.textContent = data[1].data;
        NotCollected.textContent = data[5].data;

        var verifiedParticpants = Math.ceil(data[3].data / 4080 * 100);
      
        progressBar.textContent = `${verifiedParticpants}%`;
        document.querySelector("#pBar").style.width = `${verifiedParticpants}%`;
        progressBarText.textContent = `${verifiedParticpants}% verified participants`;
      
       // progressBar.
    }, //End of AJAX Success function  

    failure: function (data) {
        console.log(data.responseText);
    }, //End of AJAX failure function  
    error: function (data) {
        console.log(data.responseText);
    } //End of AJAX error function  

});


//monthly ajax call
jQuery.ajax({
    type: "GET",
    url: `/pcs/main/monthlySummary`,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (data) {
        let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d1);
        


        var selected = [];
        var consented = [];
        var sampleCollected = [];
        var MonthNames = [];

        data.forEach(e => {
           // if (e.Month_Name == "January") {
                selected.push(e.NumberOfParticipantsSelected);
                consented.push(e.Number_Of_Participants_Consented);
                sampleCollected.push(e.Number_Of_SamplesCollected);
                MonthNames.push(e.YearMonth);
       
        })

       





        //WidgetChart 1
        var ctx = document.getElementById("widgetChart1");
        ctx.height = 150;
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [...MonthNames],
                type: 'line',
                datasets: [{
                    data: [...selected],
                    label: 'selected',
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(255,255,255,.55)',
                },]
            },
            options: {

                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                responsive: true,
                scales: {
                    xAxes: [{
                        gridLines: {
                            color: 'transparent',
                            zeroLineColor: 'transparent'
                        },
                        ticks: {
                            fontSize: 2,
                            fontColor: 'transparent'
                        }
                    }],
                    yAxes: [{
                        display: false,
                        ticks: {
                            display: false,
                        }
                    }]
                },
                title: {
                    display: false,
                },
                elements: {
                    line: {
                        borderWidth: 1
                    },
                    point: {
                        radius: 4,
                        hitRadius: 10,
                        hoverRadius: 4
                    }
                }
            }
        });










        //WidgetChart 2
        var ctx = document.getElementById("widgetChart2");
        ctx.height = 150;
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [...MonthNames],
                type: 'line',
                datasets: [{
                    data: [...consented],
                    label: 'consented',
                    backgroundColor: '#63c2de',
                    borderColor: 'rgba(255,255,255,.55)',
                },]
            },
            options: {

                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                responsive: true,
                scales: {
                    xAxes: [{
                        gridLines: {
                            color: 'transparent',
                            zeroLineColor: 'transparent'
                        },
                        ticks: {
                            fontSize: 2,
                            fontColor: 'transparent'
                        }
                    }],
                    yAxes: [{
                        display: false,
                        ticks: {
                            display: false,
                        }
                    }]
                },
                title: {
                    display: false,
                },
                elements: {
                    line: {
                        tension: 0.00001,
                        borderWidth: 1
                    },
                    point: {
                        radius: 4,
                        hitRadius: 10,
                        hoverRadius: 4
                    }
                }
            }
        });
        var ctx = document.getElementById("widgetChart3");
        ctx.height = 70;
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [...MonthNames],
                type: 'line',
                datasets: [{
                    data: [...sampleCollected],
                    label: 'sample collected',
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                },]
            },
            options: {

                maintainAspectRatio: true,
                legend: {
                    display: false
                },
                responsive: true,
                scales: {
                    xAxes: [{
                        gridLines: {
                            color: 'transparent',
                            zeroLineColor: 'transparent'
                        },
                        ticks: {
                            fontSize: 2,
                            fontColor: 'transparent'
                        }
                    }],
                    yAxes: [{
                        display: false,
                        ticks: {
                            display: false,
                        }
                    }]
                },
                title: {
                    display: false,
                },
                elements: {
                    line: {
                        borderWidth: 2
                    },
                    point: {
                        radius: 0,
                        hitRadius: 10,
                        hoverRadius: 4
                    }
                }
            }
        });


        var ctx = document.getElementById("sales-chart");
        ctx.height = 150;
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [...MonthNames],
                type: 'line',
                defaultFontFamily: 'Montserrat',
                datasets: [{
                    label: "Number of Paticipants Selected",
                    data: [...selected],
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(220,53,69,0.75)',
                    borderWidth: 1,
                    pointStyle: 'circle',
                    pointRadius: 5,
                    pointBorderColor: 'transparent',
                    pointBackgroundColor: 'rgba(220,53,69,0.75)',
                }, {
                    label: "Number of Participants Consented",
                    data: [...consented],
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(40,167,69,0.75)',
                    borderWidth: 2,
                    pointStyle: 'circle',
                    pointRadius: 5,
                    pointBorderColor: 'transparent',
                    pointBackgroundColor: 'rgba(40,167,69,0.75)',
                }, {
                    label: "Number of Samples Collected",
                    data: [...sampleCollected],
                    backgroundColor: 'transparent',
                    borderColor: "rgba(0,0,0,.09)",
                    borderWidth: "1",
                    backgroundColor: "rgba(0,0,0,.07)",
                    pointRadius: 5,
                    pointBorderColor: 'transparent',
                    pointBackgroundColor: 'rgba(50,167,69,0.75)',
                }]
            },
            options: {
                responsive: true,

                tooltips: {
                    mode: 'index',
                    titleFontSize: 12,
                    titleFontColor: '#000',
                    bodyFontColor: '#000',
                    backgroundColor: '#fff',
                    titleFontFamily: 'Montserrat',
                    bodyFontFamily: 'Montserrat',
                    cornerRadius: 3,
                    intersect: false,
                },
                legend: {
                    display: false,
                    labels: {
                        usePointStyle: true,
                        fontFamily: 'Montserrat',
                    },
                },
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        }
                    }]
                },
                title: {
                    display: false,
                    text: 'Normal Legend'
                }
            }
        });

        console.log(data);

        // progressBar.
    }, //End of AJAX Success function  

    failure: function (data) {
        alert(data.responseText);
    }, //End of AJAX failure function  
    error: function (data) {
        alert(data.responseText);
    } //End of AJAX error function  

});




var ctx = document.getElementById("doughutChart");
ctx.height = 150;
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [45, 25, 20, 10],
            backgroundColor: [
                "rgba(0, 123, 255,0.9)",
                "rgba(0, 123, 255,0.7)",
                "rgba(0, 123, 255,0.5)",
                "rgba(0,0,0,0.07)"
            ],
            hoverBackgroundColor: [
                "rgba(0, 123, 255,0.9)",
                "rgba(0, 123, 255,0.7)",
                "rgba(0, 123, 255,0.5)",
                "rgba(0,0,0,0.07)"
            ]

        }],
        labels: [
            "green",
            "green",
            "green",
            "green"
        ]
    },
    options: {
        responsive: true
    }
});




(function ($) {
    "use strict";


    // Counter Number
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 3000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });


    //var dropdown = document.querySelector("#SelectLm");
    //console.log(dropdown)

    //jQuery.ajax({
    //    type: "GET",
    //    /*url: `/main/main_result?date1=${date2}&date2=${date1}`,*/
    //    url: `/main/WeeklyReport?date1=${date2}&date2=${date1}`,
    //    contentType: "application/json; charset=utf-8",
    //    dataType: "json",
    //    success: function (data) {

    //       console.log(data);

    //        var array = ["All"];

    //        data.forEach(e => {
                
    //            array.push(e.ClusterID);
    //        });
    //       // console.log(array);

    //        for (var i = 0; i < array.length; i++) {
    //            var optn = array[i];
    //            var el = document.createElement("option");
    //            el.textContent = optn;
    //            el.value = optn;
    //            dropdown.appendChild(el);
    //        }
           
    //        dropdown.options = array;

    //    }, //End of AJAX Success function

    //    failure: function (data) {
    //        alert(data.responseText);
    //    }, //End of AJAX failure function  
    //    error: function (data) {
    //        alert(data.responseText);
    //    } //End of AJAX error function  

    //});

    //Form for reports












   




    //WidgetChart 3
   


    //WidgetChart 4
    var ctx = document.getElementById( "widgetChart4" );
    ctx.height = 70;
    var myChart = new Chart( ctx, {
        type: 'bar',
        data: {
            labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            datasets: [
                {
                    label: "My First dataset",
                    data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
                    borderColor: "rgba(0, 123, 255, 0.9)",
                    //borderWidth: "0",
                    backgroundColor: "rgba(255,255,255,.3)"
                }
            ]
        },
        options: {
              maintainAspectRatio: true,
              legend: {
                display: false
            },
            scales: {
                xAxes: [{
                  display: false,
                  categoryPercentage: 1,
                  barPercentage: 0.5
                }],
                yAxes: [ {
                    display: false
                } ]
            }
        }
    } );








       





} )( jQuery );
