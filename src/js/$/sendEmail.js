export async function sendEmail({ username, email, message }) {
    console.log('sendEmail works');

    const data = {
        name: username.value,
        email: email.value,
        message: message.value
    };

    try {
        const response = await fetch('http://localhost:3002/send/mailjet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('❌', errorText);
            return;
        }

        const result = await response.json();
        console.log('✅', result.message);
    } catch (error) {
        console.error('❌', error.message);
    }
}
