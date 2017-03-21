
exports.titleCase = function (str) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}

exports.firstUpperCase = function (str) {
	if(!str || str.length < 0){
		return str;
	}
  return str[0].toUpperCase() + str.substr(1);
}

exports.firstLowerCase = function (str) {
  if(!str || str.length < 0){
		return str;
	}
  return str[0].toLowerCase() + str.substr(1);
}