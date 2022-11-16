import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSearch, BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill} from 'react-icons/ri';



const ServiceCard =({color, title, icon, subtitle}) =>(
    <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
        <div className={`w-10 h-10 rounded-full flex justify-center items-center  ${color}`}>
            {icon}
        </div>
        <div className='ml-5 flex flex-col flex-1'>
            <h3 className='mt-2 text-white text-lg'> {title}</h3>
            <p className='mt-2 text-white text-sm md:w-9/12'>{subtitle}</p>
        </div>
    </div>

);

const Services = () =>{
    return (
        <div className='flex flex-col md:flex-row justify-center items-center gradient-bg-services'>
            <div className='flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4'>
                <div className='flex-1 flex-col justify-start items-start'>
                    <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
                        Services that we<br/>continue to improve
                    </h1>

                </div>
            </div>
            
            <div className=' flex-col justify-start items-center'>
                
                <ServiceCard
                    color = "bg-[#2952e3]"
                    title ="Security "
                    icon ={<BsShieldFillCheck fontSize={21} className="text-white"/>}
                    subtitle = "Safety is our top most priority. Your money is save">
                        
                </ServiceCard>
                <ServiceCard
                    color = "bg-[#8945f8]"
                    title ="Send Crypto"
                    icon ={<BiSearchAlt fontSize={21} className="text-white"/>}
                    subtitle = "Send Cryptocurrency at low rate of exchange!!">
                        
                </ServiceCard>
                <ServiceCard
                    color = "bg-[#F84550]"
                    title ="Transactions"
                    icon ={<RiHeart2Fill fontSize={21} className="text-white"/>}
                    subtitle = "Your transaction is safe with us!!  Don't Worry!">
                        
                </ServiceCard>
                <br/><br/>
               

            </div>
        </div>
            
    );
    
}
export default Services;