import React from 'react'
import Image from 'next/image'
import Mirsab from '../../public/assets/Mirsab.png'

const AboutUs = () => {
    return (
        <div id="about" className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="font-Monserrat font-extrabold text-6xl mb-8 text-white">About Us</h1>

            {/* Kontainer untuk gambar anggota */}
            <div className="rounded-lg p-8 w-[1185px] h-[775px] bg-gradient-to-br from-[#131F38] to-[#ffffff]">
                <div className="flex flex-col items-center space-y-8">
                    {/* Baris 1: 3 anggota */}
                    <div className="flex justify-center space-x-8">
                        {/* Anggota 1 */}
                        <div className="w-[232px] h-[301px] bg-transparent rounded-lg overflow-hidden shadow-lg flex flex-col items-center justify-center border-g">
                            <div className="relative w-full h-full flex justify-center items-center">
                                <Image
                                    src="/assets/Afra.png"
                                    alt="Member 1"
                                    layout="intrinsic"
                                    width={173}
                                    height={173}
                                    className="rounded-full"  // This will make the image circular
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h3 className="font-semibold text-sm">Afra Afrizal</h3>
                                <p className="text-sm ">152022</p>
                            </div>
                        </div>

                        {/* Anggota 2 */}
                        <div className="w-[232px] h-[301px] bg-transparent rounded-lg overflow-hidden shadow-lg flex flex-col items-center justify-center">
                            <div className="relative w-full h-full flex justify-center items-center">
                                <Image
                                    src="/assets/Fuad.png"
                                    alt="Member 2"
                                    layout="intrinsic"
                                    width={173}
                                    height={173}
                                    className="rounded-md"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h3 className="font-semibold text-sm">Fuad Grimaldi</h3>
                                <p className="text-sm ">152022022</p>
                            </div>
                        </div>
                        {/* Anggota 3 */}
                        <div className="w-[232px] h-[301px] bg-transparent rounded-lg overflow-hidden shadow-lg flex flex-col items-center justify-center">
                            <div className="relative w-full h-full flex justify-center items-center">
                                <Image
                                    src="/assets/Asep.png"
                                    alt="Member 3"
                                    layout="intrinsic"
                                    width={173}
                                    height={173}
                                    className="rounded-md"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h3 className="font-semibold text-sm">Asep Ginanjar</h3>
                                <p className="text-sm ">152022041</p>
                            </div>
                        </div>
                    </div>
                    {/* Baris 2: 2 anggota */}
                    <div className="flex justify-center space-x-8">
                        {/* Anggota 4 */}
                        <div className="w-[232px] h-[301px] bg-transparent rounded-lg overflow-hidden shadow-lg flex flex-col items-center justify-center">
                            <div className="relative w-full h-full flex justify-center items-center">
                                <Image
                                    src="/assets/Abel.png"
                                    alt="Member 4"
                                    layout="intrinsic"
                                    width={173}
                                    height={173}
                                    className="rounded-md"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h3 className="font-semibold text-sm">Mochamad Abel Avriyana S</h3>
                                <p className="text-sm">152022141</p>
                            </div>
                        </div>
                        {/* Anggota 5 */}
                        <div className="w-[232px] h-[301px] bg-transparent rounded-lg overflow-hidden shadow-lg flex flex-col items-center justify-center">
                            <div className="relative w-full h-full flex justify-center items-center">
                                <Image
                                    src={Mirsab}
                                    alt="About image"
                                    layout="intrinsic"
                                    width={173}
                                    height={173}
                                    className="rounded-md"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h3 className="font-semibold text-sm">Mochamad Mirsab Anwar</h3>
                                <p className="text-sm ">152022147</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
