setInterval;
var timeArr = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var newtimeArr = [9, 10, 11, 12, 1, 2, 3, 4, 5];

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
} else {
  timeBlocks = JSON.parse(localStorage.getItem("todo"));
}
for (var index = 0; index < timeArr.length; index++) {
  $(".container").append(`<div class="input-group row">
    <span class="input-group-text time-block hour" id="basic-addon1" value ="${
      timeArr[index]
    }"
    >${newtimeArr[index]}</span>
    <input type="text" class="form-control textarea" aria-label="Username" value ="${
      timeBlocks[timeArr[index]]
    }" aria-describedby="basic-addon1">
    <button class="btn btn-outline-secondary  saveBtn far fa-save" type="button" id="button-addon2">
    </button>
    </div>`);
}
$(".saveBtn").on("click", function (event) {
  event.target;
  var current = $(event.target).siblings(".textarea").val();
  var time = JSON.parse(localStorage.getItem("todo"));
  time[$(event.target).siblings("span").attr("value")] = current;
  localStorage.setItem("todo", JSON.stringify(time));
});
