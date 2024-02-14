
"use client"
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useState } from 'react';
import { FormDescription } from '@/components/ui/form';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';



const CreatePromotion = () => {


    const formField = [
        { label: "Promotion title", placeholder: "E.g Shoprite" },
        { label: "Promotion name", placeholder: "E.g Shoprite" },
        { label: "Real price", placeholder: "E.g Shoprite" },
        { label: "Promotion price", placeholder: "E.g Shoprite" },
        { label: "Promotion title", placeholder: "E.g Shoprite" },
        { label: "Product category", placeholder: "E.g Shoprite" },
    ]
    return (
        <div className='p-6'>
            <div className="flex items-center pb-6">

                <Link href="/merchant/promotions">
                    <h3 className="text-sm">Promotion & Offer </h3>
                </Link>
                <ChevronRight size={18} />
                <h3 className="text-sm">Create a new offer </h3>
            </div>
            <h3 className='font-semibold text-lg '>Create a new offer</h3>
            <form className='py-4'>
                <div className='flex gap-6 flex-wrap'>
                    {formField.map((item, index) => (
                        <div className='flex flex-col w-1/3' key={index}>
                            <Label htmlFor="email" className='py-4'>{item.label}</Label>
                            <Input placeholder={item.placeholder} />
                        </div>
                    ))}


                </div>
                <div className='flex flex-col py-4'>
                    <Label htmlFor="email" className='py-4'>Promotion description</Label>
                    <textarea
                        id="message"
                        name="message"
                        className='w-2/3 h-48 border p-4'
                        required
                        placeholder='E.g Shoprite'
                    />
                </div>
                <div className='w-2/3 flex float-right'>
                    <Button
                        type="button"
                        variant="ghost"
                        size="lg"
                        className="bg-black  text-white rounded-3xl hover:bg-black-100 hover:text-white"
                    >
                        Continue
                    </Button>
                </div>
            </form>
        </div>
    );
}


export default CreatePromotion;