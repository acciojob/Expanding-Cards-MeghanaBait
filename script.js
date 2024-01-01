//your JS code here. If required.
function togglePanel(panelId) {
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => {
        panel.classList.remove('active');
    });

    const clickedPanel = document.getElementById(panelId);
    clickedPanel.classList.add('active');
}