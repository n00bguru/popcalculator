
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
  var k = +i / 2;  
  var s = +k * +j;
  var l = +s / 2;
  var t = +l * +j;
  var m = +t / 2;
  var u = +m * +j;
  var n = +u / 2;
  var v = +n * +j;
  var o = +v / 2;
  var w = +o * +j;
  var p = +w / 2;
  var x = +p * +j;
  var q = +x / 2;
  var y = +q * +j;
  var r = +y / 2;
  var z = +r * +j;
  a.innerHTML=s +' people';
  b.innerHTML=t +' people';
  c.innerHTML=u +' people';
  d.innerHTML=v +' people';
  e.innerHTML=w +' people';
  f.innerHTML=x +' people';
  g.innerHTML=y +' people';
  h.innerHTML=z +' people';
}
