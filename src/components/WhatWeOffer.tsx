import { FaPlay } from "react-icons/fa";

const WhatWeOffer=()=>{

    interface OfferType {
        title:string,
        desc:string
    }
    
    const Offer =({title, desc}: OfferType)=>{
        return(
            <div className='bg-white'>
            <div className='px-[20px] py-[20px]'>
              <div className='font-bold text-xl'>
                <a className="hover:text-red-500" href="">{title}</a>
              </div>
              <div className='max-w-xs text-gray-500'>
                {desc}
              </div>
              <div className="flex items-center ">
                <div className="font-bold text-sm hover:text-orange-500">Read more</div> 
                <div className="text-orange-500 pt-[5px] pl-[5px] "><FaPlay size={10} /></div>
              </div>
            </div>
        </div>
        )
      }

    return(
      <div className='bg-gray-200 px-[50px] py-[50px] '>
        <div className='text-center text-4xl font-bold pb-[20px]'>What We Offer</div>
        <ul className='max-w-screen-xl mx-auto flex block justify-between'>
          <li>
            <img src="Images/lighting upgrades.jpg" alt="Lighting Upgrades" />
            <Offer title='Lighting Upgrades' desc='Electrical panel maintenance, therefore, should be part of your regular routine.'/>
          </li>
          <li>
            <img src="Images/electrical repairs.jpg" alt="Electrical Repairs" />
            <Offer title='Electrical Repairs' desc='Electrical repairs should always be handled by a professional electrician.'/>
          </li>
          <li>
            <img src="Images/surge protection.jpg" alt="Surge Protection" />
            <Offer title='Surge Protection' desc='An electrical surge can happen for a number of reasons, including lightning strikes..'/>
          </li>
        </ul>
    </div>
    )
}
export default WhatWeOffer