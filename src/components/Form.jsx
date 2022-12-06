import { useState } from 'react';
import { FaCopy, FaArrowRight } from 'react-icons/fa';
import createPassword from './password';
const Form = () => {
	const [password, setPassword] = useState('');
	const [length, SetLength] = useState(12);
	const [isUppercase, setIsUppercase] = useState(true);
	const [isLowercase, setIsLowercase] = useState(true);
	const [isNumber, setIsNumber] = useState(true);
	const [isSymbol, setIsSymbol] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		let newPassword = createPassword(
			length,
			isUppercase,
			isLowercase,
			isNumber,
			isSymbol,
		);
		setPassword(newPassword);
	};
	// const handleCopy = () => {
	// 	if (result) {
	// 		navigator.clipboard.writeText(result);
	// 	}
	// };
	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col gap-4 sm:gap-6 w-80 sm:w-[28rem] mt-24 sm:mt-40 text-altWhite">
			<h1 className="text-center text-lg sm:text-xl text-lightGray ">
				Password generator
			</h1>
			<div className=" flex justify-between p-4 sm:p-5 bg-darkGray ">
				<input
					type="result"
					placeholder="P4$W0rD!"
					value={password}
					readOnly
					className="text-2xl sm:text-3xl outline-none border-none placeholder:text-lightGray text-altWhite bg-darkGray w-full"
				/>
				<button className="px-2">
					<FaCopy className="text-neonGreen" size={20} />
				</button>
			</div>
			<div className="flex flex-col gap-4 sm:gap-5 p-4 sm:p-5 bg-darkGray">
				<label
					htmlFor="password-range"
					className="flex justify-between">
					Character Length{' '}
					<span className="text-xl text-neonGreen font-bold sm:text-2xl">
						{length}
					</span>
				</label>
				<input
					name="password-range"
					type="range"
					min={8}
					max={42}
					value={length}
					onChange={(e) => SetLength(e.target.value)}
					className="accent-neonGreen mb-2"
				/>
				<div>
					<input
						type="checkbox"
						name="uppercase"
						checked={isUppercase}
						onChange={(e) => setIsUppercase(e.target.checked)}
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
						checked={isLowercase}
						onChange={(e) => setIsLowercase(e.target.checked)}
						className="accent-neonGreen"
					/>
					<label htmlFor="lowercase" className="ml-4">
						Include Lowercase Letters
					</label>
				</div>
				<div>
					<input
						type="checkbox"
						name="number"
						checked={isNumber}
						onChange={(e) => setIsNumber(e.target.checked)}
						className="accent-neonGreen"
					/>
					<label htmlFor="number" className="ml-4">
						Include Numbers
					</label>
				</div>
				<div>
					<input
						type="checkbox"
						name="symbol"
						checked={isSymbol}
						onChange={(e) => setIsSymbol(e.target.checked)}
						className="accent-neonGreen"
					/>
					<label htmlFor="symbol" className="ml-4">
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
					className="w-full flex items-center justify-center gap-2 p-4 text-darkGray bg-neonGreen font-bold uppercase">
					Generate <FaArrowRight />
				</button>
			</div>
		</form>
	);
};

export default Form;
