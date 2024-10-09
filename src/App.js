// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect, useRef } from 'react';
// import './App.css';

// const App = () => {
//   const [transcript, setTranscript] = useState('');
//   const [isListening, setIsListening] = useState(false);
//   const recognitionRef = useRef(null);

//   useEffect(() => {
//     // Check for browser support
//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (!SpeechRecognition) {
//       alert('Your browser does not support Speech Recognition. Please try Chrome.');
//       return;
//     }

//     const recognition = new SpeechRecognition();
//     recognition.lang = 'en-US'; // Set language
//     recognition.interimResults = true; // Get interim results
//     recognition.continuous = true; // Keep listening

//     recognitionRef.current = recognition;

//     // Event handler for results
//     recognition.onresult = (event) => {
//       let interimTranscript = '';
//       let finalTranscript = '';

//       for (let i = event.resultIndex; i < event.results.length; ++i) {
//         const transcriptChunk = event.results[i][0].transcript;
//         if (event.results[i].isFinal) {
//           finalTranscript += transcriptChunk;
//         } else {
//           interimTranscript += transcriptChunk;
//         }
//       }

//       setTranscript(finalTranscript + interimTranscript);
//     };

//     // Event handler for start
//     recognition.onstart = () => {
//       setIsListening(true);
//     };

//     // Event handler for end
//     recognition.onend = () => {
//       setIsListening(false);
//       // Automatically restart recognition if it stops
//       recognition.start();
//     };

//     // Event handler for errors
//     recognition.onerror = (event) => {
//       console.error('Speech Recognition Error:', event.error);
//     };

//     // Start recognition
//     recognition.start();

//     // Cleanup on component unmount
//     return () => {
//       recognition.stop();
//     };
//   }, []);

//   return (
//     <div className="container">
//       <div className="left-panel">
//         {isListening ? (
//           <div className="loader"></div>
//         ) : (
//           <div className="not-listening">Not Listening</div>
//         )}
//       </div>
//       <div className="right-panel">
//         <h2>Transcribed Text:</h2>
//         <p>{transcript}</p>
//       </div>
//     </div>
//   );
// };

// export default App;




//WORKING

// import React, { useState, useEffect, useRef } from 'react';
// import './App.css';

// const App = () => {
//   const [transcript, setTranscript] = useState('');
//   const [isListening, setIsListening] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const recognitionRef = useRef(null);

//   useEffect(() => {
//     // Check for browser support
//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (!SpeechRecognition) {
//       setErrorMessage('Your browser does not support Speech Recognition. Please try Chrome.');
//       return;
//     }

//     const recognition = new SpeechRecognition();
//     recognition.lang = 'en-US'; // Set language
//     recognition.interimResults = true; // Get interim results
//     recognition.continuous = true; // Keep listening

//     recognitionRef.current = recognition;

//     // Event handler for results
//     recognition.onresult = (event) => {
//       let interimTranscript = '';
//       let finalTranscript = '';

//       for (let i = event.resultIndex; i < event.results.length; ++i) {
//         const transcriptChunk = event.results[i][0].transcript;
//         if (event.results[i].isFinal) {
//           finalTranscript += transcriptChunk;
//         } else {
//           interimTranscript += transcriptChunk;
//         }
//       }

//       setTranscript(finalTranscript + interimTranscript);
//     };

//     // Event handler for start
//     recognition.onstart = () => {
//       setIsListening(true);
//       setErrorMessage(''); // Clear any previous error messages
//     };

//     // Event handler for end
//     recognition.onend = () => {
//       setIsListening(false);
//       // Optionally restart recognition
//       // recognition.start();
//     };

//     // Event handler for errors
//     recognition.onerror = (event) => {
//       console.error('Speech Recognition Error:', event.error);
//       setErrorMessage(`Error occurred in recognition: ${event.error}`);
//       setIsListening(false);
//     };

//     // Start recognition
//     recognition.start();

//     // Cleanup on component unmount
//     return () => {
//       recognition.stop();
//     };
//   }, []);

