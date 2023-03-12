import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

export default function Faq(){
  return <section className='w-full my-5 px-16'>
    <div className='grid grid-cols-3 w-full bg-mainBg rounded-lg py-3 px-4 shadow-xl justify-between items-center m-auto'>
      <label className='w-80 md:w-[600px] lg:w-[400px] font-bold col-span-1 text-mainText' htmlFor='ask1'>Lorem ipsum dolor sit amet, qui</label>
      <input type="checkbox" id='ask1'  className='peer w-64 opacity-0 col-span-1'/>

      <span className='rotate-0 peer-checked:rotate-180 transition-all duration-200 right-20 justify-self-end col-span-1' ><MdOutlineKeyboardArrowDown size='25' /></span>

      <div className='max-h-0 overflow-hidden peer-checked:max-h-80 transition-all duration-500 col-span-3'>
        <p className='text-sm md:pr-40 text-mainText'>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consect lorem lorem</p>
      </div>
    </div>
  </section>
}
