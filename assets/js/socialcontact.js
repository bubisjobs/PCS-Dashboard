//weekly report ajax API CALL

(function ($) {
    "use strict";






    var submitform = document.querySelector("#socialDate");


    submitform.addEventListener('submit', e => {
        e.preventDefault();

        var aa = new Date(submitform.date.value).toLocaleDateString().split("/");

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

            var date = aa[1] + '/' + month1 + '/' + aa[2];

            //console.log(date1, date2);
            $(document).ready(function () {

                var table = $('.reportTbl').DataTable({
                    orderCellsTop: true,
                    pageLength: 24,
                    fixedHeader: true,
                    destroy: true,
                    dom: 'Bfrtip',
                    buttons: [
                        {
                            extend: 'excelHtml5',
                            className: 'btn btn-success',
                            sheetName: 'Social Contact Report'
                        }

                    ],
                    ajax: {
                        "url": `/pcs/main/SocialContactView?date=${date}`,
                        "dataSrc": ""

                    },

                    select: true,
                    columns: [



                        { "data": "clusterID" },
                        { "data": "clustername" },
                        { "data": "clustergroup" },
                        { "data": "total" }

                    ],
                });

            });



    })


})(jQuery);