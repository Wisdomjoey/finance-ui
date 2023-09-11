import Button from "../button";
import Header from "./header";
import cards from "../../assets/images/Debit Cards Design.png";
import pic1 from "../../assets/images/pic1.png";
import pic2 from "../../assets/images/pic2.jpg";
import pic3 from "../../assets/images/pic3.jpeg";

function HeaderContainer() {
	return (
		<div className="header__container relative h-[900px] bg-theme_black overflow-hidden bg-no-repeat bg-contain rounded-[0px_0px_50px_50px]">
			<div className="max-w-[1200px] mx-auto w-[90%] h-full relative">
				<Header />

				<div className="relative z-10">
					<div className="py-[50px] flex items-center gap-[50px] sm:flex-col sm:items-start">
						<div className="flex-[2]">
							<h1 className="text-[65px] sm:text-[55px] font-semibold text-[white]">
								Digitize your financial
							</h1>
						</div>

						<div className="flex-1 sm:w-[80%]">
							<p className="text-[white]/50 text-[14px] mb-[30px] leading-[1.5]">
								Money should be easy. It's time to say goodbye to banks and
								financial services companies that don't work for you
							</p>

							<div className="flex items-center gap-[20px]">
								<Button text="Digitize Now" />

								<div className="min-w-[45px] h-[45px] rounded-[50%] bg-[white]/20 flex items-center justify-center cursor-pointer">
									<svg
										width="12"
										height="12"
										viewBox="0 0 6 7"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
										xmlnsXlink="http://www.w3.org/1999/xlink"
									>
										<defs>
											<linearGradient
												id="gradient"
												gradientTransform="rotate(65)"
											>
												<stop stopColor="#d200d2" offset="0%"></stop>
												<stop stopColor="#ffc871" offset="50%"></stop>
												<stop stopColor="#29f6f5" offset="100%"></stop>
											</linearGradient>
										</defs>
										<g
											id="Page-1"
											stroke="none"
											strokeWidth="1"
											fill="none"
											fillRule="evenodd"
										>
											<g
												id="Dribbble-Light-Preview"
												transform="translate(-347.000000, -3766.000000)"
												fill="url(#gradient)"
											>
												<g
													id="icons"
													transform="translate(56.000000, 160.000000)"
												>
													<path
														d="M296.494737,3608.57322 L292.500752,3606.14219 C291.83208,3605.73542 291,3606.25002 291,3607.06891 L291,3611.93095 C291,3612.7509 291.83208,3613.26444 292.500752,3612.85767 L296.494737,3610.42771 C297.168421,3610.01774 297.168421,3608.98319 296.494737,3608.57322"
														id="play-[#1003]"
													></path>
												</g>
											</g>
										</g>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="absolute flex flex-col items-end right-0 bottom-[45%] gap-[10px] sm:bottom-[40%] xs:scale-[0.7] origin-bottom-right">
					<div className="flex items-center gap-[10px]">
						<div className="flex items-center">
							<img
								alt="pic"
								src={pic1}
								className="w-[45px] h-[45px] border-[3px] rounded-[50%] object-cover"
							/>
							<img
								alt="pic"
								src={pic2}
								className="w-[45px] h-[45px] border-[3px] -ml-[15px] rounded-[50%] object-cover"
							/>
							<img
								alt="pic"
								src={pic3}
								className="w-[45px] h-[45px] border-[3px] -ml-[15px] rounded-[50%] object-cover"
							/>
						</div>

						<p className="text-[white] font-medium mb-[10px] text-[27px]">
							12M
						</p>
					</div>

					<p className="text-[14px] text-[white]/50">
						<span className="text-[16px] text-theme_green">• </span> World
						active user
					</p>
				</div>

				<img
					alt="cards"
					src={cards}
					className="absolute -bottom-[45%] w-full min-w-[500px] left-[50%] -translate-x-[50%] md:-bottom-[17%] mobile:!-bottom-[10%]"
				/>
			</div>

			<div className="absolute w-full bottom-0 h-[200px] sm:h-[100px] flex z-10">
				<div className="h-full flex-1">
					<div className="h-[100px] sm:h-[50px]"></div>
					<div className="h-[100px] sm:h-[50px] bg-[white] relative rounded-[0px_55px_0px_0px] sm:rounded-[0px_40px_0px_0px] -mr-[10px] before:content-[''] before:absolute before:-top-[100px] before:w-[100px] before:h-[100px] before:shadow-[-25px_25px_white] before:rounded-[0px_0px_0px_50px] after:absolute after:rounded-[0px_55px_0px_0px] sm:after:rounded-[0px_40px_0px_0px] after:w-full after:bg-[white] after:shadow-[0px_-5px_15px_5px_rgba(0,0,0,0.25)] after:h-[100px] after:-z-[1]"></div>
				</div>

				<div className="h-full w-[200px] sm:w-[100px] rounded-[50%] shadow-[0px_110px_0px_20px_white] sm:shadow-[0px_73px_0px_20px_white] p-[30px] sm:p-[15px] relative before:absolute before:w-full before:h-full before:rounded-[50%] before:top-0 before:left-0 before:shadow-[0px_-15px_15px_-10px_rgba(0,0,0,0.25)_inset]">
					<div className="w-full h-full rounded-[50%] bg-[#37323e] flex items-center justify-center relative">
						<svg
							viewBox="0 0 300 300"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							className="w-[117px] sm:w-[60px] ml-[7px] sm:ml-[3px]"
						>
							<path
								id="SunCatcherStudio"
								fill="none"
								stroke="none"
								d="M 32.550491,148.48008 A -108.15144,-108.15144 0 0 1 140.70194,40.328644 -108.15144,-108.15144 0 0 1 248.85338,148.48008 -108.15144,-108.15144 0 0 1 140.70194,256.63153 -108.15144,-108.15144 0 0 1 32.550491,148.48008 Z"
							/>
							<text
								fontSize="30"
								fill="#ffffff"
								letterSpacing="5"
								fontFamily="sans-serif"
								fontWeight="500"
							>
								<textPath xlinkHref="#SunCatcherStudio" startOffset="5">
									EXPLORE MORE • EXPLORE MORE •{" "}
								</textPath>
							</text>
						</svg>

						<svg
							viewBox="0 0 6 7"
							version="1.1"
							className="absolute rotate-90 w-[18px] h-[18px] sm:w-[15px] sm:h-[15px]"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
						>
							<defs>
								<linearGradient id="gradient" gradientTransform="rotate(65)">
									<stop stopColor="#d200d2" offset="0%"></stop>
									<stop stopColor="#ffc871" offset="50%"></stop>
									<stop stopColor="#29f6f5" offset="100%"></stop>
								</linearGradient>
							</defs>
							<g
								id="Page-1"
								stroke="none"
								strokeWidth="1"
								fill="none"
								fillRule="evenodd"
							>
								<g
									id="Dribbble-Light-Preview"
									transform="translate(-347.000000, -3766.000000)"
									fill="url(#gradient)"
								>
									<g id="icons" transform="translate(56.000000, 160.000000)">
										<path
											d="M296.494737,3608.57322 L292.500752,3606.14219 C291.83208,3605.73542 291,3606.25002 291,3607.06891 L291,3611.93095 C291,3612.7509 291.83208,3613.26444 292.500752,3612.85767 L296.494737,3610.42771 C297.168421,3610.01774 297.168421,3608.98319 296.494737,3608.57322"
											id="play-[#1003]"
										></path>
									</g>
								</g>
							</g>
						</svg>
					</div>
				</div>

				<div className="h-full flex-1">
					<div className="h-[100px] sm:h-[50px]"></div>
					<div className="h-[100px] sm:h-[50px] bg-[white] relative rounded-[55px_0px_0px_0px] sm:rounded-[40px_0px_0px_0px] -ml-[10px] after:content-[''] after:absolute after:-top-[100px] after:right-0 after:w-[100px] after:h-[100px] after:shadow-[25px_25px_white] after:rounded-[0px_0px_50px_0px] before:absolute before:rounded-[55px_0px_0px_0px] sm:before:rounded-[40px_0px_0px_0px] before:w-full before:bg-[white] before:shadow-[0px_-5px_15px_5px_rgba(0,0,0,0.25)] before:h-[100px] before:-z-[1]"></div>
				</div>
			</div>
		</div>
	);
}

export default HeaderContainer;
