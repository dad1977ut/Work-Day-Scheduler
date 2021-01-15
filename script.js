setInterval;
var timeArr = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var timeBlocks = {
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: "",
  15: "",
  16: "",
  17: "",
};
if (localStorage.getItem("todo") === null) {
  localStorage.setItem("todo", JSON.stringify(timeBlocks));
}
for (var index = 0; index < timeArr.length; index++) {
  $(".container").append(
    `<div class="input-group row">
    <span class="input-group-text time-block hour" id="basic-addon1" value ="${timeArr[index]}"
    >${timeArr[index]}</span>
    <input type="text" class="form-control textarea" aria-label="Username" aria-describedby="basic-addon1">
    <button class="btn btn-outline-secondary  saveBtn far fa-save" type="button" id="button-addon2">
    </button>
    </div>`
  );
}
$(".saveBtn").on("click", function (event) {
  event.target;
  var current = $(event.target).siblings(".textarea").val();
  var time = JSON.parse(localStorage.getItem("todo"));
  // find span
  // find text in span
  time[$(event.target).siblings("span").attr("value")] = current;
  localStorage.setItem("todo", JSON.stringify(time));
});
