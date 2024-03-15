import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface MenuProps {
    isOpen: boolean;
}

const Menu: React.FC<MenuProps> = ({ isOpen }) => {
    return (
        <div
            className={`absolute top-0 left-0 md:max-w-[500px] w-screen h-screen bg-black z-[99] ${
                isOpen ? 'block' : 'hidden'
            }`}
        >
            <div className="flex justify-start items-start w-full h-full pl-8">
                <div className="flex flex-col justify-start w-auto h-auto text-white text-5xl gap-y-8 mt-[10rem]">
                    <div className="flex flex-row items-center gap-x-4">
                        <div className="w-fit h-fit rotate-[-90deg]">
                            <Image
                                src="/icon/arrow.svg"
                                alt=""
                                width={30}
                                height={30}
                            />
                        </div>
                        <Link href="">
                            <span>Studio</span>
                        </Link>
                    </div>
                    <div className="flex flex-row items-center gap-x-4">
                        <div className="w-fit h-fit rotate-[-90deg]">
                            <Image
                                src="/icon/arrow.svg"
                                alt=""
                                width={30}
                                height={30}
                            />
                        </div>
                        <Link href="">
                            <span>Projects</span>
                        </Link>
                    </div>
                    <div className="flex flex-row items-center gap-x-4">
                        <div className="w-fit h-fit rotate-[-90deg]">
                            <Image
                                src="/icon/arrow.svg"
                                alt=""
                                width={30}
                                height={30}
                            />
                        </div>
                        <Link href="">
                            <span>Products</span>
                        </Link>
                    </div>
                    <div className="flex flex-row items-center gap-x-4">
                        <div className="w-fit h-fit rotate-[-90deg]">
                            <Image
                                src="/icon/arrow.svg"
                                alt=""
                                width={30}
                                height={30}
                            />
                        </div>
                        <Link href="">
                            <span>About Us</span>
                        </Link>
                    </div>
                    <div className="flex flex-row items-center gap-x-4">
                        <div className="w-fit h-fit rotate-[-90deg]">
                            <Image
                                src="/icon/arrow.svg"
                                alt=""
                                width={30}
                                height={30}
                            />
                        </div>
                        <Link href="">
                            <span>Contacts</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;