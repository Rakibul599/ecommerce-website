import React from 'react'

function Category({finalcatagory,setCatname,catStustus,setCatstutus}) {
  let cat=finalcatagory.map((v,i)=>{
    return(
      <li onClick={()=>{setCatname(v),setCatstutus(!catStustus)}} className='bg-slate-300 mb-1 cursor-pointer' key={i}>{v}</li>
    )
  })
  return (
    <div>
        <h1 className='text-2xl mb-2'>Product Category</h1>
        <ul>
          {cat}
        </ul>
    </div>
  )
}

export default Category