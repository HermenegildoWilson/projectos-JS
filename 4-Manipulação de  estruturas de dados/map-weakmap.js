// São estruturas de daos muito importantes e interessantes pois podem nos permitir criar objectos de forma eficiente e em meio a execução de forma automatizada.
let map = new Map();

map.set('nome', 'Wilson');
console.log(map.get('nome'));

let weakmap = new WeakMap();

weakmap.set(map, 'wlson');
console.log(weakmap.get(map));