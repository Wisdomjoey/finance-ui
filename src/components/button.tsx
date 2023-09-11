function Button({
	size,
	bg,
	text,
	color,
	font,
}: {
	size?: string;
	bg?: string;
	text: string;
	color?: string;
	font?: string;
}) {
	return (
		<button
			className={`pt-[11px] pb-[15px] px-[30px] ${bg ?? "bg-theme_green"} ${
				size ?? "text-[18px]"
			} ${color ?? "text-[black]"} ${font ?? "font-semibold"} rounded-[30px]`}
		>
			{text}
		</button>
	);
}

export default Button;
