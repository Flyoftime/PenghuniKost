import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi'; // Importing icons from react-icons

const Footer = () => {
    return (
        <footer className="text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
                    {/* Left section - Contact Us */}
                    <div className="flex flex-col space-y-4 md:w-1/2">
                        <h2 className="text-4xl font-bold font-Montserrat">Contact Us</h2>
                        <div className="flex flex-col items-start space-y-2">
                            <div className="flex items-center space-x-2">
                                <FiMapPin className="text-gray-400" />
                                <p className="text-xl font-bold font-Montserrat">Bandung, Jawa Barat Indonesia</p>
                            </div>
                            <div className="flex items-center space-x-2 pl-7">
                                <p className="font-Montserrat">Jl. Sekepanjang III No.43</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FiPhone className="text-gray-400" />
                            <p className="font-Montserrat text-xl font-bold">+62 8810 2357 9090</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FiMail className="text-gray-400" />
                            <p className="text-xl font-bold font-Montserrat">mirsabanwar@gmail.com</p>
                        </div>
                    </div>

                    {/* Right section - About */}
                    <div className="flex flex-col space-y-4 md:w-1/2">
                        <h2 className="text-4xl font-semibold font-Montserrat">About</h2>
                        <p className="text-xl font-medium font-Montserrat">
                            Sebuah website film interaktif yang berfokus pada elemen horor dalam kehidupan kos. Pemilihan judul ini didasarkan pada latar belakang tema cerita yang menyajikan misteri dan ketegangan seputar penghuni terakhir dalam sebuah kos-kosan. Proyek ini mengangkat suasana mencekam dengan mengundang penonton untuk merasakan pengalaman horor melalui pilihan-pilihan interaktif yang mereka buat.
                        </p>
                    </div>
                </div>
                <div className="mt-6 text-center text-gray-400 text-sm font-montserrat">
                    © {new Date().getFullYear()} Your Company. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
