// script.js

const treeContainer = document.querySelector('.tree-container');
const addMemberBtn = document.querySelector('.add-member-btn');
const addMemberForm = document.querySelector('.add-member-form');
const newMemberNameInput = document.querySelector('#new-member-name');
const newMemberImageInput = document.querySelector('#new-member-image');

addMemberForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newMemberName = newMemberNameInput.value.trim();
    const newMemberImage = newMemberImageInput.files[0];
    if (newMemberName && newMemberImage) {
        const newMemberHTML = `
            <li>
                <div class="member">
                    <img src="${URL.createObjectURL(newMemberImage)}" alt="${newMemberName}">
                    <h2>${newMemberName}</h2>
                    <p>New Member</p>
                </div>
            </li>
        `;
        const tree = document.querySelector('.tree');
        tree.innerHTML += newMemberHTML;
        newMemberNameInput.value = '';
        newMemberImageInput.value = '';
    }
});
