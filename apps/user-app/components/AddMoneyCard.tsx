"use client"
import { useState } from "react";
import { createOnRampTransaction } from "../app/lib/actions/createOnrampTransaction";

const SUPPORTED_BANKS = [{
    name: "HDFC Bank",
    redirectUrl: "https://netbanking.hdfcbank.com"
}, {
    name: "Axis Bank",
    redirectUrl: "https://www.axisbank.com/"
},{
    name: "SBI Bank",
    redirectUrl: "https://www.sbibank.com/"
 },{
    name: "Indian Bank",
    redirectUrl: "https://www.indianbank.com/"
}];

export const AddMoney = () => {
    const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl);
    const [provider, setProvider] = useState(SUPPORTED_BANKS[0]?.name || "");
    const [value, setValue] = useState(0);

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-8">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center text-blue-500">Add Money</div>
                <div className="w-full mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                        Amount
                    </label>
                    <input 
                        id="amount"
                        type="number"
                        placeholder="Rs. 100"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={(e) => setValue(Number(e.target.value))}
                    />
                </div>
                <div className="w-full mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bank">
                        Bank
                    </label>
                    <select
                        id="bank"
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        onChange={(e) => {
                            const selectedBank = SUPPORTED_BANKS.find(x => x.name === e.target.value);
                            setRedirectUrl(selectedBank?.redirectUrl || "");
                            setProvider(selectedBank?.name || "");
                        }}
                    >
                        {SUPPORTED_BANKS.map((bank) => (
                            <option key={bank.name} value={bank.name}>{bank.name}</option>
                        ))}
                    </select>
                </div>
                <div className="flex justify-center pt-4">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={async () => {
                            await createOnRampTransaction(provider, value);
                            window.location.href = redirectUrl || "";
                        }}
                    >
                        Add Money
                    </button>
                </div>
            </div>
        </div>
    );
};
