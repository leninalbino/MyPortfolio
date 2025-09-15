import { useState, useCallback } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  ChatMessage, 
  chatbotIntents, 
  fallbackResponses, 
  welcomeMessage 
} from '../data/chatbotData';

export const useChatbot = () => {
  const { language } = useLanguage();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const generateId = () => Math.random().toString(36).substring(2, 11);

  const addMessage = useCallback((text: string, isBot: boolean, options?: Partial<ChatMessage>) => {
    const message: ChatMessage = {
      id: generateId(),
      text,
      isBot,
      timestamp: new Date(),
      ...options
    };
    setMessages(prev => [...prev, message]);
    return message;
  }, []);

  const findBestIntent = (userMessage: string): string | null => {
    const message = userMessage.toLowerCase();
    let bestMatch = '';
    let maxScore = 0;

    for (const [intentKey, intent] of Object.entries(chatbotIntents)) {
      let score = 0;
      
      for (const keyword of intent.keywords) {
        if (message.includes(keyword.toLowerCase())) {
          score += keyword.length; // Longer keywords get higher priority
        }
      }

      if (score > maxScore) {
        maxScore = score;
        bestMatch = intentKey;
      }
    }

    return maxScore > 0 ? bestMatch : null;
  };

  const simulateTyping = (duration: number = 1500) => {
    setIsTyping(true);
    return new Promise<void>(resolve => {
      setTimeout(() => {
        setIsTyping(false);
        resolve();
      }, duration);
    });
  };

  const getBotResponse = async (userMessage: string) => {
    await simulateTyping();

    const intentKey = findBestIntent(userMessage);
    
    if (intentKey && chatbotIntents[intentKey]) {
      const intent = chatbotIntents[intentKey];
      const responseIndex = language === 'en' ? 1 : 0;
      const response = intent.responses[responseIndex] || intent.responses[0];
      
      const botMessage = addMessage(response, true, {
        quickReplies: intent.quickReplies,
        links: intent.links,
        type: intent.quickReplies ? 'quick-reply' : intent.links ? 'link' : 'text'
      });

      return botMessage;
    } else {
      // Fallback response
      const fallbackIndex = language === 'en' ? 1 : 0;
      const fallbackResponse = fallbackResponses[fallbackIndex];
      
      return addMessage(fallbackResponse, true, {
        quickReplies: ['Ver proyectos', 'Tecnologías', 'Contacto', 'Ayuda'],
        type: 'quick-reply'
      });
    }
  };

  const sendMessage = async (text: string) => {
    // Add user message
    addMessage(text, false);
    
    // Get bot response
    await getBotResponse(text);
  };

  const handleQuickReply = async (reply: string) => {
    await sendMessage(reply);
  };

  const initializeChat = () => {
    const welcomeText = language === 'en' ? welcomeMessage.en : welcomeMessage.es;
    addMessage(welcomeText, true, {
      quickReplies: ['Ver proyectos', 'Tecnologías', 'Contacto', 'Disponibilidad'],
      type: 'quick-reply'
    });
  };

  const clearChat = () => {
    setMessages([]);
    setIsTyping(false);
  };

  return {
    messages,
    isTyping,
    sendMessage,
    handleQuickReply,
    initializeChat,
    clearChat,
    addMessage
  };
};