import Image from 'next/image';
import { NextPage } from 'next';
import Timeline from '../components/Timeline';
import React from 'react';
import pwoc_logo_no_text from '../public/assets/logo/pwoc_logo_no_text.png';
import PageLayout from '../components/layout/PageLayout';
import { TitleCard } from '../components/index/TitleCard';
import { BasicContentCard } from '../components/index/BasicContentCard';
import { RegistrationCard } from '../components/index/RegistrationCard';
import { Sponsors } from '../components/index/Sponsors';
import content from '../data/content.json';
import programmer from '../public/assets/animations/programmer.json';

const Home: NextPage = () => {
	return (
		<PageLayout
			title='PWOC | PEC Winter of Code'
			description='All about PWoC and timeline.'
		>
			<div className='flex bg-[#63ace098] glassmorphism py-4 md:py-8 my-7 md:mx-5'>
				<div className='hidden [@media(min-width:830px)]:flex justify-start h-[200px] w-[400px] my-auto overflow-hidden'>
					<Image
						src={pwoc_logo_no_text}
						alt=''
						className='animate-[spin_8s_linear_infinite] object-contain brightness-150'
						width={509}
						height={490}
					/>
				</div>
				{/* Big Card */}
				<div className='flex justify-center mx-4'>
					<TitleCard
						title='PWOC'
						subtitle='PEC Winter of Code'
						content={content.pwocTitleQuote}
					/>
				</div>

				<div className='hidden [@media(min-width:830px)]:flex justify-end h-[200px] w-[400px] my-auto overflow-hidden'>
					<Image
						src={pwoc_logo_no_text}
						alt=''
						className='animate-[spin_8s_linear_infinite] object-contain brightness-150'
						width={509}
						height={490}
					/>
				</div>
			</div>

			{/* TODO: Update logo */}
			<div className='md:mx-4 mx-[4px] my-7'>
				<BasicContentCard
					title='About us'
					content={content.pwocAbout}
					img={programmer}
					containerClass='border-2 p-4 md:py-8 md:px-10'
					titleClass='text-2xl sm:text-3xl md:text-6xl p-4'
				/>
			</div>

			<div className='md:mx-4 mx-[4px] my-7'>
				<RegistrationCard />
			</div>
			<div className='my-6'>
				<div
					className={`text-[#ef8220] mx-[40px] text-2xl sm:text-3xl md:text-6xl p-4 uppercase text-center bg-[#1795f098] glassmorphism break-words`}
				>
					Timeline
				</div>
				<Timeline />
			</div>
			<div className='md:mx-4 mx-[4px] my-7'>
				<Sponsors />
			</div>
		</PageLayout>
	);
};

export default Home;
