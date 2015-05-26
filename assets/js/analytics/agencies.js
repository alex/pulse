$(document).ready(function () {

  $.get("/assets/data/tables/analytics/agencies.json", function(data) {
    renderTable(data.data);
  });

  var renderTable = function(data) {
    $("table").DataTable({
      responsive: true,

      data: data,

      columns: [
        {"data": "Agency"},
        {"data": "Number of Domains"},
        {"data": "Participates in DAP?"}
      ],

      // order by number of domains
      order: [[1, "desc"]],

      columnDefs: [
        {render: Utils.progressBar, targets: 2}
      ],

      "oLanguage": {
        "oPaginate": {
          "sPrevious": "<<",
          "sNext": ">>"
        }
      }

    });
  };

});