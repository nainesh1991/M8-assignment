// CREATE AN ARRAY OF EMPLOYEES
let employees = [
    { id: 1001, name: 'Nainesh Patel', ext: 3333, email: 'nainesh.patel@yahoo.com', department: 'Marketing' },
    { id: 1002, name: 'Stephen Haunter', ext: 4444, email: 'stephen@gmail.com', department: 'Engineering' },
    { id: 1003, name: 'Hayley Corona', ext: 5555, email: 'Hayley@yahoo.com', department: 'QA' },
    { id: 1004, name: 'Brylee Morris', ext: 6666, email: 'Brylee@hotmail.com', department: 'Sales' },
    { id: 1005, name: 'Dakari Olsen', ext: 7777, email: 'Dakari@ymail.com', department: 'Administrative' }
];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
let storedEmployees = localStorage.getItem('employees');
if (storedEmployees) {
    employees = JSON.parse(storedEmployees); // Retrieve employees from localStorage
}

// GET DOM ELEMENTS
let $ = (id) => document.getElementById(id)
let form = $('addForm')
let empTable = document.getElementById('empTable').getElementsByTagName('tbody')[0];
let empCount = document.getElementById('empCount');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
window.addEventListener('DOMContentLoaded', buildGrid);

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let ext = document.getElementById('extension').value;
    let email = document.getElementById('email').value;
    let department = document.getElementById('department').value;
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmployee = {
        id: id,
        name: name,
        ext: ext,
        email: email,
        department: department,
    };
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee);

    // UPDATE THE STORAGE
    localStorage.setItem('employees', JSON.stringify(employees));
    // BUILD THE GRID
    buildGrid();
    // RESET THE FORM
    form.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {

    // CONFIRM THE DELETE
    if (e.target.classList.contains('delete-btn')) {
        if (confirm('Are you sure you want to delete this employee?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let row = e.target.parentNode.parentNode;
            let index = row.rowIndex - 1;
            // REMOVE EMPLOYEE FROM ARRAY
            employees.splice(index, 1);

            // UPDATE THE STORAGE
            localStorage.setItem('employees', JSON.stringify(employees));

            // REBUILD THE GRID
            buildGrid();
        }
    }


});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.innerHTML = '';
    // REBUILD THE TBODY FROM SCRATCH

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    for (let employee of employees) {

        // let row = document.createElement('tr');
        // row.innerHTML = `
        //  <td>${employee.id}</td>
        //  <td>${employee.name}</td>
        //  <td>${employee.ext}</td>
        //  <td>${employee.email}</td>
        //  <td>${employee.department}</td>
        //  <td><button class="btn btn-danger delete-btn">Delete</button></td>
        // `;

        // // APPEND THE ROW TO THE TBODY
        // empTable.appendChild(row);

        let row = empTable.insertRow();

        // INSERT CELLS INTO THE ROW AND SET THEIR CONTENT
        let cellId = row.insertCell();
        cellId.textContent = employee.id;

        let cellName = row.insertCell();
        cellName.textContent = employee.name;

        let cellExt = row.insertCell();
        cellExt.textContent = employee.ext;

        let cellEmail = row.insertCell();
        cellEmail.textContent = employee.email;

        let cellDept = row.insertCell();
        cellDept.textContent = employee.department;

        let cellBtn = row.insertCell();
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('btn', 'btn-danger', 'delete-btn');
        cellBtn.appendChild(deleteBtn);

        empTable.appendChild(row)

    }


    // UPDATE EMPLOYEE COUNT
    empCount.textContent = employees.length;
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees));
};