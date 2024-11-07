document.addEventListener('DOMContentLoaded', function() {
    generateCalendar();
});

// Define an object with date-PDF mappings and additional info
const pdfLinks = {
    '2024-06-05': {
        pdfLink: 'https://github.com/Binaryfetch/Training-102_Reports/raw/main/5%20Jun.pdf',
        additionalInfo: 'Company Introduction, Projects Overview, Mern Stack Topic Disscussion, and some questionnaire '
    },
    '2024-06-06': {
        pdfLink: 'https://github.com/Binaryfetch/Training-102_Reports/raw/main/6Jun.pdf',
        additionalInfo: 'Revision of HTML & CSS and overview of FULL Stack'
    },
    '2024-06-07': {
        pdfLink: 'https://github.com/Binaryfetch/Training-102_Reports/raw/main/7Jun.pdf',
        additionalInfo: 'Introduction to Nodejs and Globe Object'
    },
    '2024-06-08': {
        pdfLink: 'https://github.com/Binaryfetch/Training-102_Reports/raw/main/8June.pdf',
        additionalInfo: 'File Operations in Nodejs'
    },
    
    '2024-06-11': {
        pdfLink: 'https://github.com/Binaryfetch/Training-102_Reports/raw/main/11Jun.pdf',
        additionalInfo: 'Path Modules and Directory Operations '
    },
    '2024-06-12': {
        pdfLink: 'https://github.com/Binaryfetch/Training-102_Reports/raw/main/12Jun.pdf',
        additionalInfo: 'Custom Modules '
    },
    '2024-06-13': {
        pdfLink: 'https://github.com/Binaryfetch/Training-102_Reports/raw/main/13Jun.pdf',
        additionalInfo: 'Streams ( Readable,Writeable & Pipes)'
    },
    '2024-06-14': {
        pdfLink: 'https://github.com/Binaryfetch/Training-102_Reports/raw/main/14Jun.pdf',
        additionalInfo: 'Introduction to NPM & Dependencies'
    },
    '2024-06-15': {
        pdfLink: 'https://github.com/Binaryfetch/Training-102_Reports/raw/main/15Jun.pdf',
        additionalInfo: 'Asynchronous Programming (Callbacks & Promises)'
    },
    
    '2024-06-18': {
        pdfLink: 'https://github.com/Binaryfetch/Training-102_Reports/raw/main/18Jun.pdf',
        additionalInfo: 'Async/Await in Nodejs'
    },
    '2024-06-19': {
        pdfLink: 'https://github.com/Binaryfetch/Training-102_Reports/raw/main/19June.pdf',
        additionalInfo: 'Fundamentals of the Web and REST APIs'
    },
    '2024-06-20': {
        pdfLink: 'https://github.com/Binaryfetch/Training-102_Reports/raw/main/20Jun.pdf',
        additionalInfo: 'Implementation of handling GET requests in Node.js application'
    },
    '2024-06-21': {
        pdfLink: 'https://github.com/Binaryfetch/Training-102_Reports/raw/main/21June.pdf',
        additionalInfo: 'Handling POST requests and exploring middleware'
    },
    '2024-06-27': {
        pdfLink: 'https://github.com/Binaryfetch/Training-102_Reports/raw/main/27june.pdf',
        additionalInfo: 'Express.js'
    },
    '2024-06-28': {
        pdfLink: 'https://github.com/Binaryfetch/Training-102_Reports/raw/main/28%20June.pdf',
        additionalInfo: 'Incomping Request and format json '
    },
    '2024-06-29': {
        pdfLink: 'https://github.com/Binaryfetch/Training-102_Reports/raw/main/29july.pdf',
        additionalInfo: 'Module Route '
    },
    '2024-07-2': {
        pdfLink: 'https://github.com/Binaryfetch/Training-102_Reports/raw/main/2july.pdf',
        additionalInfo: 'Model MongoDB '
    },
    '2024-07-3': {
        pdfLink: 'https://github.com/Binaryfetch/Training-102_Reports/raw/main/3July.pdf',
        additionalInfo: 'Typescript '
    },
    '2024-07-4': {
        pdfLink: 'https://github.com/Binaryfetch/Training-102_Reports/raw/main/4July.pdf',
        additionalInfo: 'Typescript and code quality'
    }
    
};

