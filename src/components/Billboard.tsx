import React from 'react';
import Image from 'next/image';
import poster from '../../public/assets/Poster.png';
import Link from "next/link";
const Billboard = () => {
    return (
        <div id="home" className="relative flex items-center justify-between h-screen px-16  text-white">
            {/* Content */}
            <div className="max-w-[50%]">
                <h1 className="text-5xl font-bold leading-tight mb-6">
                    Pecahkan misteri yang selalu menghantuimu!
                </h1>
                <p className="text-lg mb-8 leading-relaxed">
                    Sebuah film interaktif yang berfokus pada elemen horor dalam kehidupan kos.
                    Pemilihan judul ini didasarkan pada latar belakang tema cerita yang menyajikan misteri
                    dan ketegangan seputar penghuni terakhir dalam sebuah kos-kosan. Proyek ini mengangkat
                    suasana mencekam dengan mengundang penonton untuk merasakan pengalaman horor melalui pilihan-pilihan interaktif yang mereka buat.
                </p>
                <Link href="/Video">
                    <button className="px-8 py-3 bg-red-600 rounded-lg hover:bg-[#1c7ed6] transition-all duration-300 ease-in-out text-white font-semibold h-[57px] w-[308px]">
                        WATCH NOW
                    </button>
                </Link>



            </div>

            {/* Image */}
            <div className="relative w-[30%] h-[70%]">
                <Image
                    src={poster}
                    alt="Poster image"
                    layout="fill"
                    objectFit="contain"
                    className="rounded-md shadow-lg"
                />
            </div>
        </div>
    );
};

export default Billboard;
