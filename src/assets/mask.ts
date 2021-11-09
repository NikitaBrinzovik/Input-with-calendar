export let months:Array<string> = ["January", "February", "March", "April", "May",
    "June", "July", "August", "September",
    "October", "November", "December",
    "jan", "feb", "mar", "apr", "may", "jun", "jul",
    "aug", "sep", "oct", "nov", "dec"];


export const getMonthNumber = (month:string):string => {
    if(month === "jan"||month === "Jan"||month === "January") return "00"
    if(month === "feb"||month === "Feb"||month === "February") return "01"
    if(month === "mar"||month === "Mar"||month === "March") return "02"
    if(month === "apr"||month === "Apr"||month === "April") return "03"
    if(month === "may"||month === "May") return "04"
    if(month === "jun"||month === "Jun"||month === "June") return "05"
    if(month === "jul"||month === "Jul"||month === "July") return "06"
    if(month === "aug"||month === "Aug"||month === "August") return "07"
    if(month === "sep"||month === "Sep"||month === "September") return "08"
    if(month === "oct"||month === "Oct"||month === "October") return "09"
    if(month === "nov"|| month ==="Nov"||month === "November") return "10"
    if(month === "dec"|| month ==="Dec"||month === "December") return "11"
    return "error"
}







/*let rule1 = Number(arrStr[0]) //true?
let rule2 = Number(arrStr[1]) || //true?
Object.keys(valutes).some(v => v === values.resultValute?.toUpperCase());*/

// function DateParse()
/*{
    const year = (arrStr[2]).value;
    const month = (arrStr[1]).value;
    const day = arrStr[0].value;
    const hour = (arrStr[3]).value;
    const minute = (arrStr[4]).value;
    const second = (arrStr[5]).value;
    const mask = document.getElementById('mask').value;


    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    const monthNamesShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Aug", "Sep", "Oct", "Nov", "Dec"];


    const masks =
        {
            yyyy : year,
            yy : year.substring(year.length/2,year.length),
            MMMM : monthNames[new Date(year,month,day).getMonth()] ,
            MMM : monthNamesShort[new Date(year,month,day).getMonth()],
            MM : month,
            M : month[1],
            dd : day,
            d : day[1],
            HH: new Date(year + "-" + month + "-" + day + " " + hour + ":" + minute  + " PM").getHours(),
            H : new Date(year + "-" + month + "-" + day + " " + hour + ":" + minute  + " PM").getHours()%10,
            hh :new Date(year + "-" + month + "-" + day + " " + hour + ":" + minute  + " AM").getHours() ,
            h : new Date(year + "-" + month + "-" + day + " " + hour + ":" + minute  + " AM").getHours()%10 ,
            mm : minute,
            m : minute[1],
            ss : second,
            s : second[1]
        }

    let res = mask;

    res = res.replace(/yyyy/g,masks.yyyy);
    res = res.replace(/yy/g,masks.yy);
    res = res.replace(/dd/g,masks.dd);
    res = res.replace(/d/g,masks.d);
    res = res.replace(/HH/g,masks.HH);
    res = res.replace(/H/g,masks.H);
    res = res.replace(/hh/g,masks.hh);
    res = res.replace(/h/g,masks.h);
    res = res.replace(/mm/g,masks.mm);
    res = res.replace(/m/g,masks.m);
    res = res.replace(/ss/g,masks.ss);
    res = res.replace(/s/g,masks.s);
    res = res.replace(/MMMM/g, masks.MMMM);
    res = res.replace(/MMM/g, masks.MMM);
    res = res.replace(/MM/g,masks.MM);
    res = res.replace(/M[\s\W]/g, masks.M);

    alert(res);
}*/
