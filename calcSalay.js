
        let totalMonthlyCost = 0;

        function submitForm() {
            const firstName = document.querySelector('#firstName').value;
            const lastName = document.querySelector('#lastName').value;
            const idNumber = document.querySelector('#idNumber').value;
            const jobTitle = document.querySelector('#jobTitle').value;
            const annualSalary = parseFloat(document.querySelector('#annualSalary').value);

            const  monthly = annualSalary / 12;
            totalMonthlyCost += monthly;

            let tableBody = document.querySelector('#employeeTableBody');
           
           tableBody.innerHTML += <tr><td>${firstName}</td> <td>${lastName}</td><td>${idNumber}</td><td>${jobTitle}</td><td>${annualSalary}</td><td><button onclick='deleteEmployee()'>Delete</button></td></tr>;


            updateFooter();

            document.getElementById('employeeForm').reset();
        }

        function deleteEmployee(event) {
            event.target.parentElement.parentElement.remove();
            

            
        }

        function updateFooter() {
            let footer = document.querySelector('#footer');
            footer.innerHTML = `Total Monthly Cost: $ ${totalMonthlyCost}`;

            // Apply the 'over-budget' class if total monthly cost exceeds $20,000
            if (totalMonthlyCost > 20000) {
                footer.classList.add('over-budget');
            } else {
                footer.classList.remove('over-budget');
            }
        }

