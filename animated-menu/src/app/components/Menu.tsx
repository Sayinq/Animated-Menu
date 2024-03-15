import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface MenuProps {
    isOpen: boolean;
}

const Menu: React.FC<MenuProps> = ({ isOpen }) => {
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    const links = [
        { name: 'Studio', href: '' },
        { name: 'Projects', href: '' },
        { name: 'Products', href: '' },
        { name: 'About Us', href: '' },
        { name: 'Contacts', href: '' },
    ];

    return (
        <div
            className={`absolute top-0 left-0 md:max-w-[500px] w-screen h-screen bg-black z-[99] ${
                isOpen ? 'block' : 'hidden'
            }`}
        >
            <div className="flex flex-col justify-start items-start w-full h-full pl-8">
                <div className="flex flex-col justify-start w-auto h-auto text-white text-5xl gap-y-8 mt-[10rem]">
                    {links.map((link) => (
                        <div
                            key={link.name}
                            className="flex flex-row items-center gap-x-4 hover:gap-x-8 transition-all duration-200 ease-in-out"
                        >
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: hoveredLink === link.name ? 1 : 0 }}
                                className="w-fit h-fit rotate-[-90deg]"
                            >
                                <Image
                                    src="/icon/arrow.svg"
                                    alt=""
                                    width={30}
                                    height={30}
                                />
                            </motion.div>
                            <Link href={link.href}>
                                <span
                                    onMouseEnter={() => setHoveredLink(link.name)}
                                    onMouseLeave={() => setHoveredLink(null)}
                                    className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 hover:after:scale-x-100 after:translate-y-[5px] after:transition after:duration-300 after:origin-left"
                                >
                                    {link.name}
                                </span>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap justify-start gap-[10px] w-full h-auto text-white px-8 mt-24">
                    <Link href="">
                        <span>Instagram</span>
                    </Link>
                    <Link href="">
                        <span>X</span>
                    </Link>
                    <Link href="">
                        <span>Dribbble</span>
                    </Link>
                    <Link href="">
                        <span>Behance</span>
                    </Link>
                    <Link href="">
                        <span>Figma</span>
                    </Link>
                    <Link href="">
                        <span>Gumroad</span>
                    </Link>
                </div>
                <div className="flex flex-row justify-start items-center w-full h-auto px-8 text-white gap-x-2 mt-8">
                    <div className="w-fit h-fit">
                        <Image
                            src=""
                            alt=""
                            width={25}
                            height={25}
                        />
                    </div>
                    <div className="flex flex-row w-fit h-fit gap-x-2">
                        <span>Let's Chat!</span>
                        <span><a href="mailto:mylesmcghee1999@yahoo.com">myemail@email.com</a></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
