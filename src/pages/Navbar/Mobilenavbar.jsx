import { ListIcon, StoreIcon ,CloseIcon } from '@/utils/appIcons'
import React ,{useState}from 'react'

const Mobilenavbar = () => {
  const [search, setsearch] = useState(false);

  return (
    <div>Mobilenavbar

    <div className='flex justify-around bg-red-700 w-full'>

 
    
<div className='flex '>
    <StoreIcon height={36} width={36} />
    <h1 className='font-semibold text-2xl'>STORE</h1>
</div>


<div className="flex gap-4">
          <div>
            <img
              class="w-10 h-10"
              src="/search.png"
              onClick={() => {
                setsearch(true);
              }}
            />
          </div>
          <div>
            <img class="w-10 h-10" src="shopping-cart.png" />
          </div>
          <div>
            <img class="w-10 h-10" src="/like.png" />
          </div>
          <div>
            <img
              class="w-10 h-10"
              src="https://www.prosportsinn.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fman.0920907a.png&w=640&q=75"
            />
          </div>
        <ListIcon height={20} width={20}/>

        </div>


        {search && (
        <div className="fixed backdrop-blur-sm bg-black/70 z-10 h-full w-full top-0 left-0 right-0 bottom-0 m-auto text-end px-24  ">
          <div
            className="flex justify-end mt-12 ml"
            onClick={() => setsearch(false)}
          >
            <CloseIcon />
          </div>
          <div className="fixed z-50 top-0 left-0 right-0 bottom-0 w-[40%] bg-white  shadow-2xl m-auto justify-center border rounded-2xl h-[670px] items-center ">
            <div className="w-[100%] p-5 m-auto bg-red-00  ">
              <div className=" flex justify-center rounded-xl">
                <input
                  className="border w-[600px] bg-slate-100 h-12 rounded-md text-xl font-[sans-sarif] pl-6  "
                  type="text"
                  placeholder="serach..."
                />
              </div>
            </div>
          </div>
        </div>
      )}




        </div>
    </div>
  )
}

export default Mobilenavbar