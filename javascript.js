
function myFunction(){

  var a = document.getElementById('gen1');
  var b = document.getElementById('gen2');
  var c = document.getElementById('gen3');
  var d = document.getElementById('gen4');
  var e = document.getElementById('gen5');
  var f = document.getElementById('gen6');
  var g = document.getElementById('gen7');
  var h = document.getElementById('gen8');
  var i = document.getElementById('pop').value;
  var j = document.getElementById('rate').value;
  var k = +i / +j;
  var l = +k / +j;
  var m = +l / +j;
  var n = +m / +j;
  var o = +n / +j;
  var p = +o / +j;
  var q = +p / +j;
  var r = +q / +j;
  a.innerHTML=k +' people';
  b.innerHTML=l +' people';
  c.innerHTML=m +' people';
  d.innerHTML=n +' people';
  e.innerHTML=o +' people';
  f.innerHTML=p +' people';
  g.innerHTML=q +' people';
  h.innerHTML=r +' people';
}