//   return (
//     <div className="container">
//       <div className="left-panel">
//         {isListening ? (
//           <div className="loader"></div>
//         ) : (
//           <div className="not-listening">Not Listening</div>
//         )}
//         {errorMessage && <div className="error">{errorMessage}</div>}
//       </div>
//       <div className="right-panel">
//         <h2>Transcribed Text:</h2>
//         <p>{transcript}</p>
//       </div>
//     </div>
//   );
// };

// export default App;



// import React, { useState, useEffect, useRef } from 'react';
// import './App.css';

// const App = () => {
//   const [transcript, setTranscript] = useState('');
//   const [isListening, setIsListening] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const recognitionRef = useRef(null);

//   useEffect(() => {
//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (!SpeechRecognition) {
//       setErrorMessage('Your browser does not support Speech Recognition. Please try Chrome.');
//       return;
//     }

//     const recognition = new SpeechRecognition();
//     recognition.lang = 'en-US'; // Set language
//     recognition.interimResults = true; // Get interim results
//     recognition.continuous = true; // Keep listening

//     recognitionRef.current = recognition;

//     recognition.onresult = (event) => {
//       let interimTranscript = '';
//       let finalTranscript = '';

//       for (let i = event.resultIndex; i < event.results.length; ++i) {
//         const transcriptChunk = event.results[i][0].transcript;
//         if (event.results[i].isFinal) {
//           finalTranscript += transcriptChunk + ' '; // Add space for separation
//         } else {
//           interimTranscript += transcriptChunk;
//         }
//       }

//       setTranscript(finalTranscript + interimTranscript); // Update transcript with both final and interim results
//     };

//     recognition.onstart = () => {
//       setIsListening(true);
//       setErrorMessage(''); // Clear any previous error messages
//     };

//     recognition.onend = () => {
//       setIsListening(false);
//       // Optionally restart recognition
//       // recognition.start();
//     };

//     recognition.onerror = (event) => {
//       console.error('Speech Recognition Error:', event.error);
//       setErrorMessage(`Error occurred in recognition: ${event.error}`);
//       setIsListening(false);
//     };

//     // Start recognition
//     recognition.start();

//     // Cleanup on component unmount
//     return () => {
//       recognition.stop();
//     };
//   }, []);

//   return (
//     <div className="container">
//       <div className="left-panel">
//         {isListening ? (
//           <div className="loader"></div> // Loader when listening
//         ) : (
//           <div className="not-listening">Not Listening</div>
//         )}
//         {errorMessage && <div className="error">{errorMessage}</div>}
//       </div>
//       <div className="right-panel">
//         <h2>Transcribed Text:</h2>
//         <p>{transcript}</p>
//       </div>
//     </div>
//   );
// };

// export default App;



//longer text than before
// import React, { useState, useEffect, useRef } from 'react';
// import './App.css';

// const App = () => {
//   const [transcript, setTranscript] = useState('');
//   const [isListening, setIsListening] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const recognitionRef = useRef(null);

//   useEffect(() => {
//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (!SpeechRecognition) {
//       setErrorMessage('Your browser does not support Speech Recognition. Please try Chrome.');
//       return;
//     }

//     const recognition = new SpeechRecognition();
//     recognition.lang = 'en-US'; // Set language
//     recognition.interimResults = true; // Get interim results
//     recognition.continuous = true; // Keep listening

//     recognitionRef.current = recognition;

//     recognition.onresult = (event) => {
//       let finalTranscript = '';

//       for (let i = event.resultIndex; i < event.results.length; ++i) {
//         const transcriptChunk = event.results[i][0].transcript;
//         if (event.results[i].isFinal) {
//           finalTranscript += transcriptChunk + ' '; // Add final transcript with a space
//         }
//       }

//       // Set the transcript to show both interim and final results
//       setTranscript(prev => prev + finalTranscript);
//     };

//     recognition.onstart = () => {
//       setIsListening(true);
//       setErrorMessage(''); // Clear any previous error messages
//     };

