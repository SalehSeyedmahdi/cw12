import { El } from "../../utils/el.js";

export function Container() {
	const API_URL = "https://690c987fa6d92d83e84e66f6.mockapi.io/users";
	const container = El({
		element: "div",
		className:
			"w-1/2 flex flex-col justify-center items-center gap-5 bg-[#e8edf6] p-5",
	});
	const header = El({
		element: "p",
		innerText: "دفترچه تلفن 📞",
		className: "font-bold text-2xl",
	});
	const form = El({
		element: "from",
		className: "w-full flex flex-col items-center gap-3",
		children: [
			El({
				element: "input",
				className:
					"w-full border border-gray-300 bg-[#f7fafb] text-right rtl rounded-lg p-2",
				restAttrs: {
					placeholder: "نام و نام خانوادگی",
				},
			}),
			El({
				element: "input",
				className:
					"w-full border  border-gray-300 bg-[#f7fafb] text-right rtl rounded-lg p-2",
				restAttrs: {
					placeholder: "شماره تماس",
				},
			}),
			El({
				element: "button",
				innerText: "افزودن مخاطب",
				className: "w-full text-[#ffffff] bg-[#387ef4] rounded-lg p-2",
			}),
		],
	});
	container.append(header, form);

	async function getData() {
		const data = await fetch(API_URL);
		const response = await data.json();

		const table = El({
			element: "table",
			className: "w-full text-right",
			children: [
				El({
					element: "thead",
					className: "w-full flex bg-[#f1f5f9] rounded-md",
					children: [
						El({
							element: "tr",
							className: "w-full flex justify-around text-md p-3 pr-4",
							children: [
								El({
									element: "th",
									className: "w-full",
									innerText: "نام",
								}),
								El({
									element: "th",
									innerText: "شماره",
									className: " w-full",
								}),
								El({
									element: "th",
									innerText: "عملیات",
									className: "w-full",
								}),
							],
						}),
					],
				}),
				El({
					element: "tbody",
					className: "w-full flex flex-col",
					children: response.map((item) =>
						El({
							element: "tr",
							className:
								"w-full flex justify-around items-center text-md p-3 pr-4",
							children: [
								El({
									element: "td",
									className: "w-full font-bold",
									innerText: item.name,
								}),
								El({
									element: "td",
									innerText: item.phoneNumber,
									className: " w-full font-bold",
								}),
								El({
									element: "td",
									className: "w-full flex gap-2",
									children: [
										El({
											element: "div",
											className:
												"bg-[#f1f5f9] p-2 rounded-lg text-sm text-nowrap",
											innerText: "✏ ویرایش",
										}),
										El({
											element: "div",
											className:
												"bg-[#f1f5f9] p-2 rounded-lg text-sm text-nowrap",
											innerText: "🗑 حذف",
										}),
									],
								}),
							],
						})
					),
				}),
			],
		});

		container.append(table);
	}
	getData();
	return container;
}
