
import { AddMoney } from "../../../components/AddMoneyCard";



export default async function TransferToWallet() {

    return (
        <div className="flex items-center justify-center min-h-screen w-full">
            <div className="text-center">
                <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
                    Transfer To Your Wallet
                </div>
                <div className="p-4">
                    <AddMoney />
                </div>
            </div>
        </div>
    );
}
