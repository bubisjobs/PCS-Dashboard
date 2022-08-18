







//CLUSTER Selection report ajax API CALL


(function ($) {
    "use strict";




    var dropdown = document.querySelector("#SelectLm");
    console.log(dropdown)

    jQuery.ajax({
        type: "GET",
        /*url: `/main/main_result?date1=${date2}&date2=${date1}`,*/
        url: `/pcs/main/WeeklyReport?date1=${date2}&date2=${date1}`,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            console.log(data);

            var array = [];

            data.forEach(e => {

                array.push(e.ClusterID);

            });

            var uniqueArray = [...new Set(array)]
            for (var i = 0; i < uniqueArray.length; i++) {
                var optn = uniqueArray[i];
                var el = document.createElement("option");
                el.textContent = optn;
                el.value = optn;
                dropdown.appendChild(el);
            }

            dropdown.options = array;

        }, //End of AJAX Success function

        failure: function (data) {
            alert(data.responseText);
        }, //End of AJAX failure function  
        error: function (data) {
            alert(data.responseText);
        } //End of AJAX error function  

    });









    var submitform = document.querySelector("#cluster");
    console.log(submitform);

    submitform.addEventListener('submit', e => {
        e.preventDefault();



        var clusterId = submitform.selectSm.value;

        console.log(clusterId);




        $(document).ready(function () {

            var table = $('.clusterTbl').DataTable({
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
                    "url": `/pcs/main/Cluster?cluster=${clusterId}`,
                    "dataSrc": ""

                },

                select: true,
                columns: [



                    { "data": "ClusterID" },
                    { "data": "CID" },
                    { "data": "agegrp" },
                   
                    { "data": "vcode" },
                    { "data": "cpdnum" },
                   




                ],
            });







        });



    });







        


  






})(jQuery);




