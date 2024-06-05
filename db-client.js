const supabaseUrl = 'https://iyfedtvisozsfhpxpiey.supabase.co';
// Key is insert only privilege
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5ZmVkdHZpc296c2ZocHhwaWV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcxNzYyMTcsImV4cCI6MjAzMjc1MjIxN30.8cq_c83VxUbrCf4hBYwLHJu0a1Ccsj6xGpfHPijZhqI';
const db = supabase.createClient(supabaseUrl, supabaseKey);
console.log("DB client created");

function insert() {
    const _first_name = document.getElementById('first_name').value;
    const _last_name = document.getElementById('last_name').value;
    const _phone = document.getElementById('contact_phone').value;
    const _email = document.getElementById('contact_email').value;
    // If not an email, focus on the email
    if (!_email.includes('@')) {
        alert('Please enter a valid email address');
        document.getElementById('contact_email').focus();
        return;
    }
    const _company_name = document.getElementById('company_name').value;
    const _warranty = document.getElementById('warranty').value;
    const _street = document.getElementById('company_street').value;
    const _city = document.getElementById('company_city').value;
    const _state = document.getElementById('company_state').value;
    const _zip = document.getElementById('company_zip').value;
    const _role = document.getElementById('project_role').value;
    const _title = document.getElementById('your_title').value;
    const _number_performed = document.getElementById('number_performed_on_a_similar_system').value;
    const _years_experience = document.getElementById('years_of_relevant_experience').value;
    const _professional_credentials = document.getElementById('professional_credentials').value;
    const _licenses = document.getElementById('licenses').value;

    if (_first_name === '' || _last_name === '' || _phone === '' || _email === '' || _company_name === '' || _warranty === '' || _street === '' || _city === '' || _state === '' || _zip === '' || _role === '' || _title === '' || _number_performed === '' || _years_experience === '' || _professional_credentials === '' || _licenses === '') {
        alert('Please fill in all fields');
        document.getElementById('form').style.display = 'block';
        document.getElementById('processing').style.display = 'none';
        document.getElementById('thank-you').style.display = 'none';
        return;
    }

    // Hide the form, show processing request.
    document.getElementById('form').style.display = 'none';
    document.getElementById('processing').style.display = 'block';

    console.log("Insert function called, window.insert next");

    async function windowInsert() {
        console.log("window.insert called");
        const { error } = await db
            .from('contractors')
            .insert([
                {
                    first_name: _first_name,
                    last_name: _last_name,
                    phone: _phone,
                    email: _email,
                    company_name: _company_name,
                    warranty: _warranty,
                    street: _street,
                    city: _city,
                    state: _state,
                    zip: _zip,
                    role: _role,
                    title: _title,
                    number_performed: _number_performed,
                    years_experience: _years_experience,
                    professional_credentials: _professional_credentials,
                    licenses: _licenses
                }
            ]);
        console.log("query complete");
        if (error) {
            console.error('Error inserting data:', error);
            document.getElementById('form').style.display = 'block';
            document.getElementById('processing').style.display = 'none';
            document.getElementById('thank-you').style.display = 'none';
            alert('Error submitting form. Please try again.');
        } else {
            document.getElementById('form').style.display = 'none';
            document.getElementById('processing').style.display = 'none';
            document.getElementById('thank-you').style.display = 'block';
        }
    }

    // Call windowInsert immediately after defining it
    windowInsert();
}

function select() {
    async function selectData() {
        console.log("Select function called");

        const { data, error } = await db
            .from('Test')
            .select('*');

        if (error) {
            console.error('Error selecting data:', error);
        } else {
            console.log("Data selected successfully:", data);
        }
    }

    // Call selectData to fetch and log data from the Test table
    selectData();
}
