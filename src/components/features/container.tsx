import ListTop from "../listTop";
import Button from "../button";

function FeaturesContainer() {
	return (
		<div className="features__container relative">
			<div className="max-w-[1200px] mx-auto w-[90%] py-[80px]">
				<div className="flex gap-[50px] sm:flex-col">
					<ListTop
						num="01"
						introTxt="Features"
						headTxt="Best features provided by carty"
					>
						<p className="font-medium text-[15px] text-text_color mt-[25px] leading-[1.4]">
							Carty is more of a mindset than technology or industry. Our
							products is designed by industry veterans to solve these problems.
							It will save you time, money and headache
						</p>

						<div className="flex items-center mt-[35px]">
							<Button
								text="Get Started"
								size="text-[16px]"
								bg="bg-[black]"
								color="text-[white]"
								font="font-medium"
							/>
							<Button
								text="Learn More"
								size="text-[17px]"
								bg="bg-[transparent]"
								font="font-bold"
							/>
						</div>
					</ListTop>

					<div className="flex-1 flex flex-col gap-[15px] text-center text-[14px] text-text_color font-medium">
						<div className="flex gap-[15px] h-[170px]">
							<div className="flex-1 bg-lighter_black rounded-[20px] flex items-center justify-center flex-col p-[20px] xs:px-[10px] gap-[20px]">
								<span>Protection</span>

								<svg
									width="50"
									height="50"
									id="svg2"
									viewBox="0 0 48 48"
									version="1.1"
									fill="rgba(0,0,0,0.03)"
								>
									<defs id="defs4" />
									<g id="layer1" transform="translate(0,-1004.3622)">
										<g id="g3000" transform="translate(-6,1003)">
											<path
												id="path2987"
												d="m 30,2.3621826 -20,10.0000004 20,10 20,-10 z"
											/>
											<path
												d="m 30,22.362183 0,25 20,-10 0,-25 z"
												id="path2989"
											/>
											<path
												id="path2991"
												d="m 30,22.362183 0,25 -20,-10 0,-25 z"
											/>
											<path
												id="path2993"
												d="M 30,2.3749996 10,12.375 l 0,25 20,10 20,-10 0,-25 L 30,2.3749996 z"
												style={{
													fill: "none",
													stroke: "rgba(0,0,0,0.07)",
													strokeWidth: "2px",
													strokeLinecap: "round",
													strokeLinejoin: "round",
												}}
											/>
										</g>
									</g>
								</svg>

								<span>Data protection guaranteed</span>
							</div>
							<div className="flex-1 bg-theme_black rounded-[20px] flex items-center justify-center flex-col origin-bottom-left scale-x-[1.05] scale-y-[1.1] p-[20px] gap-[20px]">
								<span>Tracking</span>

								<span>Track all your financial transactions</span>
							</div>
						</div>

						<div className="flex gap-[15px] h-[170px]">
							<div className="flex-1 bg-lighter_black rounded-[20px] flex items-center justify-center flex-col p-[20px] xs:px-[10px] gap-[20px]">
								<span>Flexibility</span>

								<svg
									version="1.1"
									id="Layer_1"
									xmlns="http://www.w3.org/2000/svg"
									xmlnsXlink="http://www.w3.org/1999/xlink"
									x="0px"
									y="0px"
									viewBox="0 0 122.88 122.88"
									enableBackground="new 0 0 122.88 122.88"
									xmlSpace="preserve"
									width="50"
									height="50"
									fill="rgba(0,0,0,0.03)"
								>
									<g>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											stroke="rgba(0,0,0,0.07)"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="4"
											d="M62.43,122.88h-1.98c0-16.15-6.04-30.27-18.11-42.34C30.27,68.47,16.16,62.43,0,62.43v-1.98 c16.16,0,30.27-6.04,42.34-18.14C54.41,30.21,60.45,16.1,60.45,0h1.98c0,16.15,6.04,30.27,18.11,42.34 c12.07,12.07,26.18,18.11,42.34,18.11v1.98c-16.15,0-30.27,6.04-42.34,18.11C68.47,92.61,62.43,106.72,62.43,122.88L62.43,122.88z"
										/>
									</g>
								</svg>

								<span>Delivery through mutiple channels</span>
							</div>

							<div className="flex-1 bg-lighter_black rounded-[20px] flex items-center justify-center flex-col p-[20px] xs:px-[10px] gap-[20px]">
								<span>Easiness</span>

								<svg
									version="1.1"
									xmlns="http://www.w3.org/2000/svg"
									xmlnsXlink="http://www.w3.org/1999/xlink"
									width="50"
									height="50"
									x="0px"
									y="0px"
									viewBox="0 0 256 256"
									enableBackground="new 0 0 256 256"
									xmlSpace="preserve"
								>
									<g>
										<g>
											<g>
												<path
													fill="rgba(0,0,0,0.03)"
													stroke="rgba(0,0,0,0.07)"
													strokeWidth="10"
													d="M229.3,43.2c-11.2-10.9-26.5-16.3-46.2-16.3c-5.4,0-11,0.9-16.7,2.8c-5.7,1.9-10.9,4.4-15.8,7.6c-4.9,3.2-9.1,6.2-12.6,9c-3.5,2.8-6.9,5.8-10,8.9c-3.2-3.2-6.5-6.1-10-9c-3.5-2.8-7.7-5.8-12.6-9c-4.9-3.2-10.1-5.8-15.8-7.6c-5.7-1.9-11.2-2.8-16.7-2.8c-19.7,0-35.1,5.4-46.2,16.3C15.6,54.1,10,69.2,10,88.5c0,5.9,1,11.9,3.1,18.2c2.1,6.2,4.4,11.5,7.1,15.9c2.6,4.4,5.6,8.7,9,12.8c3.3,4.2,5.8,7,7.3,8.6c1.5,1.6,2.7,2.7,3.6,3.4l82.2,79.3c1.6,1.6,3.5,2.4,5.8,2.4s4.2-0.8,5.8-2.4l82-79C236,127.6,246,107.9,246,88.5C246,69.2,240.4,54.1,229.3,43.2z"
												/>
											</g>
											<g></g>
											<g></g>
											<g></g>
											<g></g>
											<g></g>
											<g></g>
											<g></g>
											<g></g>
											<g></g>
											<g></g>
											<g></g>
											<g></g>
											<g></g>
											<g></g>
											<g></g>
										</g>
									</g>
								</svg>

								<span>Feel free to transact anywhere, anytime</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FeaturesContainer;
