document.addEventListener('DOMContentLoaded', () => {
    const orgChart = document.querySelector('.org-chart');

    if (orgChart) {
        // Add click listener to the chart container (event delegation)
        orgChart.addEventListener('click', (event) => {
            // Check if the clicked element OR its parent is a toggle node
            const toggleNode = event.target.closest('.toggle');

            if (toggleNode) {
                // Find the parent list item (li)
                const parentLi = toggleNode.parentElement;

                if (parentLi) {
                    // Toggle the 'collapsed' class on the list item
                    parentLi.classList.toggle('collapsed');
                }
            }
        });

        // Optional: Initially collapse nodes below a certain level (e.g., below level 2)
        const allListItems = orgChart.querySelectorAll('li');
        allListItems.forEach(li => {
            // Check if the parent UL's parent is another LI (meaning it's not level 1 or 2)
            const parentUl = li.parentElement;
            if (parentUl && parentUl.parentElement && parentUl.parentElement.tagName === 'LI') {
                 // Check if this li actually has children to collapse
                 if (li.querySelector('ul')) {
                     li.classList.add('collapsed');
                 }
            }
        });

         // Ensure the very top node's children are not collapsed initially if needed
         const topLevelToggles = orgChart.querySelectorAll(':scope > ul > li.collapsed');
         topLevelToggles.forEach(li => li.classList.remove('collapsed'));


    } else {
        console.error('Organization chart container (.org-chart) not found.');
    }
});
