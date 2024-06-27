import { Card } from "@repo/ui/card";

export const OnRampTransactions = ({ transactions }: { transactions: { time: Date; amount: number; status: string; provider: string }[] }) => {
    if (!transactions.length) {
        return (
            <Card title="Recent Transactions">
                <div className="text-center pb-8 pt-8">
                    No actions
                </div>
            </Card>
        );
    }

    return (
        <Card title="Transactions History">
            <div className="pt-2">
                {transactions.map((t, index) => (
                    <div key={index} className="flex justify-between  py-2">
                        <div>
                            <div className="text-sm text-green-500">
                                Received
                            </div>
                            <div className="text-slate-600 text-xs">
                                {`${t.time.toLocaleDateString()} ${t.time.toLocaleTimeString()}`}
                            </div>
                        </div>
                        <div className="flex flex-col justify-center text-green-700">
                            + Rs {t.amount / 100}
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
};
