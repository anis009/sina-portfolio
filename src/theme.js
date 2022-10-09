export const theme = () => {
	if (!JSON.parse(localStorage.getItem("sina-theme"))) {
		const root = window.document.documentElement;
		root.classList.toggle("dark");
	}
};
