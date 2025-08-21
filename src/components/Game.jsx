import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Trophy, Clock, Target } from 'lucide-react';
// Import all logos from the src/logos directory
import javascriptLogo from '../logos/javascript.png';
import pythonLogo from '../logos/python.png';
import javaLogo from '../logos/java.png';
import typescriptLogo from '../logos/typescript.png';
import goLogo from '../logos/go.png';
import rustLogo from '../logos/rust.png';
import cppLogo from '../logos/cpp.png';
import phpLogo from '../logos/php.png';
import rubyLogo from '../logos/ruby.png';
import swiftLogo from '../logos/swift.png';
import reactLogo from '../logos/react.png';
import angularLogo from '../logos/angular.png';
import vueLogo from '../logos/vue.png';
import djangoLogo from '../logos/django.png';
import flaskLogo from '../logos/flask.png';
import expressLogo from '../logos/express.png';
import springLogo from '../logos/spring.png';
import laravelLogo from '../logos/laravel.png';
import bootstrapLogo from '../logos/bootstrap.png';
import tailwindLogo from '../logos/tailwind.png';
import reduxLogo from '../logos/redux.png';
import dockerLogo from '../logos/docker.png';
import kubernetesLogo from '../logos/kubernetes.png';
import gitLogo from '../logos/git.png';
import githubLogo from '../logos/github.png';
import gitlabLogo from '../logos/gitlab.png';
import viteLogo from '../logos/vite.png';
import mysqlLogo from '../logos/mysql.png';
import postgresqlLogo from '../logos/postgresql.png';
import mongodbLogo from '../logos/mongodb.png';
import redisLogo from '../logos/redis.png';
import sqliteLogo from '../logos/sqlite.png';
import awsLogo from '../logos/aws.png';
import azureLogo from '../logos/azure.png';
import firebaseLogo from '../logos/firebase.png';
import supabaseLogo from '../logos/supabase.png';
import vercelLogo from '../logos/vercel.png';
import netlifyLogo from '../logos/netlify.png';
import ubuntuLogo from '../logos/ubuntu.png';
import windowsLogo from '../logos/windows.png';
import macosLogo from '../logos/macos.png';
import linuxLogo from '../logos/linux.png';
import tensorflowLogo from '../logos/tensorflow.png';
import pytorchLogo from '../logos/pytorch.png';
import kerasLogo from '../logos/keras.png';
import chatgptLogo from '../logos/chatgpt.png';
import huggingfaceLogo from '../logos/huggingface.png';
import ethereumLogo from '../logos/ethereum.png';
import bitcoinLogo from '../logos/bitcoin.png';
import solidityLogo from '../logos/solidity.png';

