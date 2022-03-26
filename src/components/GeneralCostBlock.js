import React from "react"

const GeneralCostBlock = () => {
   return (
      <div style={{ marginBottom: "2rem" }}>
          <h1 style={{ marginBottom: "1rem" }, {textAlign: "center"}}>
           Kendo Cost Sheet
         </h1>
         <h2>
            Annual
         </h2>
         <p>
            Federation dues: varies ($35 in 2022 for students)
            <ul style={{ listStyle: "none"}}>
               <li>...</li>
               <li>...</li>
            </ul>
         </p>
         <h2>
            Quarterly Dues
         </h2>
         <p>
            $20
         </p>
      </div>
   )
}

export default GeneralCostBlock
