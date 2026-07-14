"use client";

import useFetch from "./useFetch";

interface JsonPlaceholderUser {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: {
        name: string;
    };
}

const JSONPLACEHOLDER_USERS_URL = "https://jsonplaceholder.typicode.com/users";

const UserListComponent = () => {
    const { fetchedData: userList, isLoading, errorMessage } = useFetch<JsonPlaceholderUser[]>(
        JSONPLACEHOLDER_USERS_URL
    );

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-[#2d2d7f] mb-1">User Directory</h2>
            <p className="text-xs text-gray-400 mb-4">useFetch hook</p>

            {isLoading && (
                <p className="text-gray-500 text-sm">Loading users...</p>
            )}

            {errorMessage && (
                <p className="text-red-500 text-sm">Error: {errorMessage}</p>
            )}

            {!isLoading && !errorMessage && userList && (
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="bg-[#2d2d7f] text-white">
                            <tr>
                                <th className="text-left px-4 py-3 font-semibold">Name</th>
                                <th className="text-left px-4 py-3 font-semibold">Email</th>
                                <th className="text-left px-4 py-3 font-semibold">Company</th>
                                <th className="text-left px-4 py-3 font-semibold">Website</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userList.map((user, userRowIndex) => (
                                <tr
                                    key={user.id}
                                    className={userRowIndex % 2 === 0 ? "bg-white" : "bg-[#f6f5f9]"}
                                >
                                    <td className="px-4 py-3 text-gray-800 font-medium">{user.name}</td>
                                    <td className="px-4 py-3 text-gray-500">{user.email}</td>
                                    <td className="px-4 py-3 text-gray-500">{user.company.name}</td>
                                    <td className="px-4 py-3 text-gray-500">{user.website}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default UserListComponent;
