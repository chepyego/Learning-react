import React from 'react'


export default function CareScale({careType, scaleValue}) {

    //  const scaleNumber = scaleValue.value
    // const careType = props.careType
    const range = [1, 2, 3]
    const scaleType = careType ==='light'? '☀️' : '💧'

  return (
    <div>
        {range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
      
    </div>
  )
}
