function look_num(x) {
  if (x >= 100) return;
  alert(x + 1);
  look_num(x + 1);
}
loop_num(0);