function generateCalendar() {
    const calendar = document.querySelector('.calendar');
    const startDate = new Date(Date.UTC(2024, 5, 5)); // June 1, 2024, UTC to avoid timezone issues
    const endDate = new Date(Date.UTC(2024, 6, 5)); // July 1, 2024, UTC to avoid timezone issues

    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = currentDate.getUTCDate(); // Display UTC date
        dayElement.dataset.date = currentDate.toISOString().split('T')[0];

        // Check if the current date is a Sunday or a holiday with no PDF link
        if (currentDate.getUTCDay() === 0) { // Sunday
            dayElement.classList.add('sunday'); // Apply Sunday color
        } else if (!pdfLinks[currentDate.toISOString().split('T')[0]]) { // No PDF link
            dayElement.classList.add('no-link'); // Apply color for days with no PDF link
        } else {
            dayElement.classList.add('clickable'); // Mark as clickable
            dayElement.addEventListener('click', function() {
                const dateKey = dayElement.dataset.date;
                showEntry(dateKey); // Show entry details for the clicked date
            });
        }

        // Special handling for specific holidays with colors
        if (currentDate.getUTCDate() === 10 && currentDate.getUTCMonth() === 5) { // June 10
            dayElement.classList.add('holiday');
            dayElement.classList.add('june-10');
            dayElement.removeEventListener('click', showEntry); // Remove click event listener
        } else if (currentDate.getUTCDate() === 17 && currentDate.getUTCMonth() === 5) { // June 17
            dayElement.classList.add('holiday');
            dayElement.classList.add('june-17');
            dayElement.removeEventListener('click', showEntry); // Remove click event listener
        } else if (currentDate.getUTCDate() === 22 && currentDate.getUTCMonth() === 5) { // June 22
            dayElement.classList.add('holiday');
            dayElement.classList.add('june-22');
            dayElement.removeEventListener('click', showEntry); // Remove click event listener
        }

        calendar.appendChild(dayElement);
        currentDate.setUTCDate(currentDate.getUTCDate() + 1); // Move to the next UTC date
    }
}

function showEntry(dateString) {
    const entryDateElement = document.getElementById('entry-date');
    const entryTextElement = document.getElementById('entry-text');
    const downloadLink = document.getElementById('download-link');
    const additionalInfoElement = document.getElementById('additional-info');

    // Create a new Date object from the ISO date string
    const date = new Date(dateString);

    // Format the date for display in Indian timezone (IST: UTC+5:30)
    const options = { 
        timeZone: 'Asia/Kolkata', // Indian Standard Time (IST)
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
    };
    const formattedDate = date.toLocaleDateString('en-US', options);

    entryDateElement.textContent = `Diary Entry for ${formattedDate}`;
    entryTextElement.textContent = `Details of work done on ${formattedDate}...`;

    // Update download link attributes for PDF download
    if (pdfLinks[dateString] && pdfLinks[dateString].pdfLink) {
        downloadLink.setAttribute('href', pdfLinks[dateString].pdfLink);
        downloadLink.style.display = 'inline-block'; // Show the download link
    } else {
        downloadLink.removeAttribute('href');
        downloadLink.style.display = 'none'; // Hide the download link if no PDF is available
    }

    // Update additional info section
    if (pdfLinks[dateString] && pdfLinks[dateString].additionalInfo) {
        additionalInfoElement.textContent = pdfLinks[dateString].additionalInfo;
        additionalInfoElement.style.display = 'block'; // Show the additional info section
    } else {
        additionalInfoElement.textContent = ''; // Clear the content if no additional info is available
        additionalInfoElement.style.display = 'none'; // Hide the additional info section
    }
}
