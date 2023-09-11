import React from "react";
import Button from "../button";

function FooterContainer() {
	return (
		<footer className="footer__container mt-[30px] bg-theme_black rounded-[50px_50px_0px_0px] h-[550px] xs:h-[500px]">
			<div className="max-w-[1200px] mx-auto w-[90%] h-full relative overflow-hidden flex flex-col justify-between">
				<div className="h-[calc(100%-75px)] sm:h-[calc(100%-100px)] flex flex-col w-[70%] xs:w-[85%] mx-auto items-center justify-center py-[10px]">
					<div className="flex flex-col items-center justify-center gap-[50px] mt-auto">
						<h1 className="text-[white] text-[35px] xs:text-[30px] text-center font-medium">Connect your finances with Carty</h1>

						<Button text="Join Carty Now" size="text-[16px]" font="font-bold" />
					</div>

					<p className="text-[white] mt-auto text-[20px] font-medium">carty</p>
				</div>

				<div className="py-[30px] flex flex-wrap justify-between gap-[10px] text-center text-[white]/50 text-[15px] w-full">
					<p className="flex-1 min-w-fit">Terms & Agreements</p>
					<p className="flex-1 min-w-fit">@2022 JayZ All Rights Reserved</p>
					<p className="flex-1 min-w-fit">Privacy Policy</p>
				</div>
			</div>
		</footer>
	);
}

export default FooterContainer;
