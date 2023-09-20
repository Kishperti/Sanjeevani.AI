import React, { useState } from 'react';
import Dashboard from '../Dashboard-Details/Dashboard';

function AiExpert() {
  const [messages, setMessages] = useState([]);
  const [voiceMessage, setVoiceMessage] = useState('');

  const handleTextSubmit = (e) => {
    e.preventDefault();
    const newMessage = e.target.message.value;
    setMessages([...messages, { text: newMessage, fromUser: true }]);
    e.target.reset();
  };

  const handleVoiceSubmit = () => {
    setMessages([...messages, { text: voiceMessage, fromUser: true }]);
    setVoiceMessage('');
  };

  const handleVoiceInputChange = (e) => {
    setVoiceMessage(e.target.value);
  };

  const handleVoiceInput = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setVoiceMessage(transcript);
    };

    recognition.start();
  };

  const handleVoiceOutput = () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance('Hello, I am your AI expert.');
    synth.speak(utterance);
  };

  return (
    <div className="flex h-screen bg-richblack-900 text-white">
      <Dashboard />
      <div className="flex-1 flex flex-col justify-between p-8 ml-8">
        <div>
          <h1 className="text-3xl mb-6">AI Expert</h1>
          <div className="flex justify-between mb-6">
          <button onClick={handleVoiceInput} className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px]">
            Start Voice Input
          </button>
          <button onClick={handleVoiceOutput} className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mr-[250px]">
            Start Voice Output
          </button>
        </div>
          <form onSubmit={handleTextSubmit} className="mb-4">
          <textarea
              value={voiceMessage}
              onChange={handleVoiceInputChange}
              className="p-2 rounded border border-indigo-500 w-[1000px] h-20 text-black"
              placeholder="Speak or type your message..."
              name='message'
            />
            <button
              onClick={handleVoiceSubmit}
              className="  bg-indigo-500 text-white px-4 py-2 rounded ml-6"
            >
              Send Voice/Text
            </button>
          </form>
        </div>

        <div className="flex-1 overflow-y-auto max-h-72 bg-[#0066ff1a] mr-[250px]">
          {messages.map((message, index) => (
            <div key={index} className={message.fromUser ? 'text-left mt-3 mb-2 ml-[32px]' : 'mb-2 ml=[302px]'}>
              {message.text}
            </div>
          ))}
        </div>

        <div>
          <div className="relative">
            
            
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default AiExpert;
