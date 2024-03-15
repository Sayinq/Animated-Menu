import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/all';

gsap.registerPlugin(CustomEase);

interface MenuProps {
    isOpen: boolean;
}

const Menu: React.FC<MenuProps> = ({ isOpen }) => {
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const socialRef = useRef<HTMLDivElement>(null);
    const emailRef = useRef<HTMLDivElement>(null);

    const links = [
        { name: 'Studio', href: '' },
        { name: 'Projects', href: '' },
        { name: 'Products', href: '' },
        { name: 'About Us', href: '' },
        { name: 'Contacts', href: '' },
    ];

    useEffect(() => {
        if (isOpen) {
            gsap.fromTo(
                menuRef.current,
                { width: 0 },
                {
                    width: '100vw',
                    duration: 0.5,
                    ease: 'power2.inOut',
                }
            );
            gsap.to('.menu-link', {
                opacity: 1,
                x: 0,
                stagger: 0.25,
                ease: CustomEase.create("custom", "M0,0 C0.322,0 1,0.494 1,1 "),
                duration: 0.5,
            });
            gsap.fromTo(
                socialRef.current,
                {
                    opacity: 0,
                    y: 50,
                },
                {
                    opacity: 1,
                    y: 0,
                    ease: "elastic.out",
                    duration: 1,
                    delay: 2,
                }
            );
            gsap.fromTo(
                emailRef.current,
                {
                    opacity: 0,
                    y: 50,
                },
                {
                    opacity: 1,
                    y: 0,
                    ease: "elastic.out",
                    duration: 1,
                    delay: 2.5,
                }
            )
        } else {
            gsap.to('.menu-link', {
                opacity: 0,
                x: -100,
                duration: 0.8,
            });
            gsap.to(menuRef.current, {
                width: 0,
                duration: 0.5,
                ease: CustomEase.create("custom", "M0,0 C0.322,0 1,0.494 1,1 "),
            });
        }
    }, [isOpen]);

    return (
        <div
            ref={menuRef}
            className={`absolute top-0 left-0 md:max-w-[500px] h-screen bg-black z-[99] ${
                isOpen ? 'block' : 'hidden'
            }`}
        >
            <div className="flex flex-col justify-start items-start w-full h-full sm:pl-8">
                <div className="flex flex-col justify-start w-auto h-auto text-white text-5xl gap-y-8 mt-[10rem]">
                    {links.map((link, index) => (
                        <div
                            key={link.name}
                            className="flex flex-row items-center gap-x-4 opacity-0 translate-x-[-100px] hover:gap-x-8 transition-all duration-200 ease-in-out sm:pl-0 pl-8 menu-link"
                        >
                            <div
                                className={`sm:flex hidden w-fit h-fit rotate-[-90deg] ${
                                    hoveredLink === link.name ? 'opacity-100' : 'opacity-0'
                                }`}
                            >
                                <Image src="/icon/arrow.svg" alt="" width={30} height={30} />
                            </div>
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
                <div ref={socialRef} className="flex flex-wrap justify-start gap-[10px] w-full h-auto text-white sm:px-12 px-8 mt-24">
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
                <div ref={emailRef} className="flex flex-row justify-start items-center w-full h-auto sm:px-12 px-8 text-white gap-x-2 mt-8">
                    <div className="w-fit h-fit">
                        <Image
                            src="/icon/message.svg"
                            alt=""
                            width={25}
                            height={25}
                        />
                    </div>
                    <div className="flex flex-row w-fit h-fit gap-x-2">
                        <span>Let's Chat!</span>
                        <span className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 hover:after:scale-x-100 after:translate-y-[5px] after:transition after:duration-300 after:origin-left">
                            <a href="mailto:mylesmcghee1999@yahoo.com">myemail@email.com</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
