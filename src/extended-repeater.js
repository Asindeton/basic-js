module.exports = function repeater(str, options) {
    let answer = [];
    let repeat = options.repeatTimes ? options.repeatTimes : 1;
    let additionRepeat = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
/*     console.log(options) */
    for(let i = 0; i < repeat; i++){
        let customStr = str;
        let testArray = [];
        if(options.addition !== undefined || ( options.addition == null )){
          if(options.addition !== undefined && options.addition == null){
            options.addition = 'null'
          }
         for(let j = 0; j < additionRepeat; j++){
            customStr = customStr + options.addition;
            testArray.push(options.addition);
        }
        var test2 = options.additionSeparator ? str + testArray.join(options.additionSeparator) : str + testArray.join('+');
    }
        answer.push(test2 ? test2 : str);
    }
    return options.separator ? answer.join(options.separator): answer.join('+');
};
  