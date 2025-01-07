import { quotes } from './quotes.js';

let currentQuoteDate = null;

document.addEventListener('DOMContentLoaded', function() {
  const saveBtn = document.getElementById('saveReflection');
  const exportBtn = document.getElementById('exportJournal');
  const reflectionInput = document.getElementById('reflection');

  // Remove navigation code and keep just today's functionality
  updateDateDisplay();
  loadTodayQuote();
  loadTodayReflection();

  saveBtn.addEventListener('click', () => {
    const entry = {
      date: new Date().toISOString(),
      quote: document.querySelector('.quote').textContent,
      philosopher: document.querySelector('.philosopher').textContent,
      reflection: reflectionInput.value,
      category: document.querySelector('.category').textContent
    };

    chrome.storage.local.get(['reflections'], (data) => {
      let reflections = data.reflections || [];
      // Update or add today's reflection
      const todayIndex = reflections.findIndex(r => 
        new Date(r.date).toDateString() === new Date().toDateString()
      );
      if (todayIndex >= 0) {
        reflections[todayIndex] = entry;
      } else {
        reflections.push(entry);
      }
      
      chrome.storage.local.set({ reflections }, () => {
        showSavedConfirmation();
      });
    });
  });

  exportBtn.addEventListener('click', async () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    chrome.storage.local.get(['reflections'], async (data) => {
      const reflections = data.reflections || [];
      
      // Add cover page with image
      const img = await loadImage('images/philosophical-cover.jpg');
      doc.addImage(img, 'JPEG', 0, 0, 210, 297); // A4 size
      
      doc.addPage();
      
      // Style configuration
      doc.setFont('Times', 'Roman');
      doc.setFontSize(24);
      doc.text('Philosophical Journal', 105, 20, { align: 'center' });
      
      let y = 40;
      reflections
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .forEach(entry => {
          if (y > 250) { // Check if we need a new page
            doc.addPage();
            y = 20;
          }
          
          const date = new Date(entry.date).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });

          // Style each entry
          doc.setFontSize(14);
          doc.text(date, 20, y);
          y += 10;
          
          doc.setFontSize(12);
          doc.setFont('Times', 'Italic');
          doc.text(`"${entry.quote}"`, 20, y, { maxWidth: 170 });
          y += 10;
          
          doc.setFont('Times', 'Roman');
          doc.text(`— ${entry.philosopher}`, 160, y, { align: 'right' });
          y += 15;
          
          doc.setFontSize(11);
          doc.text(entry.reflection, 20, y, { maxWidth: 170 });
          y += 25;
          
          // Add decorative separator
          doc.setLineWidth(0.5);
          doc.line(40, y-10, 170, y-10);
          y += 15;
        });

      // Save the PDF
      const today = new Date().toISOString().split('T')[0];
      doc.save(`philosophical-journal-${today}.pdf`);
    });
  });
});

// Helper function to load images
function loadImage(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.src = url;
  });
}

function showSavedConfirmation() {
  const saveBtn = document.getElementById('saveReflection');
  saveBtn.textContent = 'Saved!';
  saveBtn.classList.add('saved');
  setTimeout(() => {
    saveBtn.textContent = 'Save Reflection';
    saveBtn.classList.remove('saved');
  }, 2000);
}

function loadTodayQuote() {
  const today = new Date();
  const dateKey = today.toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit'
  }).replace('/', '-');
  
  let todayQuote = quotes[dateKey];
  
  // Fallback: if no quote found for today, pick a random one
  if (!todayQuote) {
    console.log('No quote found for', dateKey, 'selecting random quote');
    const availableDates = Object.keys(quotes);
    const randomDate = availableDates[Math.floor(Math.random() * availableDates.length)];
    todayQuote = quotes[randomDate];
    currentQuoteDate = randomDate;
  } else {
    currentQuoteDate = dateKey;
  }
  
  // Update UI
  const quoteElement = document.querySelector('.quote');
  const philosopherElement = document.querySelector('.philosopher');
  const categoryElement = document.querySelector('.category');
  
  if (quoteElement) quoteElement.textContent = todayQuote.quote;
  if (philosopherElement) philosopherElement.textContent = todayQuote.philosopher;
  if (categoryElement) categoryElement.textContent = todayQuote.category;
  
  if (todayQuote.note) {
    const noteElement = document.querySelector('.note');
    if (noteElement) noteElement.textContent = todayQuote.note;
  }

  // Load the reflection for the current quote
  loadTodayReflection();
}

function loadTodayReflection() {
  chrome.storage.local.get(['reflections'], (data) => {
    const reflections = data.reflections || [];
    const currentEntry = reflections.find(entry => 
      entry.date.split('T')[0].endsWith(currentQuoteDate)
    );
    
    if (currentEntry) {
      document.getElementById('reflection').value = currentEntry.reflection;
    } else {
      document.getElementById('reflection').value = '';
    }
  });
}

function updateDateDisplay() {
    const today = new Date();
    const dateDisplay = document.getElementById('currentDate');
    if (dateDisplay) {
        dateDisplay.textContent = today.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }) + ' ⏳';
    }
}

function exportToPDF() {
    chrome.storage.local.get(['reflections'], function(data) {
        const reflections = data.reflections || [];
        
        // Create PDF content
        const docDefinition = {
            content: [
                {
                    text: 'Philosophical Reflections Journal',
                    style: 'header',
                    alignment: 'center',
                    margin: [0, 0, 0, 20]
                }
            ],
            styles: {
                header: {
                    fontSize: 22,
                    bold: true,
                    margin: [0, 0, 0, 10]
                },
                date: {
                    fontSize: 14,
                    bold: true,
                    margin: [0, 15, 0, 5]
                },
                quote: {
                    fontSize: 12,
                    italics: true,
                    margin: [0, 0, 0, 5]
                },
                philosopher: {
                    fontSize: 12,
                    bold: true
                },
                reflectionHeader: {  // New style for reflection header
                    fontSize: 14,
                    bold: true,
                    margin: [0, 10, 0, 5]
                },
                reflection: {
                    fontSize: 12,
                    margin: [0, 0, 0, 20]
                }
            }
        };

        // Add each reflection entry
        reflections.forEach(entry => {
            const quote = quotes[entry.date.split('T')[0].slice(-5)];
            if (quote) {
                docDefinition.content.push(
                    { text: new Date(entry.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    }), style: 'date' },
                    { text: `"${quote.quote}"`, style: 'quote' },
                    { text: `— ${quote.philosopher}`, style: 'philosopher' },
                    { text: 'Your Reflection:', style: 'reflectionHeader' },  // Added header
                    { text: entry.reflection, style: 'reflection' }
                );
            }
        });

        // Generate and download PDF
        pdfMake.createPdf(docDefinition).download('philosophical-reflections.pdf');
    });
} 