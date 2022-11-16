// import { AiFillPlayCircle } from "react-icons/ai";

import React, {useContext} from 'react';
import { SiEthereum} from 'react-icons/si';
import {BsInfoCircle} from 'react-icons/bs';
import {TransactionContext} from '../context/TransactionContext';
import {shortenAddress}  from '../Utils/shortenAddress';


const CommonStyle = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({placeholder,name,value,type,handleChange}) =>(
    <input
    placeholder={placeholder}
    type={type}
    step="0.00001"
    value ={value}
    onChange= {(e) => handleChange (e,name)}
    className = "my-2 w-full rounded-sm p-2 ouline-none bg-transparent text-white order-none text-sm white-glassmorphism"
    />
);
const Welcome = () =>{
    const {connectWallet , currentAccount, formData, sendTransaction, handleChange, isloading}  = useContext(TransactionContext);
    const handleSubmit =(e)=>{
        const { addressTo, amount, keyword, message } = formData;
        e.preventDefault();
        if (!addressTo || !amount || !keyword || !message) return;
        sendTransaction();
    }

    return (
        <div className="flex w-full justify-center item-center">
            <div className=" flex md:flex-row flex-col items-start justify-between md:p-10 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col md:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">Send Cryto<br/> Across the World!</h1>
                    <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                        Explore the crypto world. Buy and sell crytocurrency easily on Cryto.
                    </p>
                    
                    {!currentAccount && (
                        <button type ="button" onClick={connectWallet} className ='text-white  mt-10 border-[1px] p-3 border-[#3d4f7c] rounded-full cursor-pinter hover:bg-[#2b2e4d]'>
                        <p className="text-white text-base font-semibold">Connect Wallet</p>
                    </button>
                    )}
                    
                    <div className="flex-col grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
                        <div className={`rounded-tl-2xl ${CommonStyle}`}>
                            Reliability
                        </div>
                        <div className={CommonStyle}> Security</div>
                        <div className={`rounded-tr-2xl ${CommonStyle}`}>
                            Etherum
                        </div>
                        <div className= {`rounded-bl-2xl ${CommonStyle}`}> Web 3.0</div>
                        <div className={CommonStyle}> Cryto Transactions</div>
                        <div className={`rounded-br-2xl ${CommonStyle}`}>
                            BlockChain
                        </div>
                     
                    </div>
                </div>
                <div className="flex-col flex-1 items-center justify-left w-full md:mt-0 mt-10 md:ml-40">
                    <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-96 w-full my-5 eth-card white-glassmorphism">
                        <div className=" flex justify-between flex-col w-full h-full ">
                          <div className="flex justify-between items-start"  >
                            <div className=" w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                                <SiEthereum fontSize={21} color ="#fff"/>
                            </div>
                            <BsInfoCircle fontSize={17} color = "#fff" ></BsInfoCircle>
                          </div>
                          <div>
                            {currentAccount?(
                                <p className="text-black font-bold text-sm">
                                    {shortenAddress(currentAccount)}
                            </p>): (<p className="text-black font-bold text-sm"> Connect Wallet</p>)}
                            <p className='text-black font-bold text-lg mt-1'>
                                Ethereum Balance
                            </p>
                          </div>
                        </div>
                    </div>
                    <div className='mr-7 p-7 sm:w-96 w-full flex-2 flex-col justify-center items-start blue-glassmorphism'>
                        <Input placeholder = "addressTo" name= "addressTo" type = "text" handleChange = {handleChange}/>
                        <Input placeholder = "Amount (ETH)" name= "amount" type = "number" handleChange = {handleChange}/>
                        <Input placeholder = "Keyword (Gif)" name= "keyword" type = "text" handleChange = {handleChange}/>
                        <Input placeholder = "Enter Message" name= "message" type = "text" handleChange = {handleChange}/>
                        
                        {!currentAccount ? (
                            <button type ="button" onClick={connectWallet} className =
                            'text-white w-full mt-2 border-[1px] p-3 border-[#3d4f7c] rounded-full cursor-pinter hover:bg-[#252944]'>
                            <p className="text-white text-base font-semibold">Connect Wallet</p>
                            </button>
                            
                            ):(
                            
                            <button type ="button" onClick={handleSubmit} className ='text-white w-full mt-2 border-[1px] p-3 border-[#3d4f7c] rounded-full cursor-pinter hover:bg-[#252944]'>
                            <p className="text-white text-base font-semibold">Send Now</p>
                            </button>
                        )}
                        <br/>
                    </div>
                    <br/>
                    <br/>

                </div>
            </div>
        </div>
    )
    
}
export default Welcome;