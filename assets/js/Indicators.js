








//data cleaning indicators report ajax API CALL

(function ($) {
    "use strict";







    var submitFormQueries = document.querySelector("#indicators");

    //console.log(submitFormQueries);

submitFormQueries.addEventListener('submit', e => {

    try {
        e.preventDefault();






        /*  console.log(submitForm.date1.value.reverse());*/
        var aa = new Date(submitFormQueries.date1.value).toLocaleDateString().split("/");
        var aa1 = new Date(submitFormQueries.date2.value).toLocaleDateString().split("/");

        if (aa > aa1 || submitFormQueries.date1.value == "" || submitFormQueries.date2.value == "") {


            alert("Invalid Dates");
        } else {
            var month1 =
                (aa[0] == 1) ? aa[0] = "Jan" :
                    (aa[0] == 2) ? aa[0] = "Feb" :
                        (aa[0] == 3) ? aa[0] = "Mar" :
                            (aa[0] == 4) ? aa[0] = "Apr" :
                                (aa[0] == 5) ? aa[0] = "May" :
                                    (aa[0] == 6) ? aa[0] = "Jun" :
                                        (aa[0] == 7) ? aa[0] = "Jul" :
                                            (aa[0] == 8) ? aa[0] = "Aug" :
                                                (aa[0] == 9) ? aa[0] = "Sep" :
                                                    (aa[0] == 10) ? aa[0] = "Oct" :
                                                        (aa[0] == 11) ? aa[0] = "Nov" :
                                                            aa[0] = "Dec";


            var month2 =
                (aa1[0] == 1) ? aa1[0] = "Jan" :
                    (aa1[0] == 2) ? aa1[0] = "Feb" :
                        (aa1[0] == 3) ? aa1[0] = "Mar" :
                            (aa1[0] == 4) ? aa1[0] = "Apr" :
                                (aa1[0] == 5) ? aa1[0] = "May" :
                                    (aa1[0] == 6) ? aa1[0] = "Jun" :
                                        (aa1[0] == 7) ? aa1[0] = "Jul" :
                                            (aa1[0] == 8) ? aa1[0] = "Aug" :
                                                (aa1[0] == 9) ? aa1[0] = "Sep" :
                                                    (aa1[0] == 10) ? aa1[0] = "Oct" :
                                                        (aa1[0] == 11) ? aa1[0] = "Nov" :
                                                            aa1[0] = "Dec";



            var date1 = aa[1] + '/' + month1 + '/' + aa[2];
            var date2 = aa1[1] + '/' + month2 + '/' + aa1[2];


            console.log(date1, date2);


            $(document).ready(function () {

                var table = $('.indicatorsTbl').DataTable({
                    orderCellsTop: true,
                    pageLength: 24,
                    fixedHeader: true,
                    destroy: true,
                    dom: 'Bfrtip',
                    buttons: [
                        {
                            extend: 'excelHtml5',
                            className: 'btn btn-success',
                            sheetName: 'PCS Report'
                        }

                    ],
                    ajax: {
                        "url": `/pcs/main/DataCleaningIndicators?date1=${date1}&date2=${date2}`,
                        "dataSrc": ""

                    },

                    select: true,
                    columns: [


                        { "data": "Query" },
                        { "data": "Count_of_Queries" }
                        





                    ],
                });







            });
           
        }



    } catch (e) {
        console.log(e);
    }
    







});


})(jQuery);
