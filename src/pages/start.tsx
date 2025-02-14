import { useAtom } from 'jotai'
import { useState } from 'react'
import m1 from '../assets/1.jpg'
import m2 from '../assets/2.jpg'
import m3 from '../assets/3.jpg'
import m4 from '../assets/4.jpg'
import m5 from '../assets/5.jpg'
import m6 from '../assets/6.jpg'
import m7 from '../assets/7.jpg'
import { pageNumber } from '../storage/stor'
export default function Main() {
	const [pageIndex] = useAtom(pageNumber)

	// const navigate = useNavigate()
	const [pages] = useState([Start, Me])
	const CurrentPage = pages[pageIndex]
	return <CurrentPage />
}

function Me() {
	const [me, setMe] = useState(0)
	return (
		<div className='w-screen h-screen bg-[#FDB0C0] relative'>
			<img
				src='https://i.pinimg.com/originals/6b/0b/56/6b0b564b64ab5b9c38e63c63ec7e8e4c.gif'
				className='absolute object-cover top-0 left-0 w-full h-full mix-blend-darken'
			/>
			<div
				className='z-10 w-full h-full flex flex-col justify-center items-center absolute top-0 left-0'
				onClick={() => {
					if (me < 4) {
						setMe(me + 1)
					}
				}}
			>
				{me === 0 && (
					<div className='flex justify-center items-center'>
						<img
							src={m1}
							className='w-[200px] h-[400px] object-contain translate-x-[15%] translate-y-[-25%]'
						/>
						<img
							src={m2}
							className='w-[200px] h-[400px] object-contain translate-x-[-15%] translate-y-[25%]'
						/>
					</div>
				)}
				{me === 1 && (
					<div className='flex justify-center flex-col items-center'>
						<img src={m3} className='w-[200px] h-[400px] object-contain' />
						<img src={m4} className='w-[200px] h-[400px] object-contain' />
					</div>
				)}
				{me === 2 && (
					<img src={m5} className='w-[200px] h-[400px] object-contain' />
				)}
				{me === 3 && (
					<div className='flex justify-center items-center'>
						<img
							src={m6}
							className='w-[200px] h-[400px] object-contain translate-x-[15%] translate-y-[-25%]'
						/>
						<img
							src={m7}
							className='w-[200px] h-[400px] object-contain translate-x-[-15%] translate-y-[25%]'
						/>
					</div>
				)}
				{me === 4 && (
					<div className='flex items-center justify-center flex-col'>
						<h1 className='text-white text-4xl font-bold'>Люблю тебе киця</h1>
						<p className='text-4xl mt-2'>❤️❤️❤️</p>
					</div>
				)}
			</div>
		</div>
	)
}

function Start() {
	const [pageIndex, setPI] = useAtom(pageNumber)
	const [i, setI] = useState(0)
	const [noy] = useState([
		'Не ми(',
		'Чого це? Не можна!!!',
		'Получиш',
		'Не можнааааааа!!!!',
		'Дупосрак)',
	])
	return (
		<div className='w-screen h-screen bg-[#FDB0C0] relative'>
			<img
				src='https://i.pinimg.com/originals/6b/0b/56/6b0b564b64ab5b9c38e63c63ec7e8e4c.gif'
				className='absolute object-cover top-0 left-0 w-full h-full mix-blend-darken'
			/>
			<div className='z-10 w-full h-full flex flex-col justify-center items-center absolute top-0 left-0'>
				<h1 className='text-4xl font-bold text-white text-center'>
					З днем закоханих кицюн
				</h1>
				<br />
				<br />
				<div
					className={`grid gap-2 ${
						i !== noy.length - 1 ? 'grid-cols-2' : 'grid-cols-1'
					}`}
				>
					{}
					<button
						className={`rounded bg-white text-[#fe99ad] px-2 py-1 text-xl font-semibold ${
							i === noy.length - 1 && '!text-5xl !px-6 !py-2'
						}`}
						onClick={() => {
							setPI(pageIndex + 1)
						}}
					>
						Ми?
					</button>
					{i !== noy.length - 1 && (
						<button
							className='rounded bg-white text-[#fe99ad] px-2 py-1 text-xl font-semibold'
							onClick={() => {
								if (i < noy.length - 1) {
									setI(i + 1)
								}
							}}
						>
							{noy[i]}
						</button>
					)}
				</div>
			</div>
		</div>
	)
}
