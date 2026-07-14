"use client";

import { ChangeEvent, useState } from "react";
import useFetch from "./useFetch";
import useDebounce from "./useDebounce";

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
const SEARCH_DEBOUNCE_DELAY_MILLISECONDS = 400;

const UserSearchComponent = () => {
    const [rawSearchInputValue, setRawSearchInputValue] = useState<string>("");

    const { fetchedData: userList, isLoading, errorMessage } = useFetch<JsonPlaceholderUser[]>(
        JSONPLACEHOLDER_USERS_URL
    );

    const debouncedSearchTerm = useDebounce(rawSearchInputValue, SEARCH_DEBOUNCE_DELAY_MILLISECONDS);

    const handleSearchInputChange = (searchChangeEvent: ChangeEvent<HTMLInputElement>): void => {
        setRawSearchInputValue(searchChangeEvent.target.value);
    };

    const filteredUserList = (userList ?? []).filter((user) =>
        user.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-[#2d2d7f] mb-1">Search Users</h2>
            <p className="text-xs text-gray-400 mb-4">useDebounce + useFetch hooks</p>

            <input
                type="text"
                value={rawSearchInputValue}
                onChange={handleSearchInputChange}
                placeholder="Search by name..."
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d2d7f] mb-4"
            />

            {debouncedSearchTerm !== rawSearchInputValue && (
                <p className="text-xs text-gray-400 mb-2">Waiting for you to stop typing...</p>
            )}

            {isLoading && (
                <p className="text-gray-500 text-sm">Loading users...</p>
            )}

            {errorMessage && (
                <p className="text-red-500 text-sm">Error: {errorMessage}</p>
            )}

            {!isLoading && !errorMessage && (
                <>
                    <p className="text-xs text-gray-400 mb-2">
                        {filteredUserList.length} result{filteredUserList.length !== 1 ? "s" : ""}
                        {debouncedSearchTerm ? ` for "${debouncedSearchTerm}"` : ""}
                    </p>

                    {filteredUserList.length === 0 ? (
                        <p className="text-gray-500 text-sm">No users match your search.</p>
                    ) : (
                        <ul className="divide-y divide-gray-100">
                            {filteredUserList.map((user) => (
                                <li key={user.id} className="py-3">
                                    <p className="text-gray-800 font-medium text-sm">{user.name}</p>
                                    <p className="text-gray-500 text-xs">{user.email} · {user.phone}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            )}
        </div>
    );
};

export default UserSearchComponent;
