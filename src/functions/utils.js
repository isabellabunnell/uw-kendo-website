export const getDateStr = (dateValue) => {
   const dateYear = dateValue.getFullYear()
   const dateMonth = `0${dateValue.getMonth() + 1}`.slice(-2)
   const dateDate = `0${dateValue.getDate()}`.slice(-2)
   return `${dateYear}-${dateMonth}-${dateDate}`
}

export const reducePeopleMapToList = (peopleMap) => (
   Object.keys(peopleMap).reduce((res, position) =>
      [...res, ...peopleMap[position].map(people => ({...people, position}))], [])
)

export const addRoutine = (book, startDate, endDate) => {
   const start = new Date(startDate)
   const end = new Date(endDate)
   let res = {...book}
   for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
      if (d.getDay() === 3 || d.getDay() === 5) {
         const dateStr = getDateStr(d)
         if (!(dateStr in res)) {
            res[dateStr] = []
         }
         res[dateStr].push({
            "start": "7:00 PM",
            "end": "8:00 PM",
            "name": "Kendo Practice",
            "location": "zoom"
         })
         if (d.getDay() === 5) {
            res[dateStr].push({
               "start": "8:00 PM",
               "end": "9:00 PM",
               "name": "Iaido Practice",
               "location": "zoom"
            })
         }
      }
   }
   return res
}