//时间格式转换

function formatDate(now,blo){
    now = new Date(now);
    var year = now.getFullYear(); //取得4位数的年份
    var month = now.getMonth() + 1; //取得日期中的月份，其中0表示1月，11表示12月
    var date = now.getDate(); //返回日期月份中的天数（1到31）
    var hour = now.getHours(); //返回日期中的小时数（0到23）
    var minute = now.getMinutes(); //返回日期中的分钟数（0到59）
    var second = now.getSeconds(); //返回日期中的秒数（0到59）
    if(blo)
        return year + "-" + month + "-" + date;
    return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;

}

//加法函数
function NumberAdd(arg1, arg2) {
    var r1, r2, m, n;
    try {
        r1 = arg1.toString().split(".")[1].length
    } catch (e) {
        r1 = 0
    }
    try {
        r2 = arg2.toString().split(".")[1].length
    } catch (e) {
        r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2))
    n = (r1 >= r2) ? r1 : r2;
    return ((arg1 * m + arg2 * m) / m).toFixed(n);
}

//减法函数
function NumberSub(arg1, arg2) {
    var re1, re2, m, n;
    try {
        re1 = arg1.toString().split(".")[1].length;
    } catch (e) {
    re1 = 0;
    }
    try {
        re2 = arg2.toString().split(".")[1].length;
    } catch (e) {
        re2 = 0;
    }
    m = Math.pow(10, Math.max(re1, re2));
    n = (re1 >= re2) ? re1 : re2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
}

//乘法函数
function NumberMul(arg1, arg2) {
    var m = 0;
    var s1 = arg1.toString();
    var s2 = arg2.toString();
    try {
        m += s1.split(".")[1].length;
    } catch (e) {}
    try {
        m += s2.split(".")[1].length;
    } catch (e) {}

    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}



//除法函数
function NumberDiv(arg1,arg2,digit){
    var t1=0,t2=0,r1,r2;
    try{t1=arg1.toString().split(".")[1].length}catch(e){}
    try{t2=arg2.toString().split(".")[1].length}catch(e){}
    r1=Number(arg1.toString().replace(".",""))
    r2=Number(arg2.toString().replace(".",""))
    //获取小数点后的计算值
   var result= ((r1/r2)*Math.pow(10,t2-t1)).toString()
    var result2=result.split(".")[1];
    result2=result2.substring(0,digit>result2.length?result2.length:digit);
    return Number(result.split(".")[0]+"."+result2);
}



module.exports = {
	formatDate:formatDate,
  NumberAdd:NumberAdd,
  NumberSub:NumberSub,
  NumberMul:NumberMul,
  NumberDiv:NumberDiv
}
