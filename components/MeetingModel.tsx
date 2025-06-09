import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface MeetingModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    buttonText?: string;
    className?: string;
    handleClick?: () => void;
    image?: string;
    buttinIcon?: React.ReactNode;
    children?: React.ReactNode;
}



const MeetingModel = ({ isOpen, onClose, title, buttonText, className, handleClick, image, buttinIcon, children }: MeetingModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogTitle>

                <DialogContent className="flex w-full max-w-[520px]
                flex-col gap-6 border-none bg-[#393939] px-6 py-9
                Itext-white">
                    <div className='flex flex-col gap-6'>
                        {image && (
                            <div className='flex justify-center'>
                                <img src={image} alt="image" width={72} height={72} />
                            </div>
                        )}
                        <h1 className={cn('text-3xl text-white font-bold leading-[42px]', className)}>{title}</h1>
                        {children}
                        <button
                            className='w-full rounded-[10px] bg-[#10B981] px-4 py-3 text-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:ring-offset-2 hover:bg-[#0f9c6d] '
                            onClick={handleClick}
                        >
                            {buttinIcon && <img src={buttinIcon as string} alt="icon"  width={13} height={13} />} &nbsp;
                            {buttonText || 'Start Meeting'}
                            </button>
                    </div>

                </DialogContent>
            </DialogTitle>
        </Dialog>
    )
}

export default MeetingModel
