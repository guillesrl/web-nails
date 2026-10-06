import { a as e, t } from "./jsx-runtime-BqlYg9ib.mjs";
import { C as n, Mt as r } from "./cal-atoms-B35e3sTk.mjs";
//#region node_modules/@calcom/atoms/dist/AppSettingsInterface-CDhBtLh0.js
var i = /* @__PURE__ */ e(t(), 1);
function a({ template: e }) {
	return /* @__PURE__ */ (0, i.jsxs)("div", {
		className: "min-h-16 bg-default border-subtle sticky flex flex-col justify-between gap-4 rounded-md border p-5",
		children: [
			/* @__PURE__ */ (0, i.jsxs)("div", {
				className: "flex items-start justify-start",
				children: [/* @__PURE__ */ (0, i.jsx)("div", { children: /* @__PURE__ */ (0, i.jsx)("div", {
					className: "mr-4 flex h-12 w-12 items-center justify-center rounded-md p-1",
					children: /* @__PURE__ */ (0, i.jsx)("img", {
						className: "h-8",
						alt: e.app,
						src: `/api/app-store/zapier/${e.icon}`
					})
				}) }), /* @__PURE__ */ (0, i.jsx)("div", {
					className: "mr-4",
					children: /* @__PURE__ */ (0, i.jsxs)("div", { children: [/* @__PURE__ */ (0, i.jsx)("p", {
						className: "text-emphasis truncate text-sm font-medium leading-4",
						children: e.app
					}), /* @__PURE__ */ (0, i.jsx)("p", {
						className: "text-subtle mt-[2px] text-sm",
						children: e.text
					})] })
				})]
			}),
			/* @__PURE__ */ (0, i.jsx)("div", {
				className: "hidden w-full sm:block",
				children: /* @__PURE__ */ (0, i.jsx)("div", {
					className: "float-right",
					children: /* @__PURE__ */ (0, i.jsx)(n, {
						color: "secondary",
						className: " w-[90px]",
						target: "_blank",
						href: e.link,
						children: "Use Zap"
					})
				})
			}),
			/* @__PURE__ */ (0, i.jsx)("div", {
				className: "mt-2 block w-full sm:hidden",
				children: /* @__PURE__ */ (0, i.jsx)("div", {
					className: "float-right",
					children: /* @__PURE__ */ (0, i.jsx)(n, {
						color: "secondary",
						className: "w-[90px]",
						target: "_blank",
						href: e.link,
						children: "Use Zap"
					})
				})
			})
		]
	});
}
var o = [
	{
		icon: "gmail.svg",
		app: "Gmail",
		text: "Send emails via Gmail for scheduled events",
		link: "https://zapier.com/app/editor/template/1071345"
	},
	{
		icon: "googleSheets.svg",
		app: "Google Sheets",
		text: "Create Google Sheets rows for scheduled events",
		link: "https://zapier.com/app/editor/template/1082047"
	},
	{
		icon: "salesforce.svg",
		app: "Salesforce",
		text: "Create Salesforce leads from new bookings",
		link: "https://zapier.com/app/editor/template/1082050"
	},
	{
		icon: "todoist.svg",
		app: "Todoist",
		text: "Create Todoist tasks for scheduled events",
		link: "https://zapier.com/app/editor/template/1082073"
	},
	{
		icon: "gmail.svg",
		app: "Gmail",
		text: "Send emails via Gmail for rescheduled events",
		link: "https://zapier.com/app/editor/template/1083605"
	},
	{
		icon: "gmail.svg",
		app: "Gmail",
		text: "Send emails via Gmail for cancelled events",
		link: "https://zapier.com/app/editor/template/1083609"
	},
	{
		icon: "gmail.svg",
		app: "Gmail",
		text: "Send emails via Gmail after scheduled meetings end",
		link: "https://zapier.com/app/editor/template/1083613"
	},
	{
		icon: "googleCalendar.svg",
		app: "Google Calendar",
		text: "Add new bookings to Google Calendar",
		link: "https://zapier.com/app/editor/template/1083651"
	}
];
function s() {
	let { t: e } = r();
	return /* @__PURE__ */ (0, i.jsxs)(i.Fragment, { children: [/* @__PURE__ */ (0, i.jsx)("div", {
		className: "text-sm font-semibold leading-4 ",
		children: e("get_started_zapier_templates")
	}), /* @__PURE__ */ (0, i.jsx)("div", {
		className: "mt-4 grid gap-4 md:grid-cols-2",
		children: o.map((e, t) => /* @__PURE__ */ (0, i.jsx)(a, { template: e }, t))
	})] });
}
//#endregion
export { s as default };
