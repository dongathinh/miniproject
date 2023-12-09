
const Footer = () => {

    type ToAssociate ={
      infomation?: string;
      content?:string;
    }

    const ContactInformation = ({infomation,content} : ToAssociate) => {
      return (
        <div >
            <strong className="text-[17px] text-white">{infomation}</strong>
            <p className="text-[#D6D6D6] mb-2">{content}</p>
        </div>
      )
    }

    type Frame ={
      Duongdan?:string;
      tuvu:string;
    }

    const FrameFooter = ({Duongdan,tuvu} : Frame) => {
    return (
      <div className="">
          <a className="px-[0.6em] pt-[0.64em] pb-[0.54em] mr-[0.4rem] mb-[0.8rem] border-solid border border-gray-800 
          text-white text-[11px] inline-block no-underline" href={Duongdan}>{tuvu}</a>
      </div>
    )
    }
  
  return (
    <div className="bg-slate-900 ">
        <div className="container max-w-screen-xl mx-auto">
            <div className="flex ">
                  <div className="flex-1 my-4 mr-[31px] w-[25%]">
                    <h6 className="text-white pb-1">ABOUT US</h6>
                    <ContactInformation content="Electrician
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Duis nec vestibulum magna, et dapibus lacus.
                         Duis nec vestibulum magna, et dapibus lacus."/>
                  </div>
                  <div className="flex-1 my-4 mr-[31px] w-[25%]">
                    <h6 className="text-white pb-1">CONTACT INFO</h6>
                    <ContactInformation infomation="Address:" content="123 Street Name, City, England"/>
                    <ContactInformation infomation="Phone:" content="(123) 456-7890"/>
                    <ContactInformation infomation="Email:" content="mail@example.com"/>
                    <ContactInformation infomation="Working Days/Hours:" content="Mon - Sun / 9:00 AM - 8:00 PM"/>
                  </div>
                  <div className="flex-1 my-4 mr-[31px] w-[25%]">
                    <h6 className="text-white pb-1">CUSTOMER SERVICE</h6>
                    <ContactInformation content="Help & FAQs"/>
                    <ContactInformation content="Order Tracking"/>
                    <ContactInformation content="Shipping & Delivery"/>
                    <ContactInformation content="Orders History"/>
                    <ContactInformation content="Advanced Search"/>
                    <ContactInformation content="Corporate Sales"/>
                    <ContactInformation content="Privacy"/>
                  </div>
                  <div className="flex-1 my-4 w-[25%]">
                    <h6 className="text-white pb-1">POPPULAR TAGS</h6>
                    <div className="flex flex-wrap">
                        <FrameFooter tuvu="Bag" Duongdan=""/>
                        <FrameFooter tuvu="Black" Duongdan=""/>
                        <FrameFooter tuvu="Blue" Duongdan=""/>
                        <FrameFooter tuvu="Clothes" Duongdan=""/>
                        <FrameFooter tuvu="Fashion" Duongdan=""/>
                        <FrameFooter tuvu="Hub" Duongdan=""/>
                        <FrameFooter tuvu="Jean" Duongdan=""/>
                        <FrameFooter tuvu="Shirt" Duongdan=""/>
                        <FrameFooter tuvu="Skirt" Duongdan=""/>
                        <FrameFooter tuvu="Sports" Duongdan=""/>
                        <FrameFooter tuvu="Sweater" Duongdan=""/>
                        <FrameFooter tuvu="Winter" Duongdan=""/>
                    </div>
                  </div>     
            </div>
            <hr className="text-white"/>
            <div className="text-white text-center py-3" >© Aptech eCommerce. 2022. All Rights Reserved</div>
        </div>
    </div>
  )
}

export default Footer