"use client";

import { useGetAllAlbumsQuery } from "@/__generated__/graphql";

const AlbumGraphQL = () => {
    const { data, loading, error } = useGetAllAlbumsQuery();

    if (loading) {
        return <p className="p-8 text-center text-gray-500">Loading albums via Apollo...</p>;
    }

    if (error) {
        return <p className="p-8 text-center text-red-500">GraphQL error: {error.message}</p>;
    }

    const albumList = data?.albums?.data ?? [];

    return (
        <div>
            <h1 className="text-2xl font-bold text-[#2d2d7f] mb-6">
                Albums via Apollo GraphQL ({albumList.length})
            </h1>

            <div className="flex flex-wrap gap-4">
                {albumList.map((album) => {
                    if (!album) return null;

                    return (
                        <div
                            key={album.id}
                            className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 w-52 flex flex-col gap-2"
                        >
                            <p className="text-xs text-gray-400">
                                Album ID {album.id} · User {album.user?.id}
                            </p>
                            <p className="text-sm font-medium text-gray-800 capitalize leading-snug">
                                {album.title}
                            </p>
                            <p className="text-xs text-[#2d2d7f] font-semibold">
                                {album.user?.name}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AlbumGraphQL;
