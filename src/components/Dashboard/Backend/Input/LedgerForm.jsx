import { useState } from "react";
import Modal from "./Modal";
import { saveToLedger } from "../Operations/SaveToLedger";

function LedgerForm() {
    const [formData, setFormData] = useState({
        depositer_name: "",
        deposit_date: "",
        amount: "",
        remarks: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await saveToLedger(formData); // Call the API function
        if (res.error) {
            alert("Error: " + res.error.message);
        } else {
            alert("Transaction added successfully!");
            setModalOpen(false);
        }
    };

    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <button onClick={handleOpenModal} className="bg-green-400 w-28 py-2 rounded-md text-center ">
                New Entry
            </button>

        <Modal isOpen={isModalOpen} onClose={handleCloseModal}> 
            <form className="flex flex-col text-start" onSubmit={handleSubmit}>
                <label className="font-semibold">Name of Depositer:</label>
                <select className="border-[2px] border-slate-900 h-12 mb-5" name="depositer_name" value={formData.depositer_name} onChange={handleChange} required>
                    <option value="">Select Member</option>
                    <option value="Abhimanyu Chaudhary">Abhimanyu Chaudhary</option>
                    <option value="Abhinav Anand">Abhinav Anand</option>
                    <option value="Ajit Kumar Yadav">Ajit Kumar Yadav</option>
                    <option value="Amrit Bikram Sah">Amrit Bikram Sah</option>
                    <option value="Bikash Shrestha">Bikash Shrestha</option>
                    <option value="Krishna Chandra Mandal">Krishna Chandra Mandal</option>
                    <option value="Kunal Mishra">Kunal Mishra</option>
                    <option value="Prem Kant Sharma">Prem Kant Sharma</option>
                    <option value="Rajat Prasad Gupta">Rajat Prasad Gupta</option>
                    <option value="Rajesh Sada">Rajesh Sada</option>
                    <option value="Ramji Sada">Ramji Sada</option>
                    <option value="Ravi Shah">Ravi Shah</option>
                </select>
                <label className="font-semibold">Date of Deposit:</label>
                <input className="border-[2px] border-slate-900 h-12 mb-5" type="date" name="deposit_date" value={formData.deposit_date} onChange={handleChange} required />
                <label className="font-semibold">Amount (Base + Late Fine):</label>
                <input className="border-[2px] border-slate-900 h-12 mb-5" type="number" name="amount" value={formData.amount} onChange={handleChange} required />
                <label className="font-semibold">Remarks:</label>
                <input className="border-[2px] border-slate-900 h-20 mb-5" type="text" name="remarks" value={formData.remarks} onChange={handleChange} />
                <button className="border-[2px] bg-green-400 h-12" type="submit">Add Transaction</button>
            </form>
        </Modal>
        </div>
    );
}

export default LedgerForm;
