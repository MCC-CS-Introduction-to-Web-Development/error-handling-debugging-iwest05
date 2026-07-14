"use client";

import { useState } from "react";
import useForm from "./useForm";

interface SubmittedContactRecord {
    name: string;
    email: string;
}

const ContactFormComponent = () => {
    const [submittedContactRecord, setSubmittedContactRecord] = useState<SubmittedContactRecord | null>(null);

    const { formValues, handleChange, handleSubmit, resetFormToInitialValues } = useForm({
        name: "",
        email: "",
    });

    const onContactFormSubmit = (submittedValues: Record<string, string>): void => {
        setSubmittedContactRecord({ name: submittedValues.name, email: submittedValues.email });
        resetFormToInitialValues();
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-[#2d2d7f] mb-1">Contact Form</h2>
            <p className="text-xs text-gray-400 mb-4">useForm hook</p>

            <form onSubmit={handleSubmit(onContactFormSubmit)} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d2d7f]"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d2d7f]"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-[#2d2d7f] text-white px-6 py-2 rounded font-semibold text-sm hover:bg-[#1f1f5a] transition-colors"
                >
                    Submit
                </button>
            </form>

            {submittedContactRecord && (
                <div className="mt-4 p-3 bg-green-50 rounded border border-green-200">
                    <p className="text-green-700 text-sm font-semibold mb-1">Submitted successfully!</p>
                    <p className="text-green-600 text-sm">Name: {submittedContactRecord.name}</p>
                    <p className="text-green-600 text-sm">Email: {submittedContactRecord.email}</p>
                </div>
            )}
        </div>
    );
};

export default ContactFormComponent;
