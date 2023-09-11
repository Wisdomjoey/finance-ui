import { useRef, useState } from "react";

function Header() {
	const [open, setOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	const toggleMenu = () => {
		if (open) {
			menuRef.current?.classList.replace("top-[70px]", "-top-[100%]");
			menuRef.current?.classList.replace("opacity-100", "opacity-0");

			setOpen(false);
		} else {
			setOpen(true);

			setTimeout(() => {
				menuRef.current?.classList.replace("-top-[100%]", "top-[70px]");
				menuRef.current?.classList.replace("opacity-0", "opacity-100");
			}, 5);
		}
	};

	return (
		<header className="header flex items-center justify-between py-[30px] relative z-20">
			<nav className="flex items-center justify-between w-full">
				<div className="text-[white] text-[25px] font-semibold flex-1">
					carty
				</div>

				<ul className="flex items-center justify-between flex-1 text-[white]/50 text-[14px] sm:hidden">
					{["Features", "Pricing", "About Us", "Faq"].map((val, ind) => (
						<li key={ind} className="cursor-pointer">
							{val}
						</li>
					))}
				</ul>

				<div className="flex-1 flex justify-end sm:hidden">
					<button className="text-[14px] text-[white] pt-[8px] pb-[12px] px-[18px] rounded-[20px] cursor-pointer bg-[white]/20">
						Get Started
					</button>
				</div>

				<div onClick={toggleMenu} className="hidden sm:block cursor-pointer">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 50 50"
						width="25px"
						height="25px"
						className="fill-[white]"
					>
						<path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" />
					</svg>

					<div
						ref={menuRef}
						className="absolute z-20 w-full py-[30px] px-[15px] rounded-[20px] bg-[#2a2a2a] flex justify-between right-0 -top-[100%] opacity-0 transition-all duration-500"
					>
						<ul className="flex flex-wrap min-w-[100px] xs:flex-col gap-[15px] flex-1 text-[white]/50 text-[14px]">
							{["Features", "Pricing", "About Us", "Faq"].map((val, ind) => (
								<li key={ind} className="cursor-pointer">
									{val}
								</li>
							))}
						</ul>

						<div className="flex-1 flex justify-end h-fit">
							<button className="text-[14px] text-[white] pt-[8px] pb-[12px] px-[18px] rounded-[20px] cursor-pointer bg-[white]/20">
								Get Started
							</button>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;
