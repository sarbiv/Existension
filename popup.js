const quotes = [
  // Existentialism
  {
    quote: "He who has a why to live can bear almost any how.",
    philosopher: "Friedrich Nietzsche",
    category: "Existential Meaning"
  },
  {
    quote: "Man is condemned to be free.",
    philosopher: "Jean-Paul Sartre",
    category: "Existential Freedom"
  },
  {
    quote: "Existence precedes essence.",
    philosopher: "Jean-Paul Sartre",
    category: "Existentialism"
  },
  {
    quote: "Life can only be understood backwards; but it must be lived forwards.",
    philosopher: "Søren Kierkegaard",
    category: "Existential Time"
  },
  {
    quote: "Anxiety is the dizziness of freedom.",
    philosopher: "Søren Kierkegaard",
    category: "Existential Freedom"
  },

  // Ethics & Morality
  {
    quote: "The unexamined life is not worth living.",
    philosopher: "Socrates",
    category: "Ethics & Self-Knowledge"
  },
  {
    quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    philosopher: "Aristotle",
    category: "Ethics & Virtue"
  },
  {
    quote: "Act only according to that maxim by which you can at the same time will that it should become a universal law.",
    philosopher: "Immanuel Kant",
    category: "Ethics & Morality"
  },
  {
    quote: "Happiness is not an ideal of reason but of imagination.",
    philosopher: "Immanuel Kant",
    category: "Ethics & Happiness"
  },

  // Metaphysics
  {
    quote: "I think, therefore I am.",
    philosopher: "René Descartes",
    category: "Metaphysics & Consciousness"
  },
  {
    quote: "The only thing I know is that I know nothing.",
    philosopher: "Socrates",
    category: "Epistemology"
  },
  {
    quote: "Everything flows.",
    philosopher: "Heraclitus",
    category: "Metaphysics & Change"
  },

  // Political Philosophy
  {
    quote: "Man is by nature a political animal.",
    philosopher: "Aristotle",
    category: "Political Philosophy"
  },
  {
    quote: "Until philosophers are kings, or the kings and princes of this world have the spirit and power of philosophy, cities will never have rest from their evils.",
    philosopher: "Plato",
    category: "Political Philosophy"
  },

  // Eastern Philosophy
  {
    quote: "The journey of a thousand miles begins with a single step.",
    philosopher: "Lao Tzu",
    category: "Eastern Wisdom"
  },
  {
    quote: "Be the change you wish to see in the world.",
    philosopher: "Mahatma Gandhi",
    category: "Ethics & Action"
  },
  {
    quote: "Empty your mind, be formless, shapeless, like water.",
    philosopher: "Bruce Lee",
    category: "Eastern Philosophy"
  },

  // Modern Philosophy
  {
    quote: "God is dead. God remains dead. And we have killed him.",
    philosopher: "Friedrich Nietzsche",
    category: "Modern Philosophy"
  },
  {
    quote: "There is but one truly serious philosophical problem, and that is suicide.",
    philosopher: "Albert Camus",
    category: "Existential Meaning"
  },
  {
    quote: "The world is all that is the case.",
    philosopher: "Ludwig Wittgenstein",
    category: "Logic & Language"
  },

  // Epistemology
  {
    quote: "Knowledge is power.",
    philosopher: "Francis Bacon",
    category: "Epistemology"
  },
  {
    quote: "The limits of my language mean the limits of my world.",
    philosopher: "Ludwig Wittgenstein",
    category: "Language & Knowledge"
  },

  // Ancient Wisdom
  {
    quote: "Know thyself.",
    philosopher: "Temple of Apollo at Delphi",
    category: "Ancient Wisdom"
  },
  {
    quote: "As above, so below.",
    philosopher: "Hermes Trismegistus",
    category: "Hermetic Philosophy"
  },

  // Stoic Philosophy
  {
    quote: "The greatest power we have is the power of choice.",
    philosopher: "Seneca",
    category: "Stoicism"
  },
  {
    quote: "Waste no more time arguing about what a good man should be. Be one.",
    philosopher: "Marcus Aurelius",
    category: "Stoicism"
  },
  {
    quote: "First say to yourself what you would be; then do what you have to do.",
    philosopher: "Epictetus",
    category: "Stoicism"
  },
  {
    quote: "The happiness of your life depends upon the quality of your thoughts.",
    philosopher: "Marcus Aurelius",
    category: "Stoicism"
  },

  // Phenomenology
  {
    quote: "Back to the things themselves!",
    philosopher: "Edmund Husserl",
    category: "Phenomenology"
  },
  {
    quote: "The body is our general medium for having a world.",
    philosopher: "Maurice Merleau-Ponty",
    category: "Phenomenology"
  },

  // Critical Theory
  {
    quote: "To be radical is to grasp things by the root.",
    philosopher: "Karl Marx",
    category: "Critical Theory"
  },
  {
    quote: "Art is not a mirror held up to reality but a hammer with which to shape it.",
    philosopher: "Bertolt Brecht",
    category: "Critical Theory"
  },

  // Pragmatism
  {
    quote: "Truth is what works.",
    philosopher: "William James",
    category: "Pragmatism"
  },
  {
    quote: "The path of least resistance and least trouble is a mental rut already made.",
    philosopher: "John Dewey",
    category: "Pragmatism"
  },

  // Buddhist Philosophy
  {
    quote: "Peace comes from within. Do not seek it without.",
    philosopher: "Buddha",
    category: "Buddhist Philosophy"
  },
  {
    quote: "What we think, we become.",
    philosopher: "Buddha",
    category: "Buddhist Philosophy"
  },
  {
    quote: "In the end these things matter most: How well did you love? How fully did you live? How deeply did you let go?",
    philosopher: "Buddha",
    category: "Buddhist Philosophy"
  },


  // Enlightenment Philosophy
  {
    quote: "Sapere aude! (Dare to know!)",
    philosopher: "Immanuel Kant",
    category: "Enlightenment"
  },
  {
    quote: "Man is born free, and everywhere he is in chains.",
    philosopher: "Jean-Jacques Rousseau",
    category: "Enlightenment"
  },

  // Contemporary Philosophy
  {
    quote: "The personal is political.",
    philosopher: "Carol Hanisch",
    category: "Feminist Philosophy"
  },
  {
    quote: "One is not born, but rather becomes, a woman.",
    philosopher: "Simone de Beauvoir",
    category: "Feminist Philosophy"
  },

  // Analytical Philosophy
  {
    quote: "Whereof one cannot speak, thereof one must be silent.",
    philosopher: "Ludwig Wittgenstein",
    category: "Analytical Philosophy"
  },
  {
    quote: "Philosophy is a battle against the bewitchment of our intelligence by means of language.",
    philosopher: "Ludwig Wittgenstein",
    category: "Analytical Philosophy"
  },

  // Environmental Philosophy
  {
    quote: "The more clearly we can focus our attention on the wonders and realities of the universe about us, the less taste we shall have for destruction.",
    philosopher: "Rachel Carson",
    category: "Environmental Philosophy"
  },
  {
    quote: "What we are doing to the forests of the world is but a mirror reflection of what we are doing to ourselves and to one another.",
    philosopher: "Mahatma Gandhi",
    category: "Environmental Ethics"
  },

  // Philosophy of Mind
  {
    quote: "The mind is not a vessel to be filled but a fire to be kindled.",
    philosopher: "Plutarch",
    category: "Philosophy of Mind"
  },
  {
    quote: "The question of whether machines can think is about as relevant as the question of whether submarines can swim.",
    philosopher: "Edsger Dijkstra",
    category: "Philosophy of Mind"
  },

  // Philosophy of Science
  {
    quote: "Science is not only compatible with spirituality; it is a profound source of spirituality.",
    philosopher: "Carl Sagan",
    category: "Philosophy of Science"
  },
  {
    quote: "The good thing about science is that it's true whether or not you believe in it.",
    philosopher: "Neil deGrasse Tyson",
    category: "Philosophy of Science"
  },

  // Philosophy of Education
  {
    quote: "Education is not preparation for life; education is life itself.",
    philosopher: "John Dewey",
    category: "Philosophy of Education"
  },
  {
    quote: "The function of education is to teach one to think intensively and to think critically.",
    philosopher: "Martin Luther King Jr.",
    category: "Philosophy of Education"
  },

  // Philosophy of Art
  {
    quote: "Art enables us to find ourselves and lose ourselves at the same time.",
    philosopher: "Thomas Merton",
    category: "Philosophy of Art"
  },
  {
    quote: "The aim of art is to represent not the outward appearance of things, but their inward significance.",
    philosopher: "Aristotle",
    category: "Philosophy of Art"
  },

  // Philosophy of Technology
  {
    quote: "Technology is not neutral. We're inside of what we make, and it's inside of us.",
    philosopher: "Donna Haraway",
    category: "Philosophy of Technology"
  },
  {
    quote: "The real problem is not whether machines think but whether men do.",
    philosopher: "B.F. Skinner",
    category: "Philosophy of Technology"
  },

  // Philosophy of Religion
  {
    quote: "God is dead. God remains dead. And we have killed him.",
    philosopher: "Friedrich Nietzsche",
    category: "Philosophy of Religion"
  },
  {
    quote: "Religion is the sigh of the oppressed creature, the heart of a heartless world, and the soul of soulless conditions.",
    philosopher: "Karl Marx",
    category: "Philosophy of Religion"
  },

  // Philosophy of Language
  {
    quote: "The limits of my language mean the limits of my world.",
    philosopher: "Ludwig Wittgenstein",
    category: "Philosophy of Language"
  },
  {
    quote: "Language is the house of being.",
    philosopher: "Martin Heidegger",
    category: "Philosophy of Language"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  // Get today's date as string for storage key
  const today = new Date().toDateString();
  
  // Try to get today's quote from storage
  chrome.storage.local.get(['lastQuote', 'lastDate'], (result) => {
    if (result.lastDate === today && result.lastQuote) {
      displayQuote(result.lastQuote);
    } else {
      // Select new random quote
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      
      // Save to storage
      chrome.storage.local.set({
        lastQuote: randomQuote,
        lastDate: today
      });
      
      displayQuote(randomQuote);
    }
  });

  const saveBtn = document.getElementById('saveReflection');
  const viewBtn = document.getElementById('viewHistory');
  const modal = document.getElementById('historyModal');
  const closeBtn = document.querySelector('.close');
  const reflectionInput = document.getElementById('reflection');

  // Load today's reflection if it exists
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
      const reflections = data.reflections || [];
      reflections.push(entry);
      chrome.storage.local.set({ reflections }, () => {
        // Show save confirmation
        saveBtn.textContent = 'Saved!';
        setTimeout(() => saveBtn.textContent = 'Save Reflection', 2000);
      });
    });
  });

  viewBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    displayHistory();
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  function loadTodayReflection() {
    const today = new Date().toISOString().split('T')[0];
    chrome.storage.local.get(['reflections'], (data) => {
      const reflections = data.reflections || [];
      const todayEntry = reflections.find(entry => 
        entry.date.split('T')[0] === today
      );
      if (todayEntry) {
        reflectionInput.value = todayEntry.reflection;
      }
    });
  }

  function displayHistory() {
    const container = document.getElementById('entriesContainer');
    chrome.storage.local.get(['reflections'], (data) => {
      const reflections = data.reflections || [];
      container.innerHTML = reflections.reverse().map(entry => `
        <div class="history-entry">
          <div class="entry-date">${new Date(entry.date).toLocaleDateString()}</div>
          <div class="entry-quote">${entry.quote}</div>
          <div class="entry-philosopher">${entry.philosopher}</div>
          <div class="entry-reflection">${entry.reflection}</div>
        </div>
      `).join('');
    });
  }
});

function displayQuote(quoteObj) {
  document.getElementById('quote').textContent = `"${quoteObj.quote}"`;
  document.getElementById('philosopher').textContent = `- ${quoteObj.philosopher}`;
  document.getElementById('category').textContent = quoteObj.category;
} 