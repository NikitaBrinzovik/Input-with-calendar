export type ValidationType = {
    year: string
    month: string
    day: string
    hours: string
    minutes: string
    seconds: string
}

//----------------init-----------------
/*let year: string
let month: string
let day: string
let hours: string
let minutes: string
let seconds: string
let time: string*/

export let months: Array<string> = ["January", "February", "March", "April", "May",
    "June", "July", "August", "September",
    "October", "November", "December",
    "jan", "feb", "mar", "apr", "may", "jun", "jul",
    "aug", "sep", "oct", "nov", "dec",
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12",
];

//////-----functions-----------------
//1
export const spliter = (str: string): Array<string> =>  str.split(' ');

//2
export const validatorAllDate = (arr: Array<string>): Array<string> => {
   /* const resultArr= arr
    resultArr[0] = day;
    resultArr[1]= month ;
    resultArr[2] = year;
    resultArr[3] = hours;
    resultArr[4] =minutes;
    resultArr[5] =seconds;
    time = (`${year}-${month}-${day}T${hours}:${minutes}:${seconds}`)*/
    /*day = arr[0];
    month = arr[1];
    arr[2] ? year = arr[2] : year = "2021";
    arr[3] ? hours = arr[3] : hours = "00";
    arr[4] ? minutes = arr[4] : minutes = "00";
    arr[5] ? seconds = arr[5] : seconds = "00";
    time = (`${year}-${month}-${day}T${hours}:${minutes}:${seconds}`)*/
    if(!arr[2]){ arr[2] = "2021"}
    if(!arr[3]){ arr[3] = "00"}
    if(!arr[4]){ arr[4] = "00"}
    if(!arr[5]){ arr[5] = "00"}
    /*console.log("-------------------------------")
    console.log(arr)
    console.log(arr[4])
    console.log({day, month, year, hours, minutes, seconds})
    console.log({day, month, year, hours, minutes, seconds})
    console.log({day, month, year, hours, minutes, seconds})
    console.log("-------------------------------")*/
    // let mappedArr = mapper([day, month, year, hours, minutes, seconds])
    // return {day, month, year, hours, minutes, seconds}
    return arr
}

//3
export const validatorByLength = (date: string): string => {
    return (date.length < 2)
        ? dateValidationFormatter(date)
        : date
}

//4
export const getMonthNumber = (month: string ):string => {
    if (month === "jan" || month === "Jan" || month === "January" || month === "1") return "01"
    if (month === "feb" || month === "Feb" || month === "February" || month === "2") return "02"
    if (month === "mar" || month === "Mar" || month === "March" || month === "3") return "03"
    if (month === "apr" || month === "Apr" || month === "April" || month === "4") return "04"
    if (month === "may" || month === "May" || month === "5") return "05"
    if (month === "jun" || month === "Jun" || month === "June" || month === "6") return "06"
    if (month === "jul" || month === "Jul" || month === "July" || month === "7") return "07"
    if (month === "aug" || month === "Aug" || month === "August" || month === "8") return "08"
    if (month === "sep" || month === "Sep" || month === "September" || month === "9") return "09"
    if (month === "oct" || month === "Oct" || month === "October" || month === "10") return "10"
    if (month === "nov" || month === "Nov" || month === "November" || month === "11") return "11"
    if (month === "dec" || month === "Dec" || month === "December" || month === "12") return "12"
    return month
}
//5
export const validationOfYear = (year: string):string => {
    if (year.length === 3) return "2" + year
    if (year.length === 2) return "20" + year
    if (year.length === 1) return  "202" + year
    return year
}


///---------------------------------------------------------------------------------------------------------------------




export const mapper = (arr: Array<string>): string | void => {
    arr.map((date, key) => {
        let helper: string
        if (key === 2) {
            if (date.length === 3) return "2" + date
            if (date.length === 2) return "20" + date

            if (date.length === 1) {
                helper = "202" + date
                console.log("--helper----", helper, "----here----")
                return helper
            }
        }
        return validatorByLength(date)
    })
}

export const dateValidationFormatter = (date: string | number) => {
    return "0" + date
}



/*const [dayFromDate,setDayFromDate] =useState()
const [monthFromDate, setMonthFromDate] =useState()
const [yearFromDate, setYearFromDate] =useState()
const [hourFromDate, setHourFromDate] =useState()
const [minutesFromDate, setMinutesFromDate] =useState()
const [secondsFromDate, setSecondsFromDate] =useState()*/
///////////////////////////////////////////////////////////////////
//alert(dayFromDate+1)
/* const separators = [' ', '-', 'T', ]
 let newDate= z.split(separators.join(' ') );
 console.log('-----',newDate, '-----')
 let mySplits = date.split(/[T ,\/ "-", :]/)*/
// let newDateGovno= govna.split(separators,  );
// const mySplits = date.split(/[.,\/ -]/)
// const mySplitsZZ = mySplits[2].split(/[.,\/ :]/)
/*console.log('---split--',mySplits, '--date---')
console.log(w, "---------aft")*/
/*console.log(mySplits[0])
console.log(mySplits[1])
console.log(mySplits[2])*/

/*  let che = new Date(time)
  let validatedChe = validation(che)
  dayF  =z.getDate()
  monthF =getMonth()+1).toString()
  yearF=getFullYear().toString()
  hoursF =getHours().toString()
  minutesF =getMinutes().toString()
  secondsF =getSeconds().toString()*/
/*||month ==="0"
||month ==="1"
||month ==="2"
||month ==="3"
||month ==="4"
||month ==="5"
||month ==="6"
||month ==="7"
||month ==="8"
||month ==="9"
||month ==="10"
||month ==="11"*/

/*////////////////////////////

const fuf =()=>{
    const dateArrFromInput = inputValue.split(' ');
    // 11,feb,1111,23,59,11
    /!*day = dateArrFromInput[0];
    month = dateArrFromInput[1];*!/
    day = "10";
    month = "10";
    // year = dateArrFromInput[2] ?
    year =  "2010";
    // hour = dateArrFromInput[3] ?
    hour =  "10";
    // minutes = dateArrFromInput[4] ?
    minutes =  "10";
    // seconds =  dateArrFromInput[5] ?
    seconds = "10";

    time = (`${year}-${month}-${day}T${hour}:${minutes}:${seconds}`)
    return setInputValue(time)
}
const che = document.getElementById("calendar")

che?.addEventListener("keydown",fuf)


/////////////////////////////////////////////////*/
/*let d =che.getDate().toString()
          let m =che.getMonth().toString()
          let y =che.getFullYear().toString()
          let h =che.getHours().toString()
          let min =che.getMinutes().toString()
          let s =che.getSeconds().toString()

          d.toString()
          m.toString()
          y.toString()
          h.toString()
          min.toString()
          s.toString()
          console.log(y)
          console.log(m)
          console.log(d)
          console.log(h)
          console.log(min)
          console.log(s)
          console.log("01")


          day  =che.getDate().toString()
          month =che.getMonth().toString()
          year=che.getFullYear().toString()
          hours =che.getHours().toString()
          minutes =che.getMinutes().toString()
          seconds =che.getSeconds().toString()*/
/*console.log(year)
console.log(month)
console.log(day)
console.log(hours)
console.log(minutes)
console.log(seconds)*/
// time = (`${y}-${m}-${d}T${h}:${min}:${s}`)
// console.table(time)
//return setInputValue(che)
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
