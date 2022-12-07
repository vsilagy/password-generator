import { useState, ChangeEvent, MouseEventHandler } from 'react';
import { FaCopy, FaArrowRight } from 'react-icons/fa';
import createPassword from './password';
const Form = () => {
	const [password, setPassword] = useState<string>('');
	const [length, SetLength] = useState<number>(12);
	const [isUppercase, setIsUppercase] = useState<boolean>(true);
	const [isLowercase, setIsLowercase] = useState<boolean>(true);
	const [isNumber, setIsNumber] = useState<boolean>(true);
	const [isSymbol, setIsSymbol] = useState<boolean>(false);
	// const [passwordOptions, setPasswordOptions] = useState({
	// 	uppercase: true,
	// 	lowercase: true,
	// 	numbers: true,
	// 	symbols: false,
	// });
	const handlePasswordGenerate = (
		event: React.MouseEvent<HTMLButtonElement>,
		value?: string,
	) => {
		event.preventDefault();
		let newPassword = createPassword(
			length,
			isUppercase,
			isLowercase,
			isNumber,
			isSymbol,
		);
		setPassword(newPassword);
	};
	const handleLength = (event: ChangeEvent<HTMLInputElement>) => {
		let value = event.target.value;
		SetLength(parseInt(value));
	};
	const handleCopy = () => {
		if (password.length > 8) {
			navigator.clipboard.writeText(password);
		}
	};

	return (
		<form className="flex flex-col gap-4 sm:gap-6 w-[21rem] sm:w-[31rem] mt-24 sm:mt-40 text-altWhite">
			<h1 className="text-center text-lg sm:text-xl text-lightGray ">
				Password generator
			</h1>
			<div className=" flex justify-between p-4 sm:p-5 bg-darkGray ">
				<input
					type="result"
					placeholder="P4$W0rD!"
					value={password}
					readOnly
					className="text-base sm:text-2xl outline-none border-none placeholder:text-lightGray text-altWhite bg-darkGray w-full"
				/>
				<button>
					<FaCopy
						onClick={handleCopy}
						className="text-neonGreen -mr-2"
						size={20}
					/>
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
					max={30}
					value={length}
					onChange={handleLength}
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
					onClick={handlePasswordGenerate}
					type="submit"
					className="w-full flex items-center justify-center gap-2 p-4 text-darkGray bg-neonGreen font-bold uppercase">
					Generate <FaArrowRight />
				</button>
			</div>
		</form>
	);
};

export default Form;
