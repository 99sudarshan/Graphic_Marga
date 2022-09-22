$(function () {
  $(".dropitem").hide();
  $(".dropdown").on("click", function () {
    $(this).next().slideToggle("fast");
  });
});



function addRemove(plusb, minusb, openb, closeb) {
  let plusBtn = Array.from(document.getElementsByClassName(plusb));
  let minusBtn = Array.from(document.getElementsByClassName(minusb));
  let openBtn = Array.from(document.getElementsByClassName(openb));
  let closeBtn = Array.from(document.getElementsByClassName(closeb));

  for (const elem of plusBtn) {
    elem.classList.toggle("hidden");
  }

  for (const elem of minusBtn) {
    elem.classList.toggle("hidden");
  }
  for (const elem of openBtn) {
    elem.classList.toggle("hidden");
  }
  for (const elem of closeBtn) {
    elem.classList.toggle("hidden");
  }
}