//     recognition.onend = () => {
//       setIsListening(false);
//     };

//     recognition.onerror = (event) => {
//       console.error('Speech Recognition Error:', event.error);
//       setErrorMessage(`Error occurred in recognition: ${event.error}`);
//       setIsListening(false);
//     };

//     // Start recognition
//     recognition.start();

//     // Cleanup on component unmount
//     return () => {
//       recognition.stop();
//     };
//   }, []);

//   return (
//     <div className="container">
//       <div className="left-panel">
//         {isListening ? (
//           <div className="loader"></div> // Loader when listening
//         ) : (
//           <div className="not-listening">Not Listening</div>
//         )}
//         {errorMessage && <div className="error">{errorMessage}</div>}
//       </div>
//       <div className="right-panel">
//         <h2>Transcribed Text:</h2>
//         <p>{transcript}</p>
//       </div>
//     </div>
//   );
// };

// export default App;

// App.js
import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const languages = [
  { code: 'en-US', name: 'English (US)' },
  { code: 'en-GB', name: 'English (UK)' },
  { code: 'es-ES', name: 'Spanish (Spain)' },
  { code: 'fr-FR', name: 'French (France)' },
  { code: 'de-DE', name: 'German (Germany)' },
  { code: 'it-IT', name: 'Italian (Italy)' },
  { code: 'ja-JP', name: 'Japanese (Japan)' },
  { code: 'ko-KR', name: 'Korean (South Korea)' },
  { code: 'zh-CN', name: 'Chinese (Mandarin)' },
  { code: 'hi-IN', name: 'Hindi (India)' },
  // Add more languages as needed
];

const App = () => {
  const [finalTranscript, setFinalTranscript] = useState('');
  const [interimTranscript, setInterimTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [language, setLanguage] = useState('en-US');
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setErrorMessage('Your browser does not support Speech Recognition. Please try Chrome.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = language; // Set language from state
    recognition.interimResults = true; // Get interim results
    recognition.continuous = true; // Keep listening

    recognitionRef.current = recognition;

    recognition.onresult = (event) => {
      let interim = '';
      let final = '';

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        const transcriptChunk = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          final += transcriptChunk + ' '; // Add space for separation
        } else {
          interim += transcriptChunk;
        }
      }

      if (final) {
        setFinalTranscript((prev) => prev + final);
      }

      setInterimTranscript(interim);
    };

    recognition.onstart = () => {
      setIsListening(true);
      setErrorMessage(''); // Clear any previous error messages
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error('Speech Recognition Error:', event.error);
      setErrorMessage(`Error occurred in recognition: ${event.error}`);
      setIsListening(false);
    };

    // Cleanup on component unmount or when language changes
    return () => {
      recognition.stop();
    };
  }, [language]); // Re-run effect when language changes

  const handleListen = () => {
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current.start();
      } catch (error) {
        console.error('Recognition already started:', error);
      }
    }
  };

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    // If currently listening, restart recognition with new language
    if (isListening) {
      recognitionRef.current.stop();
      // Recognition will restart automatically via useEffect
      // Alternatively, you can start it manually here
      setTimeout(() => {
        recognitionRef.current.lang = selectedLanguage;
        recognitionRef.current.start();
      }, 500);
    }
  };

  return (
    <div className="container">
      <div className="left-panel">
        {isListening ? (
          <div className="loader" title="Listening..."></div> 
        ) : (
          <div className="not-listening">Not Listening</div>
        )}
        {errorMessage && <div className="error">{errorMessage}</div>}
        <button onClick={handleListen} className="listen-button">
          {isListening ? 'Stop Listening' : 'Start Listening'}
        </button>
        <select value={language} onChange={handleLanguageChange} className="language-select">
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
      <div className="right-panel">
        <h2>Transcribed Text:</h2>
        <p className="final-transcript">{finalTranscript}</p>
        <p className="interim-transcript">{interimTranscript}</p>
      </div>
    </div>
  );
};

export default App;