const TechLogoGame = () => {
  const [currentLogo, setCurrentLogo] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [gameActive, setGameActive] = useState(false);
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [usedLogos, setUsedLogos] = useState([]);
  const timerRef = useRef(null);


  const logos = [
    // Programming Languages
    { name: 'JavaScript', category: 'Language', color: '#FFFFFF', image: javascriptLogo },
    { name: 'Python', category: 'Language', color: '#FFFFFF', image: pythonLogo },
    { name: 'Java', category: 'Language', color: '#FFFFFF', image: javaLogo },
    { name: 'TypeScript', category: 'Language', color: '#FFFFFF', image: typescriptLogo },
    { name: 'Go', category: 'Language', color: '#FFFFFF', image: goLogo },
    { name: 'Rust', category: 'Language', color: '#FFFFFF', image: rustLogo },
    { name: 'C++', category: 'Language', color: '#FFFFFF', image: cppLogo },
    { name: 'PHP', category: 'Language', color: '#FFFFFF', image: phpLogo },
    { name: 'Ruby', category: 'Language', color: '#FFFFFF', image: rubyLogo },
    { name: 'Swift', category: 'Language', color: '#FFFFFF', image: swiftLogo },
    
    // Frameworks & Libraries
    { name: 'React', category: 'Framework', color: '#FFFFFF', image: reactLogo },
    { name: 'Angular', category: 'Framework', color: '#FFFFFF', image: angularLogo },
    { name: 'Vue.js', category: 'Framework', color: '#FFFFFF', image: vueLogo },
    { name: 'Django', category: 'Framework', color: '#FFFFFF', image: djangoLogo },
    { name: 'Flask', category: 'Framework', color: '#FFFFFF', image: flaskLogo },
    { name: 'Express', category: 'Framework', color: '#FFFFFF', image: expressLogo },
    { name: 'Spring', category: 'Framework', color: '#FFFFFF', image: springLogo },
    { name: 'Laravel', category: 'Framework', color: '#FFFFFF', image: laravelLogo },
    { name: 'Bootstrap', category: 'Framework', color: '#FFFFFF', image: bootstrapLogo },
    { name: 'Tailwind', category: 'Framework', color: '#FFFFFF', image: tailwindLogo },
    { name: 'Redux', category: 'Framework', color: '#FFFFFF', image: reduxLogo },

    // Tools & Platforms
    { name: 'Docker', category: 'Tool', color: '#FFFFFF', image: dockerLogo },
    { name: 'Kubernetes', category: 'Tool', color: '#FFFFFF', image: kubernetesLogo },
    { name: 'Git', category: 'Tool', color: '#FFFFFF', image: gitLogo },
    { name: 'GitHub', category: 'Platform', color: '#FFFFFF', image: githubLogo },
    { name: 'GitLab', category: 'Platform', color: '#FFFFFF', image: gitlabLogo },
    { name: 'Vite', category: 'Tool', color: '#FFFFFF', image: viteLogo },

    // Databases
    { name: 'MySQL', category: 'Database', color: '#FFFFFF', image: mysqlLogo },
    { name: 'PostgreSQL', category: 'Database', color: '#FFFFFF', image: postgresqlLogo },
    { name: 'MongoDB', category: 'Database', color: '#FFFFFF', image: mongodbLogo },
    { name: 'Redis', category: 'Database', color: '#FFFFFF', image: redisLogo },
    { name: 'SQLite', category: 'Database', color: '#FFFFFF', image: sqliteLogo },

    // Cloud & Services
    { name: 'AWS', category: 'Cloud', color: '#FFFFFF', image: awsLogo },
    { name: 'Azure', category: 'Cloud', color: '#FFFFFF', image: azureLogo },
    { name: 'Supabase', category: 'Cloud', color: '#FFFFFF', image: supabaseLogo },
    { name: 'Firebase', category: 'Service', color: '#FFFFFF', image: firebaseLogo },
    { name: 'Vercel', category: 'Platform', color: '#FFFFFF', image: vercelLogo },
    { name: 'Netlify', category: 'Platform', color: '#FFFFFF', image: netlifyLogo },

    // Operating Systems
    { name: 'Ubuntu', category: 'OS', color: '#FFFFFF', image: ubuntuLogo },
    { name: 'Windows', category: 'OS', color: '#FFFFFF', image: windowsLogo },
    { name: 'macOS', category: 'OS', color: '#FFFFFF', image: macosLogo },
    { name: 'Linux', category: 'OS', color: '#FFFFFF', image: linuxLogo },

    // AI/ML & Blockchain
    { name: 'TensorFlow', category: 'AI/ML', color: '#FFFFFF', image: tensorflowLogo },
    { name: 'PyTorch', category: 'AI/ML', color: '#FFFFFF', image: pytorchLogo },
    { name: 'Keras', category: 'AI/ML', color: '#FFFFFF', image: kerasLogo },
    { name: 'ChatGPT', category: 'AI/ML', color: '#FFFFFF', image: chatgptLogo },
    { name: 'Hugging face', category: 'AI/ML', color: '#FFFFFF', image: huggingfaceLogo },
    { name: 'Ethereum', category: 'Blockchain', color: '#FFFFFF', image: ethereumLogo },
    { name: 'Bitcoin', category: 'Blockchain', color: '#FFFFFF', image: bitcoinLogo },
    { name: 'Solidity', category: 'Blockchain', color: '#FFFFFF', image: solidityLogo },
  ];


  const getRandomLogo = () => {
    if (usedLogos.length === logos.length) {
      setUsedLogos([]);
    }
    const availableLogos = logos.filter(logo => !usedLogos.includes(logo.name));
    const randomIndex = Math.floor(Math.random() * availableLogos.length);
    const selectedLogo = availableLogos[randomIndex];
    setUsedLogos(prev => [...prev, selectedLogo.name]);
    return selectedLogo;
  };

  const startNewRound = () => {
    if (!logos || logos.length === 0) return;
    const logo = getRandomLogo();
    setCurrentLogo(logo);
    setUserGuess('');
    setFeedback('');
    setTimeLeft(10);
    setGameActive(true);
  };

  const startGame = () => {
    setScore(0);
    setQuestionsAnswered(0);
    setUsedLogos([]);
    startNewRound();
  };

  const checkAnswer = () => {
    if (!gameActive) return;
    setGameActive(false);
    if (timerRef.current) {
        clearTimeout(timerRef.current);
    }

    const isCorrect = userGuess.toLowerCase().trim() === currentLogo.name.toLowerCase();
    
    // Calculate the new score and answered count *before* updating state
    const newScore = score + (isCorrect ? 1 : 0);
    const newQuestionsAnswered = questionsAnswered + 1;

    // Set the state with the calculated values
    setScore(newScore);
    setQuestionsAnswered(newQuestionsAnswered);
    
    // Provide immediate feedback
    if (isCorrect) {
        setFeedback('🎉 Correct!');
    } else {
        setFeedback(`❌ Wrong! It was: ${currentLogo.name}`);
    }

    // Schedule the next action based on the new, correct value
    setTimeout(() => {
        if (newQuestionsAnswered < 10) {
            startNewRound();
        } else {
            setCurrentLogo(null);
            setFeedback(`Game Over! Final Score: ${newScore}/10`);
        }
    }, 2500);
};

  const handleSubmit = () => {
    if (gameActive && userGuess.trim()) {
      checkAnswer();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && gameActive && userGuess.trim()) {
      e.preventDefault();
      checkAnswer();
    }
  };

  useEffect(() => {
    if (gameActive && timeLeft > 0) {
      timerRef.current = setTimeout(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (gameActive && timeLeft === 0) {
      setTimeout(() => {
        if (gameActive) {
          checkAnswer();
        }
      }, 100);
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [gameActive, timeLeft]);

  const LogoDisplay = ({ logo }) => {
    return (
      <div 
        className="w-48 h-48 sm:w-64 sm:h-64 rounded-2xl flex items-center justify-center text-white font-bold text-4xl sm:text-5xl shadow-2xl border-4 border-white/20 bg-white/10 overflow-hidden"
        style={{ backgroundColor: logo.color }}
      >
        {logo.image ? (
          <img 
            src={logo.image} 
            alt={logo.name} 
            className="max-w-[80%] max-h-[80%] object-contain drop-shadow-lg"
          />
        ) : (
          <span>{logo.name.substring(0, 2).toUpperCase()}</span>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 animate-gradient-x">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 flex items-center justify-center gap-3 animate-bounce-slow">
          <Target className="w-8 h-8 sm:w-10 sm:h-10 animate-spin-slow" />
          Tech Logo Challenge
        </h1>

        {!currentLogo ? (
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 text-center animate-fade-in-up">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 animate-pulse-slow">
              {feedback.includes('Final Score') ? 'Game Complete!' : 'Welcome to Tech Logo Challenge!'}
            </h2>
            {feedback.includes('Final Score') ? (
              <div className="text-lg sm:text-xl text-white/90 mb-6 animate-bounce">{feedback}</div>
            ) : (
              <p className="text-white/80 mb-6 text-sm sm:text-lg animate-fade-in">
                Test your knowledge of programming languages, frameworks, tools, and platforms. 
                You have 10 seconds per logo - type your answer in the text box!
              </p>
            )}
            <button
              onClick={startGame}
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 
                text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg flex items-center gap-2 sm:gap-3 mx-auto 
                transition-all duration-300 transform hover:scale-110 hover:rotate-1 animate-pulse-glow
                shadow-lg hover:shadow-2xl"
            >
              <Play className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
              {feedback.includes('Final Score') ? 'Play Again' : 'Start Game'}
            </button>
          </div>
        ) : (
          <div className="space-y-4 sm:space-y-6 animate-fade-in-up">
            <div className="flex justify-between items-center bg-white/10 backdrop-blur-lg rounded-2xl p-3 sm:p-4 animate-slide-in-down">
              <div className="flex items-center gap-1 sm:gap-2 text-white animate-fade-in text-sm sm:text-base">
                <Trophy className={`w-4 h-4 sm:w-5 sm:h-5 ${score > questionsAnswered * 0.7 ? 'animate-bounce text-yellow-400' : ''}`} />
                <span className="font-semibold">Score: {score}/{questionsAnswered}</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 text-white animate-fade-in text-sm" style={{ animationDelay: '0.2s' }}>
                <span>Question {questionsAnswered + 1}/10</span>
              </div>
              <div className={`flex items-center gap-1 sm:gap-2 font-bold text-lg transition-all duration-300 ${
                timeLeft <= 3 ? 'text-red-400 animate-pulse-fast scale-110' : 
                timeLeft <= 5 ? 'text-yellow-400 animate-pulse' : 'text-white'
              }`}>
                <Clock className={`w-4 h-4 sm:w-5 sm:h-5 ${timeLeft <= 3 ? 'animate-spin' : ''}`} />
                <span className={timeLeft <= 3 ? 'animate-shake' : ''}>{timeLeft}s</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 text-center animate-scale-in">
              <div className="mb-4 sm:mb-6 flex justify-center">
                <div className="animate-float">
                  <LogoDisplay logo={currentLogo} />
                </div>
              </div>
              
              <div className="mb-4 sm:mb-6 animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
                <span className="inline-block bg-white/20 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium animate-glow">
                  {currentLogo.category}
                </span>
              </div>

              {gameActive ? (
                <div className="space-y-3 sm:space-y-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <input
                    type="text"
                    value={userGuess}
                    onChange={(e) => setUserGuess(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Enter technology name..."
                    className="w-full max-w-sm sm:max-w-md mx-auto block px-4 sm:px-6 py-2 sm:py-3 rounded-2xl border-0 
                                 bg-white/20 text-white placeholder-white/60 text-base sm:text-lg font-medium
                                 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300
                                 focus:scale-105 focus:bg-white/30 animate-glow-subtle"
                    autoFocus
                    autoComplete="off"
                  />
                  <div className="flex gap-2 sm:gap-3 justify-center">
                    <button
                      onClick={handleSubmit}
                      disabled={!userGuess.trim()}
                      className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 
                                 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 sm:px-8 py-2 sm:py-3 rounded-2xl 
                                 font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-110 hover:-rotate-1
                                 shadow-lg hover:shadow-2xl animate-bounce-subtle"
                    >
                      Submit
                    </button>
                    <button
                      onClick={() => handleSubmit()}
                      disabled={!userGuess.trim()}
                      className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 
                                 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 sm:px-6 py-2 sm:py-3 rounded-2xl 
                                 font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-110 hover:rotate-1
                                 shadow-lg hover:shadow-2xl animate-pulse-subtle"
                    >
                      ⏎
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 animate-zoom-in">
                  <div className={`text-xl sm:text-2xl font-bold transition-all duration-500 transform ${
                    feedback.includes('Correct') ? 
                      'text-green-400 animate-bounce scale-110' : 
                      'text-red-400 animate-shake'
                  }`}>
                    {feedback}
                  </div>
                  <div className="text-white/60 text-xs sm:text-sm animate-pulse">
                    {questionsAnswered < 9 ? 'Next question in a moment...' : 'Game ending...'}
                  </div>
                </div>
              )}
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <button
                onClick={startGame}
                className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 
                           text-white px-4 sm:px-6 py-2 sm:py-3 rounded-2xl font-medium text-sm sm:text-base transition-all duration-300 
                           flex items-center gap-1 sm:gap-2 mx-auto transform hover:scale-105 hover:rotate-1
                           shadow-lg hover:shadow-xl"
              >
                <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4 animate-spin-slow" />
                New Game
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-in-down {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slide-in-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes scale-in {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes zoom-in {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes pulse-fast {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.8); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 10px rgba(255, 255, 255, 0.3); }
          50% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.6); }
        }
        @keyframes glow-subtle {
          0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 10px rgba(59, 130, 246, 0.5); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        @keyframes pulse-subtle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        .animate-gradient-x { animation: gradient-x 15s ease infinite; background-size: 200% 200%; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 4s linear infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-slide-in-down { animation: slide-in-down 0.5s ease-out; }
        .animate-slide-in-up { animation: slide-in-up 0.6s ease-out; }
        .animate-scale-in { animation: scale-in 0.5s ease-out; }
        .animate-zoom-in { animation: zoom-in 0.4s ease-out; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 2s ease-in-out infinite; }
        .animate-pulse-fast { animation: pulse-fast 1s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .animate-glow-subtle { animation: glow-subtle 3s ease-in-out infinite; }
        .animate-shake { animation: shake 0.5s ease-in-out; }
        .animate-bounce-subtle { animation: bounce-subtle 2s ease-in-out infinite; }
        .animate-pulse-subtle { animation: pulse-subtle 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default TechLogoGame;