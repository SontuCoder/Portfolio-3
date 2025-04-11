import React from 'react'

const Education = () => {
    return (
        <section id='education' className='max-w-[var(--width)] w-full text-[var(--pt)] mf flex flex-col items-center mb-10 mt-50'>
            <h4 className="heading text-center mb-20">My Education Background</h4>
            <div className="timeline w-full relative">

                <div className="container max-w-[500px] relative left-[50%] py-3 px-10 w-[50%] ">
                    <div className="w-6 h-6 bg-[var(--st)] absolute rounded-full -left-3 z-10 top-10"></div>
                    <div className="text-box tracking-wider">
                        <p className="underline text-xl mb-2">10th & 12th :</p>
                        <p className='text-sm'>Sonakhali High School,</p>
                        <p className="text-sm mb-2">West Bengal</p>
                        <p className="text-sm">10th with - 79%, ( 2017-18 )</p>
                        <p className="text-sm mb-2">12th with - 86.8%, ( 2018-20 )</p>
                        <p className="text-sm">Science Background</p>
                        <span className="h-0 w-0 absolute top-7 z-10 arrow"></span>
                    </div>
                </div>

                <div className="container max-w-[500px] relative py-3 px-10 w-[50%]">
                    <div className="w-6 h-6 bg-[var(--st)] absolute rounded-full -right-3 z-10 top-10"></div>
                    <div className="text-box tracking-wider">
                        <p className="underline text-xl mb-2">10th & 12th :</p>
                        <p className='text-sm'>Sonakhali High School,</p>
                        <p className="text-sm mb-2">West Bengal</p>
                        <p className="text-sm">10th with - 79%, ( 2017-18 )</p>
                        <p className="text-sm mb-2">12th with - 86.8%, ( 2018-20 )</p>
                        <p className="text-sm">Science Background</p>
                        <span className="h-0 w-0 absolute top-7 z-10 arrow-left"></span>
                    </div>
                </div>

                <div className="container max-w-[500px] relative left-[50%] py-3 px-10 w-[50%]">
                    <div className="w-6 h-6 bg-[var(--st)] absolute rounded-full -left-3 z-10 top-10"></div>
                    <div className="text-box tracking-wider">
                        <p className="underline text-xl mb-2">10th & 12th :</p>
                        <p className='text-sm'>Sonakhali High School,</p>
                        <p className="text-sm mb-2">West Bengal</p>
                        <p className="text-sm">10th with - 79%, ( 2017-18 )</p>
                        <p className="text-sm mb-2">12th with - 86.8%, ( 2018-20 )</p>
                        <p className="text-sm">Science Background</p>
                        <span className="h-0 w-0 absolute top-7 z-10 arrow"></span>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Education;