import React from 'react';

const Quality = () => {
    return (
        <div className='mt-20'>
            <h2 className='text-4xl font-bold text-center'>INNOVATIVE QUALITIES & FEATURES</h2>
            <p className='text-gray-400 font-mono text-2xl text-center mt-4 mb-20'>SHOW YOURS TO THE WORLD</p>
            <div className='grid lg:grid-cols-3 grid-cols-1 px-10'>
                <div className='mt-10'>
                    <div className='flex lg:flex-row flex-col-reverse items-center gap-8 mb-20 cursor-pointer'>
                        <span className='lg:text-right text-center'>
                        <h3 className='text-xl hover:text-red-600 transition-all duration-500 font-bold mb-3'>INTELLIGENT PROCESSOR</h3>
                        <p>Tellus in hac habitasse platea dictumst<br/> vestibulum rhoncus srd mana erti qeueri</p>
                        </span>
                        <img className='hover:scale-110 transition-all duration-700' src='https://cdn.shopify.com/s/files/1/0104/6917/9492/files/ic5.png?v=1613704466&width=1420' alt=''/>
                    </div>
                    <div className='flex lg:flex-row flex-col-reverse items-center gap-8 mb-20 cursor-pointer'>
                        <span className='lg:text-right text-center'>
                        <h3 className='text-xl hover:text-red-600 transition-all duration-500 font-bold mb-3'>HD SURROUND AUDIO</h3>
                        <p>Tellus in hac habitasse platea dictumst<br/> vestibulum rhoncus srd mana erti qeueri</p>
                        </span>
                        <img className='hover:scale-110 transition-all duration-700' src='https://cdn.shopify.com/s/files/1/0104/6917/9492/files/ic6.png?v=1613704466&width=1420' alt=''/>
                    </div>
                    <div className='flex lg:flex-row flex-col-reverse items-center gap-8 mb-20 cursor-pointer'>
                        <span className='lg:text-right text-center'>
                        <h3 className='text-xl hover:text-red-600 transition-all duration-500 font-bold mb-3'>STYLISH BEVEL EDGES</h3>
                        <p>Tellus in hac habitasse platea dictumst<br/> vestibulum rhoncus srd mana erti qeueri</p>
                        </span>
                        <img className='hover:scale-110 transition-all duration-700' src='https://cdn.shopify.com/s/files/1/0104/6917/9492/files/ic3.png?v=1613704466&width=1420' alt=''/>
                    </div>
                </div>
                <div>
                    <img src='https://cdn.shopify.com/s/files/1/0104/6917/9492/files/center-img_eb064c43-efaf-4d56-90df-f89acfdf85fe.png?v=1613704453' alt=''/>
                </div>
                <div className='mt-10'>
                    <div className='flex lg:flex-row flex-col items-center gap-8 mb-20 cursor-pointer'>
                        <img className='hover:scale-110 transition-all duration-700' src='https://cdn.shopify.com/s/files/1/0104/6917/9492/files/ic1.png?v=1613704466&width=1420' alt=''/>
                        <span className='lg:text-left text-center'>
                        <h3 className='text-xl hover:text-red-600 transition-all duration-500 font-bold mb-3'>4.0 WIFI SPECS</h3>
                        <p>Tellus in hac habitasse platea dictumst<br/> vestibulum rhoncus srd mana erti qeueri</p>
                        </span>
                    </div>
                    <div className='flex lg:flex-row flex-col items-center gap-8 mb-20 cursor-pointer'>
                        <img className='hover:scale-110 transition-all duration-700' src='https://cdn.shopify.com/s/files/1/0104/6917/9492/files/ic4.png?v=1613704466&width=1420' alt=''/>
                        <span className='lg:text-left text-center'>
                        <h3 className='text-xl hover:text-red-600 transition-all duration-500 font-bold mb-3'>MULIT TASKING & THREADING</h3>
                        <p>Tellus in hac habitasse platea dictumst<br/> vestibulum rhoncus srd mana erti qeueri</p>
                        </span>
                    </div>
                    <div className='flex lg:flex-row flex-col items-center gap-8 cursor-pointer'>
                        <img className='hover:scale-110 transition-all duration-700' src='https://cdn.shopify.com/s/files/1/0104/6917/9492/files/ic2.png?v=1613704466&width=1420' alt=''/>
                        <span className='lg:text-left text-center'>
                        <h3 className='text-xl hover:text-red-600 transition-all duration-500 font-bold mb-3'>CLOUD STORAGE</h3>
                        <p>Tellus in hac habitasse platea dictumst<br/> vestibulum rhoncus srd mana erti qeueri</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quality;