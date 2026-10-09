import type { Metadata } from "next";

export const metadata : Metadata = {
 title: 'Pricing Page',
 description: 'Pricing Description',
 keywords: ['Pricing Page', 'Jonathan', 'next']
};

export default function PricingPage(){
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}