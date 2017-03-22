
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

exports.isLegalName = function(name){
	return name && /^[a-zA-Z][a-zA-Z0-9-]*$/.test(name);
}

exports.formatClassName = function(name){
	var className = [];
	for(var i=0; i<name.length; i++){
		//首字母大写
		if(i===0){
			className.push(name[i].toUpperCase());
		}else{
			//去掉‘-’
			if(name[i] == '-' 
				&& (i+1) < name.length){
				className.push(name[i+1].toUpperCase());
				i++;
			}else{
				className.push(name[i]);
			}
		}		
	}
	return className.join('');
}