import React from "react";
import ListTop from "../listTop";

function AboutContainer() {
	return (
		<div className="about__container relative">
			<div className="max-w-[1200px] mx-auto w-[90%] py-[80px]">
				<div className="flex flex-col items-center gap-[50px]">
					<ListTop
						introTxt="About Us"
						headTxt="Get to know more about carty"
						num="02"
						side={
							<p className="font-medium text-[15px] text-text_color mt-[25px] leading-[1.4] flex-1">
								We are customer-focused digital bank that provide complete
								financial solutions to meet your entire financial needs
							</p>
						}
					/>

          <div className="flex items-center justify-center gap-[15px] xs:gap-[10px] text-center w-full">
            <div className="flex flex-col items-center justify-center gap-[20px] bg-lighter_black rounded-[20px] p-[20px] h-[230px] sm:h-[150px] xs:p-[10px] flex-1">
              <h1 className="text-[50px] sm:text-[25px] text-[black]/[0.15] font-semibold">243K</h1>

              <p className="text-[14px] sm:text-[12px] xs:!text-[10px] text-text_color font-medium">Carty's users from all over the globe</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-[20px] bg-lighter_black rounded-[20px] p-[20px] h-[230px] sm:h-[150px] xs:p-[10px] flex-1">
              <h1 className="text-[50px] sm:text-[25px] text-[black]/[0.15] font-semibold">489M</h1>

              <p className="text-[14px] sm:text-[12px] xs:!text-[10px] text-text_color font-medium">Carty's revenue in 2022 in the first quarter</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-[20px] bg-lighter_black rounded-[20px] p-[20px] h-[230px] sm:h-[150px] xs:p-[10px] flex-1">
              <h1 className="text-[50px] sm:text-[25px] font-semibold">267%</h1>

              <p className="text-[14px] sm:text-[12px] xs:!text-[10px] text-text_color font-medium">Carty's investment growth in 2022</p>
            </div>
          </div>
				</div>
			</div>
		</div>
	);
}

export default AboutContainer;
