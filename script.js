//your JS code here. If required.
function  togglePanel(panelId) {
	panels.forEach(panel =>{
		panel.classlist.remove('active');
	});

	const clickPanel = document.getElementById(panelId);
	clickPanel.classList.add("active");
}