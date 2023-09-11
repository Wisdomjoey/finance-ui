import React from "react";

function ListTop({
	children,
	num,
	headTxt,
	introTxt,
	side,
}: {
	children?: React.ReactNode;
	num: string;
	headTxt: string;
	introTxt: string;
	side?: React.ReactNode;
}) {
	return (
		<div className="flex-1 relative z-10">
			<div className="absolute flex gap-[50px] w-full -top-[160px] sm:-top-[115px]">
				<div className="flex-1 flex items-center gap-[80px] sm:gap-[50px]">
					<i className="text-[250px] sm:text-[180px] text-lighter_black font-bold">{num}</i>

					<div className="flex items-center flex-1 text-lighter_black -mb-[70px] text-[18px]">
						<p className="-mt-[6px] -mr-[5px]">•</p>
						<p className="flex-1 h-[2px] bg-lighter_black"></p>
						<p className="-mt-[6px] -ml-[5px]">•</p>
					</div>
				</div>
			</div>

			<div
				className={`${children ? "block" : "flex gap-[50px] sm:flex-col sm:gap-[30px]"} relative z-10`}
			>
				<div className={children ? "w-full" : "flex-1"}>
					<i className="font-semibold text-[15px] text-text_color">{introTxt}</i>

					<h1 className="font-semibold text-[37px] mt-[20px]">{headTxt}</h1>
				</div>

				{side ?? children}
			</div>
		</div>
	);
}

export default ListTop;
