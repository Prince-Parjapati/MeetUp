'use client'
import { Sheet, SheetContent, SheetClose, SheetTrigger} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { usePathname } from 'next/navigation';
import Link from "next/link"
import { cn } from '@/lib/utils'
import Image from "next/image"



const MobileNav = () => {

    const pathname = usePathname();

    return (
        <section className='w-full max-w-[264px]'>
            <Sheet>
                <SheetTrigger asChild><Image src='icons/hamburger.svg'
                    width={36}
                    height={36}
                    alt="hamburger icon"
                    className="cursor-pointer sm:hidden"
                /></SheetTrigger>
                <SheetContent side="left" className="border-none bg-[#212121]">
                    <Link href="/" className='flex items-center gap-1'>
                        <Image
                            src="/icons/logo.svg"
                            width={32}
                            height={32}
                            alt="meetup logo"
                            className='max-sm:size-10'
                        />
                        <p className='text-[26px] font-extrabold text-white'>MeetUp</p>
                    </Link>
                    <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-auto">
                        <SheetClose asChild>
                            <section className="flex h-full flex-col gap-6 pt-16 text-white">
                                {sidebarLinks.map((link) => {
                                    const isActive = pathname === link.route ;
                                    return (
                                        <SheetClose asChild key={link.route}>

                                            <Link href={link.route} key={link.label} className={cn('flex gap-4 items-center p-4 ml-5 rounded-lg w-full max-w-60',
                                                { 'bg-blue-500': isActive })}>
                                                <Image
                                                    src={link.imgUrl}
                                                    alt={link.label}
                                                    width={20}
                                                    height={20}
                                                />
                                                <p className='font-semibold'>
                                                    {link.label}
                                                </p>
                                            </Link>
                                        </SheetClose>
                                    )
                                })
                                }
                            </section>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNav
