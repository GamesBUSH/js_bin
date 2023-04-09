var num = prompt('Введите число элементов массива');

var arr = [];

for (var i = 0; i < num; i++)
  {
    arr.push(prompt('Ведите '+Number(i + 1) + ' элемент:'));
  }

alert('Массив: '+arr);
