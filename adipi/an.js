async function fetchData(url) {
    try {
        const response = await fetch(url);
        
        // Check if the response status is OK (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the JSON body and return it
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

// Example usage:
fetchData('https://api.example.com/data')
    .then(data => console.log('Data:', data))
    .catch(error => console.error('Error:', error));
