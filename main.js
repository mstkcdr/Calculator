function insert(numb) {
  document.getElementById("display").value = document.getElementById("display").value + numb;
}

  function solution() {
    let sol = document.getElementById("display").value;
    document.getElementById("display").value = eval(sol);
  }

  function c() {
    document.getElementById("display").value = "";
  }

// $(document).ready(function(){
//   $('#button').click(function(){
//    $('#form').trigger("reset");
//  });
// });
