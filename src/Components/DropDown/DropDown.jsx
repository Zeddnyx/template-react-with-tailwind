import { BsThreeDotsVertical } from 'react-icons/bs'
import { useState } from 'react'

export default function DropDown(){
  const [drop, setDrop] = useState(false)
  const handleDrop = () => { setDrop(!drop) }

  const Li = ({ li }) => {
    return <li 
      onClick={handleDrop}
      key={li}
      className='border-b pb-1 border-mainText text-mainText'
    >{li}</li>
  }


  return <section className='w-28 mb-10'>
    <div className='grid grid-cols-2 gap-1'>

      <button onClick={handleDrop} className='outline-none justify-self-end col-span-2' ><BsThreeDotsVertical size='20' /></button>

      <div className={!drop ? `hidden transition-all duration-300` : `transition-all duration-300 p-2 col-span-2`}>
        <ul className='bg-mainBg p-2 rounded'>
          <Li li='lorem' />
          <Li li='ipsum' />
          <Li li='lorem' />
          <Li li='ipsum' />
        </ul>
      </div>

    </div>
  </section>
}
