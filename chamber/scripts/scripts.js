const lastModified = document.getElementById('last-modified');
    lastModified.textContent = new Date().toLocaleDateString();

    // Function to fetch and parse JSON data
async function fetchMembers() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    return data;
}

// Function to create HTML elements for members
function createMemberElements(members, view) {
    const memberList = document.getElementById('member-list');
    memberList.innerHTML = '';

    members.forEach(member => {
        const memberElement = document.createElement(view === 'grid' ? 'div' : 'li');
        memberElement.classList.add(view === 'grid' ? 'member-card' : 'member-list-item');

        // Create HTML elements for member information
        // ...

        memberList.appendChild(memberElement);
    });
}

// Function to handle view toggle
function toggleView() {
    const memberList = document.getElementById('member-list');
    const view = memberList.classList.contains('grid') ? 'list' : 'grid';
    memberList.classList.toggle('grid');
    memberList.classList.toggle('list');
    createMemberElements(members, view);
}

// Main logic
let members = [];

fetchMembers()
    .then(data => {
        members = data;
        createMemberElements(members, 'grid'); // Default view
    })
    .catch(error => {
        console.error('Error fetching members:', error);
    });

const viewToggle = document.getElementById('view-toggle');
viewToggle.addEventListener('click', toggleView);