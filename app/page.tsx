import React from 'react'

const Home = () => {
  return (
    <div className='p-10 md:p-24 h-screen w-screen items-start flex flex-col justify-center gap-4'>
      <h2 className='text-white text-xl font-normal'>abbdulla zihaan</h2>

      <p className='text-sm text-[#808083] font-light leading-7'>
        hello, i&apos;m a software engineer living in the maldives with a keen interest in researching/learning <i className='text-white'>backend development</i>. and also am quite active in{' '}<a href="https://www.x.com/zihvvn" className='text-white underline underline-offset-4'>twitter/x</a>
      </p>

      <p className='text-sm text-[#808083] font-light'>source{' '}<a href="https://www.github.com/zihvvn" className='text-white underline underline-offset-4'>github</a></p>
      <p className='text-sm text-[#808083] font-light'>contact me{' '}<a href="https://www.t.me/zihvvn" className='text-white underline underline-offset-4'>telegram</a></p>
    </div>
  )
}

export default Home
