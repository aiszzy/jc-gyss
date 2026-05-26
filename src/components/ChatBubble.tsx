
import React from 'react';
import { ChatMessage } from '../types';
import { formatDateTime } from '../utils/formatters';
import { Bot, User } from 'lucide-react';
import ClueCard from './ClueCard';
import { useAppStore } from '../store/useAppStore';

interface ChatBubbleProps {
  message: ChatMessage;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const { clues } = useAppStore();
  const isUser = message.role === 'user';

  return (
    <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'} mb-6`}>
      {/* Avatar */}
      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
        isUser ? 'bg-blue-600' : 'bg-gray-600'
      }`}>
        {isUser ? <User size={20} className="text-white" /> : <Bot size={20} className="text-white" />}
      </div>

      {/* Content */}
      <div className={`flex-1 max-w-3xl ${isUser ? 'flex justify-end' : ''}`}>
        <div className={`rounded-2xl px-4 py-3 ${
          isUser 
            ? 'bg-blue-600 text-white rounded-tr-none' 
            : 'bg-white text-gray-900 rounded-tl-none shadow-sm border border-gray-200'
        }`}>
          {/* Text Content */}
          {message.type === 'text' && (
            <div className="whitespace-pre-wrap">{message.content}</div>
          )}

          {/* Card Content */}
          {message.type === 'card' && (
            <div>
              <div className="mb-4 whitespace-pre-wrap">{message.content}</div>
              <div className="space-y-4">
                {clues.slice(0, 3).map((clue) => (
                  <ClueCard key={clue.id} clue={clue} />
                ))}
              </div>
              {clues.length > 3 && (
                <div className="mt-4 text-center">
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    查看全部 {clues.length} 条线索 →
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Timestamp */}
          <div className={`text-xs mt-2 ${isUser ? 'text-blue-200' : 'text-gray-500'}`}>
            {formatDateTime(message.timestamp)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
