//многоязычность объект который по ключу будет смотреть на тот или иной текст

export const inputValidate = (data: any, item: string) => {

    data[item].error = null;
  
    if (item == 'phone' && !!data[item].value) {
		if (data[item].value.length < 18) {
			data[item].error = 'Incorrect phone format'
		}
		if (data[item].value[4] !== '9') {
			data[item].error = 'The operator code must start with 9'
		}
    } 

    if (item == 'name' && !!data[item].value) {
		if (data[item].value.length < 3) {
			data[item].error = 'no shorter than 3 char'
		}
    } 

    if (item == 'message' && !!data[item].value) {
		if (data[item].value.length < 10) {
			data[item].error = 'no shorter than 10 char'
		}
    } 
  
    // if (item == 'driverName' && !!data[item].value) {
    //   let res = data[item].value.split(' ');
  
    //   if (res.length < 2 || res.length > 4) {
    //     data[item].error = 'ФИО введено неверно'
    //   }
    // } 
  
    // if (item == 'license' && !!data[item].value) {
    //   if (data[item].value.length !== 10) {
    //     data[item].error = 'Неверный формат удостоверения'
    //   }
    // }
  
    // if (item == 'carNum' && !!data[item].value) {
    //     if (data[item].value.length < 9) {
    //         data[item].error = 'Неверный формат номера'
    //     }
    // }
  
    // if (item == 'trailerNum' && !!data[item].value) {
    //     if (data[item].value.length < 9) {
    //         data[item].error = 'Неверный формат номера'
    //     }
    // }
  
    // if (item == 'companyName' && !!data[item].value) {
    //   if (data[item].value.length > 51) {
    //       data[item].error = 'Максимальное число символов 50'
    //   }
    // }
  
    if (data[item].required && !data[item].value) {
        data[item].error = 'the field cannot be empty'
    }
  
    return data;
}
  
export const fomatAutoNum = (val:string, type: string) => {
    let ret = "", dig = val.replace(/[^(а|в|е|к|м|н|о|р|с|т|у|х)0-9\s]/gi,"").split("").splice(0,9);
  
    for (var i = 0; i < dig.length; i++) {
        if (i === 6 && type == 'auto') { ret += "/"; }
        else if (i === 7 && type == 'trailer') { ret += "/"; }
        ret += dig[i];
    }
    return ret.toUpperCase();
}
  
export const fomatText = (val: string, leng: string) => {
	let length = +leng;
	let ret = "", dig = val.replace(/[^А-яЁA-zё0-9\s"-]/g,"").split("");
	!!length && (dig = dig.splice(0,length));
	
	for (var i = 0; i < dig.length; i++) {
		ret += dig[i];
	}
	return ret;
}
  
export const fomatCyrillic = (val:string) => {
  let ret = "", dig = val.replace(/[^А-яЁё\s-.]/g,"").split("").splice(0,50);
  
  for (var i = 0; i < dig.length; i++) {
      ret += dig[i];
  }
	return ret;
}

export const fomatString = (val: string, leng: string) => {
	let length = +leng;
	let ret = "", dig = val.replace(/[^А-яЁA-zё\s."-]/g,"").split("");
	!!length && (dig = dig.splice(0,length));
	
	for (var i = 0; i < dig.length; i++) {
		ret += dig[i];
	}
	return ret;
}
  
  //создать отдельную функцию на splice для ограничения вводимых символов и прокинуть остальным методам
export const fomatNumber = (val:string, leng: string) => {
    let length = +leng;
    let ret = "", dig = val.replace(/[^0-9\s]/g,"").split("");
    !!length && (dig = dig.splice(0,length));
    
    for (var i = 0; i < dig.length; i++) {
        ret += dig[i];
    }
    return ret;
}
  
export const formatPhone = (item:string) => {
    let ret = "", dig = item.replace(/\D/g,"").split("").splice(0,11);
  
    if(dig[0] === "8") {
        dig[0] = "7";
    } else if(dig.length && dig[0] != "7") {
        dig.unshift("7");
        dig = dig.splice(0,11);
    }
    if (item === "+") {
        ret = item;
    } else {
        for (var i = 0; i < dig.length; i++) {
            if     (i === 0) { ret += "+"; }
            else if(i === 1) { ret += " ("; }
            else if(i === 4) { ret += ") "; }
            else if(i === 7) { ret += "-"; }
            else if(i === 9) { ret += "-"; }
            ret += dig[i];
        }
    }
  
    if(dig.length <= 11) {
      	return ret;
    } else {
      	return
    }
}