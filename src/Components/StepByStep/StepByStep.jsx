import List from '../../Assets/list.png'
import Search from '../..//Assets/Search.png'
import Barang from '../..//Assets/barang.png'

export default function StepByStep(){

  return <section className='my-10 max-w-5xl text-center mx-auto flex flex-col gap-5 justify-center content-center items-center h-screen'>
    <h1 className=' px-1 font-bold text-2xl md:text-[48px] leading-tight text-mainText'>Lorem Ipsum <span className='text-mainText'>Dolor sit amet</span></h1>
    <div className='flex gap-5 mt-10 md:flex-col mx-auto'>
      <div className='flex flex-col items-center md:flex-row gap-[17px] md:px-28'>
        <span><img className='w-16 md:w-[250px]' src={List} alt="search" /></span>
        <div className='h-14 w-[3px] md:h-[2px] md:w-full bg-black'>
        </div>
        <span><img className='w-16 md:w-[250px]' src={Search} alt="search" /></span>
        <div className='h-14 w-[3px] md:h-[2px] md:w-full bg-black'>
        </div>
        <span><img className='w-16 md:w-[250px]' src={Barang} alt="search" /></span>
      </div>

      <div className='text-start mt-1 grid grid-rows-5 md:grid-cols-6 md:gap-5 md:text-center'>
        <div className='row-span-2 md:col-span-2 w-52 md:w-full'>
          <h1 className='font-bold md:text-[24px] text-mainText'>lorem Ipsum</h1>
          <p className='text-xs md:text-[16px] pr-10 md:p-0 md:px-8'>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim</p>
        </div>
        <div className='row-span-2 md:col-span-2 w-52 md:w-full'>
          <h1 className='font-bold md:text-[24px] text-mainText'>lorem Ipsum</h1>
          <p className='text-xs md:text-[16px] md:px-3'>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim</p>
        </div>
        <div className='row-span-2 md:col-span-2 w-52 md:w-full'>
          <h1 className='font-bold md:text-[24px] text-mainText'>lorem Ipsum</h1>
          <p className='text-xs md:text-[16px] md:px-10'>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim</p>
        </div>
      </div>
    </div>
    <button className='bg-mainBg text-white font-bold text-sm py-2 px-4 w-28 mt-10 md:-mt-20 rounded-lg'>LOREM</button>
  </section>
}
