import { useContext } from "react";
import {TransactionContext} from '../context/TransactionContext';
import  {shortenAddress}  from "../Utils/shortenAddress";

const TransactionCard= ({addressTo,addressFrom ,timestamp, message, keyword, amount, url}) =>{
    return (
        <div className="bg-[#181918] m-4 flex-1 
            2xl:min-w-[350px]
            2xl:max-w-[350px]
            sm:min-w-[270px]
            sm:max-w-[300px]
            flex-col p-3 rounded-md hover:shadow-2xl min-h-[252px]"
            >
            <div className="flex flex-col items-center w-full mt-3">
                    <div className="flex justify-start w-full mb-4 p-2">
                    <a href={`https://goerli.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
                        <p className="text-white text-base">From: {shortenAddress(addressFrom)}</p>
                    </a>
                    </div>

                    <div className="flex justify-start w-full mb-4 p-1">
                    <a href={`https://goerli.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
                        <p className="text-white text-base">To: {shortenAddress(addressTo)}</p>
                    </a>
                    </div>

                    <div className="flex justify-start w-full mb-4 p-1">
                        <p className="text-white text-base"> Amount: {amount} ETH</p>
                    </div>

                    <div className="flex justify-start w-full mb-6 p-2">
                        {message && (
                            <>
                                <br/>
                                <p className="text-white text-base"> Message :  {message} </p>
                            </>
                        )}
                    </div>
                    <div className="flex justify-start w-full mb-6 p-2">
                            
                        <p className="text-white text-base"> Time: {timestamp} </p>
                    </div>
                                      
            </div>
        </div>
       
    )

}

const Transactions = () =>{
    const { currentAccount, transactions }= useContext(TransactionContext);
    const {checkIfWalletIsConnected} = useContext(TransactionContext);
    return (
       <div className="flex w-full justify-center items-center 2xl :px-20 gradient-bg-transactions">
            <div className="flex flex-col md:p-12 py-12 px-4">
            {(() => {
                if (currentAccount) {
                    return (
                    <><h3 className="text-white text-3xl text-center my-2">Latest Transactions</h3>
                    <div className="flex flex-wrap justify-center items-center mt-10">
                    {[...transactions].reverse().map((transaction, i) => (
                        <TransactionCard key={i} {...transaction} />
                    ))}
                </div></>)
                } 
                else {
                    return  (<><h3 className="text-white text-3xl text-center my-2">Connect your account <br/>to see your latest transactions</h3></>)
                }
                })()}

            </div>
        </div>
    );
    
};
export default Transactions;