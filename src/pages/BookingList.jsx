import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

const BookingList = () => {

    const { user } = useContext(AuthContext)
    const [displayData, setDisplayData] = useState([])
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/checkout?email=${user?.email}`)
            setDisplayData(data)
        }
        getData()
    }, [])


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            displayData.map(i => <tr key={i._id}>
                                <th>
                                    <button className="btn btn-circle btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask w-[150px] h-[120px]">
                                                <img src={i.img} alt="Avatar Tailwind CSS Component" className="rounded-md" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-xl">{i.serviceName}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {i?.price}
                                </td>
                                <td>{i?.date}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Pending</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookingList;