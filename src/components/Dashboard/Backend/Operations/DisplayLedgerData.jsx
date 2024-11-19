import { useEffect, useState } from "react";
import { fetchLedger } from "./FetchLedger"; 

function DisplayLedger() {
    const [ledger, setLedger] = useState([]);

    useEffect(() => {
        const getLedger = async () => {
            const data = await fetchLedger();
            setLedger(data);
        };
        getLedger();
    }, []);

    return (
        <table>
            <thead>
                <tr className="flex gap-32">
                    <th>ID</th>
                    <th>Depositer</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Remarks</th>
                </tr>
            </thead>
            <tbody>
                {ledger.map((entry) => (
                    <tr key={entry.id} className="flex gap-32">
                        <td>{entry.id}</td>
                        <td>{entry.depositer_name}</td>
                        <td>{entry.deposit_date}</td>
                        <td>{entry.amount}</td>
                        <td>{entry.remarks}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default DisplayLedger;
