const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

 console.warn( futureId === holidays[9] ? holidays[9].date : `ID ${futureId} not created yet`) // made a ternary to make the condition



const copied = { 
    id: 6,
    name: 'Xmas!',
    date: new Date(`25 December ${currentYear}`), 
}

let correctDateHours = copied.date.setHours(0)// set hours to 0
let correctDateMinutes =copied.date.setMinutes(0)// set minutes to 0
 let epoch = new Date(copied.date).getTime() // converted copied.date to epoch
let isEarlier = epoch < new Date (holidays[6].date).getTime()//compared epoch times

if (isEarlier) { // fixed if sratement
    holidays[6] = copied
console.log('New date is earlier:', isEarlier)
console.log('ID change:', holidays[christmas].id !== copied.id )//simplified condition
console.log('Name change:', holidays[christmas].name)// removed condition to remove boolean console.log outcome
console.log(holidays[christmas].date)// removed condition to remove boolean console.log outcome
}

const firstHolidayTimestamp = Math.min(
    new Date(holidays[0].date).getTime(),//fixed sytax(new Date(holidays[0].date)) so it would work since holidays[0].date won't work until you redeclare it so .getTime() works
    new Date(holidays[1].date).getTime(),
    new Date (holidays[2].date).getTime(),
    new Date(holidays[3].date).getTime(),
    new Date(holidays[4].date).getTime(),
   new Date ( holidays[5].date).getTime(),
   new Date ( holidays[6].date).getTime(),
    new Date (holidays[7].date).getTime(),
    new Date (holidays[8].date).getTime(),
);


const lastHolidayTimestamp = Math.max(
    new Date ( holidays[0].date).getTime(),//fixed sytax(new Date(holidays[0].date)) so it would work since holidays[0].date won't work until you redeclare it so .getTime() works
   new Date (  holidays[1].date).getTime(),
   new Date (  holidays[2].date).getTime(),
   new Date ( holidays[3].date) .getTime(),
   new Date ( holidays[4].date).getTime(),
   new Date (holidays[5].date) .getTime(),
   new Date ( holidays[6].date).getTime(),
   new Date ( holidays[7].date) .getTime(),
   new Date (  holidays[8].date).getTime(),
)

const firstDay = new Date (firstHolidayTimestamp).getDate()//getting the first holiday day
const firstMonth = new Date (firstHolidayTimestamp).getMonth()+1//getting the first holiday month
const lastDay = new Date (lastHolidayTimestamp).getDate()//getting the last  day
const lastMonth = new Date (lastHolidayTimestamp).getMonth()+1//getting the last month used new Date to make a valid date object()

/*
 * making condition for how the first holiday date will display
  */
if (firstDay >9 && firstMonth>9){
    
    console.log(`${firstDay}/${firstMonth}/${currentYear}`)

} else if(lastDay <=9 && lastMonth>9){

    console.log(`0${firstDay}/${firstMonth}/${currentYear}`)

} else if (firstDay >9 && firstMonth<=9){
    
    console.log(`${firstDay}/0${firstMonth}/${currentYear}`)

}else{
    console.log(`0${firstDay}/0${firstMonth}/${currentYear}`)
}
/*
 * making condition for how the last holiday date will display
  */
if (lastDay >9 && lastMonth>9){
   
    console.log(`${lastDay}/${lastMonth}/${currentYear}`)

} else if(lastDay <=9 && lastMonth>9){

    console.log(`0${lastDay}/${lastMonth}/${currentYear}`)

} else if (lastDay >9 && lastMonth<=9){
   
    console.log(`${lastDay}/0${lastMonth}/${currentYear}`)

}else{console.log(`0${lastDay}/0${lastMonth}/${currentYear}`)}


const oneto8 = Math.random()*9 //made const a random from 0 to 9 excluding 9
const random = Math.floor(oneto8)//rounding it down

const randomHolidayMonth = new Date (holidays[random].date).getMonth()+1//getting the random month
const randomHolidayDay = new Date (holidays[random].date).getDate()//getting the random  day
/*
 * making condition for how the random date will display
  */
if (randomHolidayDay >9 && randomHolidayMonth>9){
    
    console.log(`${randomHolidayDay}/${randomHolidayMonth}/${currentYear}`)

} else if(randomHolidayDay <=9 && randomHolidayMonth>9){

    console.log(`0${randomHolidayDay}/${randomHolidayMonth}/${currentYear}`)
    
} else if (randomHolidayDay >9 && randomHolidayMonth<=9){
   
    console.log(`${randomHolidayDay}/0${randomHolidayMonth}/${currentYear}`)

}else{console.log(`0${randomHolidayDay}/0${randomHolidayMonth}/${currentYear}`)}