import ListTop from "../listTop";

function StrategyContainer() {
	return (
		<div className="strategy__container relative">
			<div className="max-w-[1200px] mx-auto w-[90%] py-[80px]">
				<div className="flex flex-col items-center gap-[50px]">
					<ListTop
						introTxt="Strategy"
						headTxt="Let's learn how carty work"
						num="05"
						side={
							<p className="font-medium text-[15px] text-text_color mt-[25px] leading-[1.4] flex-1">
								Your journey is seamless, safe and secure. No need to register
								or download apps. No need to enter card details
							</p>
						}
					/>

					<div className="w-full flex flex-col items-center justify-center bg-lighter_black/50 h-[450px] rounded-[30px] relative p-[20px]">
						<h1
							style={{
								lineHeight: "2",
								WebkitTextFillColor: "transparent",
								WebkitBackgroundClip: "text",
							}}
							className="mt-auto text-[70px] font-semibold mb-[55px] bg-[linear-gradient(54deg,#fd3d4c,#fc010a,#de55e2,#9583ed)]"
						>
							Carty
						</h1>

						<div className="bg-[black]/[0.05] rounded-[10px] p-[10px] pt-[6px] text-center mt-auto">
							<p className="font-medium text-[15px] text-text_color">
								We are carty, smooth & seamless digital bank
							</p>
						</div>

						<div className="min-w-[55px] h-[55px] rounded-[50%] bg-[white]/50 backdrop-blur-[5px] flex items-center justify-center cursor-pointer absolute z-10">
							<svg
								width="17"
								height="17"
								viewBox="0 0 6 7"
								version="1.1"
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
				</div>
			</div>
		</div>
	);
}

export default StrategyContainer;
