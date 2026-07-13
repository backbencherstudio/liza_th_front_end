'use client'

import DashboardPageTitle from '@/components/reusable/DashboardPageTitle'
import CustomButton from '@/components/reusable/CustomButton'
import { Plus } from 'lucide-react'
import CustomModal from '@/components/reusable/CustomModal'
import { useState } from 'react';
import CreateDiscountForm from './CreateDiscountForm'

export default function DiscountPageTitle() {

    const [open, setOpen] = useState(false);
    const [selectedDiscount, setSelectedDiscount] = useState<any>(null);

    // Open Create Modal
    const handleCreate = () => {
        setSelectedDiscount(null);   // Clear any previous selection
        setOpen(true);
    };

    // Open Edit Modal (you can call this from table later)
    const handleEdit = (discount: any) => {
        setSelectedDiscount(discount);
        setOpen(true);
    };

    return (
        <div className='flex items-center justify-between'>

            <DashboardPageTitle
                title="Discount & Promotions"
                description="Manage your discount promotions and track their performance"
            />

            <CustomButton onClick={handleCreate}>
                <span className='flex items-center gap-2'>
                    <Plus size={18} />
                    Create Discount
                </span>
            </CustomButton>

            <CustomModal
                open={open}
                onOpenChange={setOpen}
                title={selectedDiscount ? "Edit Discount" : "Create Discount"}
                size="lg"
            >
                <CreateDiscountForm
                    plan={selectedDiscount ?? undefined}
                    onSuccess={() => {
                        setOpen(false);
                        setSelectedDiscount(null);
                    }}
                />
            </CustomModal>
        </div>
    )
}