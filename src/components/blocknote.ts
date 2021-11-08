

export let mounths:Array<string> = ["February", "March", "April", "May",
    "June", "July", "August", "September",
    "October", "November", "December",
    "feb", "mar", "apr", "may", "jun", "jul",
    "aug", "sep", "oct", "nov", "dec"]
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
