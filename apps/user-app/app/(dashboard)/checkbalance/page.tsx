import prisma from "@repo/db/client";
import { BalanceCard } from "../../../components/BalanceCard";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";


async function getBalance() {
    const session = await getServerSession(authOptions);
    const balance = await prisma.balance.findFirst({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    return {
        amount: balance?.amount || 0,
        locked: balance?.locked || 0
    };
}
const Checkbalance = async () => {
    const balance = await getBalance();

    return (
        <div className="w-screen">
            <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
                Check Balance
            </div>
            <div className="grid grid-cols-2 gap-4 p-4">
                <div>
                    <BalanceCard amount={balance.amount} locked={balance.locked} />
                </div>
            </div>
        </div>
    );
};

export default Checkbalance;