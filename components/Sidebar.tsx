'use client'
import React from 'react'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils'
import Image from 'next/image';
const Sidebar = () => {

    const pathname = usePathname();

    return (
        <div>
            <section className='sticky left-0 top-0 flex h-screen w-fit flex-col
        justify-between bg-gradient-to-b from-[#474d5e] to-[#212121] p-6 pt-28 text-white max-sm:hidden lg:w-[264px]'>
                <div className='flex flex-col gap-6'>

                    {sidebarLinks.map((link) => {
                        const isActive =
                            (link.route === '/' && pathname === '/') ||
                            (link.route !== '/' && pathname.startsWith(link.route));
                        return (<Link href={link.route} key={link.label} className={cn('flex gap-4 items-center p-4 rounded-lg justify-start',
                            { 'bg-blue-500': isActive })}>
                            <Image
                                src={link.imgUrl}
                                alt={link.label}
                                width={24}
                                height={24}
                            />
                            <p className='text-lg font-semibold max-lg:hidden'>
                                {link.label}
                            </p>
                        </Link>)
                    })
                    }
                </div>

            </section>
        </div>
    )
}

export default Sidebar
