// add new table row
function addNewRow() {
  var template = $("tr.trow:first");
  $(".no_entries_row").css("display", "none");
  var newRow = template.clone();
  var lastRow = $("tr.trow:last").after(newRow);
}
$(".list_add").on("click", addNewRow);
var sn = document.getElementById("sn");
$(".list_add").on("click", incVal);
function incVal() {
  snVal = parseInt(sn.value);
  snVal = parseInt(sn.value) + 1;
  sn.value = snVal;
  console.log(snVal);
}
