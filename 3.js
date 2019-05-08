var colors=["red" , "green" , "blue" , "orange","pink" , "gray" , "black" , "purple"];
var squares=document.querySelectorAll('.squares');
var start=document.querySelector('Button');
start.addEventListener("click",function () {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor=colors[Math.floor(Math.random()*colors.length)]
  }
});
