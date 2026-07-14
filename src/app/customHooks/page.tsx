import Link from "next/link";
import ContactFormComponent from "../../components/10_Custom_React_Hooks_+_E2E_Testing/ContactFormComponent";
import UserListComponent from "../../components/10_Custom_React_Hooks_+_E2E_Testing/UserListComponent";
import UserSearchComponent from "../../components/10_Custom_React_Hooks_+_E2E_Testing/UserSearchComponent";

export default function CustomHooksPage() {
    return (
        <main className="min-h-screen bg-[#f6f5f9] px-4 py-16">
            <div className="w-full max-w-3xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center text-[#2d2d7f] text-sm font-medium mb-6 hover:underline"
                >
                    ← Back to Home
                </Link>
                <h1 className="text-3xl font-bold text-[#2d2d7f] mb-2">Custom React Hooks</h1>
                <p className="text-gray-500 text-sm mb-8">Assignment 10</p>

                <div className="space-y-8">
                    <ContactFormComponent />
                    <UserListComponent />
                    <UserSearchComponent />
                </div>
            </div>
        </main>
    );
}
