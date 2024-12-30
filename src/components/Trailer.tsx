import React from 'react'

const Trailer = () => {
    return (
        <div id='trailer' className='flex flex-col justify-center items-center min-h-screen'>
            <h1 className='font-mono font-extrabold text-6xl mb-8'>Trailer</h1> {/* Added margin-bottom here */}
            <div className=''>
                <video width="1185" height="666" controls preload="none">
                    <source src="/assets/Trailer.mov" type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default Trailer;
