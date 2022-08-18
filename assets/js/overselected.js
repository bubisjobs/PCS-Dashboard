









//overselected report ajax API CALL
(function ($) {
    "use strict";







   

    //console.log(submitFormQueries);









        /*  console.log(submitForm.date1.value.reverse());*/
       


            $(document).ready(function () {

                var table = $('.overselectedTbl').DataTable({
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
                        "url": `/pcs/main/OverSelectedCluster`,
                        "dataSrc": ""

                    },

                    select: true,
                    columns: [


                        { "data": "Query" },
                        { "data": "ClusterID" },
                        { "data": "selected" },
                        { "data": "consented" },
                        { "data": "sample_collected" }
                        





                    ],
                });







            });
           
     



 










})(jQuery);
