"use client"; // This is a client component 👈🏽
//altlokal_menu_type BIG


import React, { useEffect, useState } from 'react'
import { client } from "../lib/pocketbase"
import Image from "next/image";

export default function Category() {
    type CategoryRecord = {
        collectionId: string;
        collectionName: string;
        created: string;
        id: string;
        kommentar: string;
        sold_out: boolean;
        image: string;
        type: string;
        updated: string;
        expand: Record<string, unknown>;
    };

    // Now when we initialize the state, we give it the correct type.
    const [categorys, setCategorys] = useState<CategoryRecord[]>([]);
    const [imageUrls, setImageUrls] = useState<Record<string, string>>({});


    useEffect(() => {
        const fetchCategorys = async () => {
            try {
                const res = await client.collection("altlokal_menu_type").getFullList();
                const urls = {};
                for (let category of res) {
                    let url = client.files.getUrl(category, category.image, { 'thumb': '500x750' });
                    try {
                        const response = await fetch(url);
                        if (!response.ok) {
                            // If the response is not ok (status code is not 2xx), the image doesn't 
                            url = "https://analytics.minfuel.com/api/files/n4sfebjxm43jxvc/vryx5af99g6nqrx/icon_image_not_found_free_vector_259BQHTtI2.jpg";
                            throw new Error("Image not found");
                        }
                    } catch {
                        // If an error is thrown when trying to fetch the image, use the default image
                        url = "https://analytics.minfuel.com/api/files/n4sfebjxm43jxvc/vryx5af99g6nqrx/icon_image_not_found_free_vector_259BQHTtI2.jpg";
                    }
                    urls[category.id] = url;
                }

                setCategorys(res);
                setImageUrls(urls);
            } catch (err) {
                console.error(err);
            }
        }
        fetchCategorys();

    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {categorys.map((category) => (
                <div key={category.id} className="flex bg-white  flex-col justify-between rounded-lg overflow-hidden shadow-lg">
                    <Image src={imageUrls[category.id]} alt="Food category" layout="responsive" width={500} height={300} objectFit="cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">{category.type}</h2>
                        <p className="text-base text-gray-500 mb-2">{category.kommentar}</p>
                        <div className="mt-2">
                            <span className={`inline-block py-1 px-2 rounded ${category.sold_out ? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'} text-sm font-medium mb-2`}>{category.sold_out ? 'Sold Out' : 'In Stock'}</span>
                            <div className="flex space-x-2 mt-2">
                                <button className="flex-1 py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200 ease-in-out">
                                    Hent Selv
                                </button>
                                <button className="flex-1 py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200 ease-in-out">
                                    Hjem Levert
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
