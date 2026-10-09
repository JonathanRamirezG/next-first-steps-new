import type { Metadata } from "next";

export const metadata : Metadata = {
 title: 'SEO Title',
 description: 'SEO Title',
 keywords: ['Contact Page', 'Jonathan', 'next']
};

export default function ContactPage(){
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}