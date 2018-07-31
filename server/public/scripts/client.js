$(document).ready(onReady);

function onReady() {
    appendDom();
    $('#submit-btn').on('click', collectData);
    $('#submit-btn').on('click', clearData);
    $('#submit-btn').on('click', totalMonthlyCost);
    $('.table').on('click', '#delete-btn', deleteRow);
}

class Employee {
    constructor(firstNameIn, lastNameIn, idNumberIn, titleIn, annualSalaryIn) {
        this.firstName = firstNameIn;
        this.lastName = lastNameIn;
        this.idNumber = idNumberIn;
        this.title = titleIn;
        this.annualSalary = annualSalaryIn;
    }
}

let employees = [];
let salaries = [];

function appendDom() {
    let table = $('<table class="table"></table>');
    table.append('<thead><tr><th>First Name</th><th>Last Name</th><th>ID</th><th>Title</th><th>Annual Salary</th><th>Delete</th></thead>');
    let tbody = $('<tbody id="tableBody"></tbody>');
    $('.employees').append(table);
}

function clearData() {
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
}

let monthlyCost = 0;

function collectData() {
    let firstNameIn = $('#firstName').val();
    let lastNameIn = $('#lastName').val();
    let idNumberIn = $('#idNumber').val();
    let titleIn = $('#jobTitle').val();
    let annualSalaryIn = $('#annualSalary').val();
    annualSalaryIn = Number(annualSalaryIn);
    $('.table').append('<tr><td>' + firstNameIn + '</td><td>' + lastNameIn + '</td><td>' + idNumberIn + '</td><td>' + titleIn + '</td><td>' + annualSalaryIn.toLocaleString('en') + '</td><td><button id="delete-btn">Delete</button></td></tr>');
    salaries.push(annualSalaryIn);
    employees.push(firstNameIn, lastNameIn, idNumberIn, titleIn, annualSalaryIn);
}

function deleteRow() {
    $(this).closest('tr').remove();
}

function totalMonthlyCost() {
    for (i = 0; i < salaries.length; i++) {
        monthlyCost += Number(salaries[i]);
        monthlyCost = monthlyCost / 12;
        $('.total').html('<p id="totalCost">Total Monthly Cost: ' + monthlyCost.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) + '</p>');
        if (monthlyCost > 20000) {
            $('#totalCost').css('color', 'red');
            $('#totalCost').css('font-weight', 'bold');
            //$('#totalCost').css('background-color', 'red'); 
            //to show I can make the background color red. I prefer the astetic of making the text red
        }
    }
}