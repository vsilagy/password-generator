import React from 'react';
import { FaCopy, FaArrowRight } from 'react-icons/fa';
const Form = () => {
	return (
		<form className="flex flex-col gap-4 w-80 sm:w-[28rem] mt-32 sm:mt-48 text-altWhite">
			<h1 className="mb-4 text-center text-xl text-lightGray sm:text-3xl">
				Password generator
			</h1>
			<div className=" flex justify-between p-4 bg-darkGray ">
				<h2 className="">P4$W0rD!</h2>
				<button>
					<FaCopy />
				</button>
			</div>
			<div className="flex flex-col gap-3 sm:gap-4 p-4 bg-darkGray">
				<div className="flex justify-between py-4">
					<p>Character Length</p>
					<p>10</p>
				</div>
				<input
					type="range"
					min={8}
					max={120}
					className="accent-neonGreen"
				/>
				<div>
					<input
						type="checkbox"
						name="uppercase"
						className="accent-neonGreen"
					/>
					<label htmlFor="uppercase" className="ml-4">
						Include Uppercase Letters
					</label>
				</div>
				<div>
					<input
						type="checkbox"
						name="lowercase"
						className="accent-neonGreen"
					/>
					<label htmlFor="lowercase" className="ml-4">
						Include Lowercase Letters
					</label>
				</div>
				<div>
					<input
						type="checkbox"
						name="numbers"
						className="accent-neonGreen"
					/>
					<label htmlFor="numbers" className="ml-4">
						Include Numbers
					</label>
				</div>
				<div>
					<input
						type="checkbox"
						name="symbols"
						className="accent-neonGreen"
					/>
					<label htmlFor="symbols" className="ml-4">
						Include Symbols
					</label>
				</div>
				<div className="flex justify-between py-4 px-2 sm:py-5 sm:px-3 text-lightGray bg-jetBlack font-bold uppercase">
					<p className="text-lightGray text-sm sm:text-base ">
						Strength
					</p>
					<p className="text-altWhite sm:text-lg">Medium</p>
				</div>
				<button
					type="submit"
					className="w-full flex items-center justify-center gap-2 p-4 text-darkGray bg-neonGreen uppercase">
					Generate <FaArrowRight />
				</button>
			</div>
		</form>
	);
};

export default Form;
