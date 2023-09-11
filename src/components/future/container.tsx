import Button from "../button";
import hand from "../../assets/images/Hand Card Design.png";

function FutureContainer() {
	return (
		<div className="future__container bg-theme_black rounded-[50px] h-[550px] mt-[30px] mb-[80px]">
			<div className="max-w-[1200px] mx-auto w-[90%] h-full">
				<div className="flex h-full items-center sm:flex-col-reverse">
					<div className="flex-1 sm:h-[50%] sm:w-full sm:pb-[20px]">
						<h1 className="text-[white] font-medium text-[40px] sm:text-[30px] mb-[40px] leading-[1.3]">
							Meet your banking future starting from now with Carty
						</h1>

						<Button text="Try Carty Now" size="text-[16px]" font="font-bold" />
					</div>

					<div className="flex-1 pt-[20px] sm:w-full sm:max-w-[350px]">
						<img
							alt="in hand"
							src={hand}
							className="w-full h-full object-cover sm:object-contain"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FutureContainer;
