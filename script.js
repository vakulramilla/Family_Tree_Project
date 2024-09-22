// script.js

const treeContainer = document.querySelector('.tree-container');
const addMemberBtns = document.querySelectorAll('.add-member-btn');

addMemberBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const member = btn.parentNode;
        const newMemberHTML = `
            <li>
                <div class="member">
                    <img src="" alt="New Member">
                    <h2>New Member</h2>
                    <p>New Member</p>
                    <button class="add-member-btn">Add Member</button>
                </div>
            </li>
        `;
        const newMember = document.createElement('li');
        newMember.innerHTML = newMemberHTML;
        member.parentNode.appendChild(newMember);
    });
});
