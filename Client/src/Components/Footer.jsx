import logo from '../../images/Project_Journey_Whiteboard_in_Illustrative_Visual_Style__5_-removebg-preview.png';



 
const Footer = () =>{
    return (
        <div className=' w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer'>
            <div className='w-full flex sm:flex-row flex-col justify-betweern items-center my-4'>
                <div className='flex  flex-[0.5] justify-center items-right'>
                    <img src ={logo} alt="logo" className=' w-60'/>
                </div>
                <div className='flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full'>
                    <p className='text-white text-base text-center mx-2 cursor-pointer'>Market</p>
                    <p className='text-white text-base text-center mx-2 cursor-pointer'>Exchange</p>
                    <p className='text-white text-base text-center mx-2 cursor-pointer'>Wallets</p>
                </div>
            </div>
            <div className='flex justify-center items-center flex-col mt-5'>
                <p className='text-white text-sm text-center'> Come Join Us!</p>
                <p className='text-white text-sm text-center'> info@abes.ac.in </p>
            </div>
            <div className='sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5'/>
            <br/>
            <div className='text-white sm:w-[90%] w-full  flex justify-center items-center'>@CryptoExchange 2022</div>
            <div className='text-white sm:w-[90%] w-full  flex justify-center items-center'>All Rights Reserved</div>
        </div>
    )
    
}
export default Footer;                      