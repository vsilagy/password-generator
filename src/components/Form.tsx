import { useState, useEffect, ChangeEvent } from 'react';
import { FaCopy, FaArrowRight } from 'react-icons/fa';
import createPassword from './password';
const Form = () => {
	const [password, setPassword] = useState<string>('');
	const [range, setRange] = useState<number>(12);
	const [strength, setStrength] = useState<string>('Weak');
	const [isUppercase, setIsUppercase] = useState<boolean>(true);
	const [isLowercase, setIsLowercase] = useState<boolean>(true);
	const [isNumber, setIsNumber] = useState<boolean>(false);
	const [isSymbol, setIsSymbol] = useState<boolean>(false);
	const handlePasswordGenerate = (
		event: React.MouseEvent<HTMLButtonElement>,
		value?: string,
	) => {
		event.preventDefault();
		let newPassword = createPassword(
			range,
			isUppercase,
			isLowercase,
			isNumber,
			isSymbol,
		);
		setPassword(newPassword);
	};
	const handleLength = (event: ChangeEvent<HTMLInputElement>) => {
		let value = event.target.value;
		setRange(parseInt(value));
	};

	useEffect(() => {
		if (range < 10 && !isSymbol && !isNumber) {
			setStrength('Too Weak');
		} else if (
			range < 16 &&
			isUppercase &&
			isLowercase &&
			(!isNumber || !isSymbol)
		) {
			setStrength('Weak');
		} else if (
			range < 21 &&
			isUppercase &&
			isLowercase &&
			(!isNumber || !isSymbol)
		) {
			setStrength('Medium');
		} else if (
			range <= 30 &&
			isUppercase &&
			isLowercase &&
			isNumber &&
			isSymbol
		) {
			setStrength('Strong');
		}
	}, [range, password]);

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
					placeholder="P4$5W0rD!"
					value={password}
					readOnly
					className="text-base sm:text-2xl font-bold outline-none border-none placeholder:text-lightGray text-altWhite bg-darkGray w-full"
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
						{range}
					</span>
				</label>
				<input
					name="password-range"
					type="range"
					min={8}
					max={30}
					value={range}
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
					<p className={`{color}` ? 'text-altWhite' : 'sm:text-lg'}>
						{strength}
					</p>
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
