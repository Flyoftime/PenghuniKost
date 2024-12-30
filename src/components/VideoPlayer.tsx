"use client";
import React, { useState } from "react";

const VideoPlayer = () => {
    const [currentVideo, setCurrentVideo] = useState("/assets/Bab1/Scene1.mp4");
    const videos = {
        Bab1: [
            { title: "Scene 1", src: "/assets/Bab1/Scene1.mp4" },
            { title: "Menanyakan", src: "/assets/Bab1/Menanyakan.mp4" },
            { title: "Mengintip", src: "/assets/Bab1/Mengintip.mp4" },
        ],
        Bab2: [
            { title: "Kembali Ke Kamar", src: "/assets/Bab2/KembaliKeKamar.mp4" },
            { title: "Mengecek Kondisi Lorong", src: "/assets/Bab2/MengecekKondisiLorong.mp4" },
            { title: "Mengikuti Jejak Kaki", src: "/assets/Bab2/MengikutiJejakKaki.mp4" },
            { title: "Mengintip Dari Sisi Jendela", src: "/assets/Bab2/MengintipDariSisiJendela.mp4" },
        ],
        Bab3: [
            { title: "Berdiam Di Kamar", src: "/assets/Bab3/BerdiamDiKamar.mp4" },
            { title: "Mendekati Pintu", src: "/assets/Bab3/MendekatiPintuKamarKosong.mp4" },
            { title: "Mengecek Keadaan", src: "/assets/Bab3/MengecekKeadaanDiluar.mp4" },
            { title: "Menghubungi Dika", src: "/assets/Bab3/MenghubungiDika.mp4" },
        ],
        Bab4: [
            { title: "Masuk Ke Kamar", src: "/assets/Bab4/MasukKeKamarMisterius.mp4" },
            { title: "Membantu Maya", src: "/assets/Bab4/MembantuMayaBerasamaDika.mp4" },
            { title: "Mencari Bantuan Dika", src: "/assets/Bab4/MencariBantuanDika.mp4" },
            { title: "Menolak Membantu", src: "/assets/Bab4/MenolakMembantuDanKeluarDariKamarTersebut.mp4" },
        ],
    };

    return (
        <div id="Movie" className="flex flex-col items-center justify-center min-h-screen pt-16">
            <h1 className="font-mono font-extrabold text-6xl mb-8">Movie</h1>
            {/* Kontainer Video */}
            <div className="mb-8">
                <video
                    key={currentVideo} // Tambahkan key berdasarkan video yang dipilih
                    width="1185"
                    height="666"
                    controls
                    preload="none"
                >
                    <source src={currentVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            {/* Tombol Pilihan Video per Bab */}
            <div className="w-full max-w-4xl">
                {Object.entries(videos).map(([bab, videoList]) => (
                    <div key={bab} className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">{bab}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {videoList.map((video, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentVideo(video.src)}
                                    className={`w-full px-4 py-2 rounded-md text-white text-left ${
                                        currentVideo === video.src
                                            ? "bg-blue-600"
                                            : "bg-gray-500 hover:bg-gray-700"
                                    }`}
                                >
                                    {video.title}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoPlayer;
