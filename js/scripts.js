$(document).ready(function () {
  $("form#paper").submit(function (event) {
    event.preventDefault();
    const name = $("input#name").val();
    const address = $("input#address").val();
    const size = $("#size").val();
    const paperType = $("input:radio[name=papertype]:checked").val();
    const date = $("#date").val();
    const color = $("#color").val();

    $(".name").text(name);
    $(".address").text(address);
    $(".size").text(size);
    $(".papertype").text(paperType);
    $(".date").text(date);
    $(".color").text(color);

    $("#receipt").show();
  });
});
