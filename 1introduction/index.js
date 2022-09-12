var str = 'Номер эмес';
var sum = str; /// ~~~ Тип 'string' не может быть назначен для типа 'number
var v = { str: 'Salam', sum: 18 };
var names = [
    { name: 'Omurbek', age: 18 },
    { name: 'Taalaibek', age: 11 },
    { name: 'Roza', age: 28 },
];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var state = names_1[_i];
    console.log("$<h1>\u041C\u0435\u043D\u0438\u043D \u0430\u0442\u044B\u043C </h1>\"".concat(state.name, "+\",\"+\"\u0416\u0430\u0448\u044B\u043C\"+").concat(state.age));
}
