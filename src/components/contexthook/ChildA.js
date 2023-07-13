import React,{memo} from 'react'

const ChildA = () => {
  return (
    <div>ChildA</div>
  )
}

export default memo(ChildA)