
import React from 'react';
import { ChatMessage } from '../types';
import { formatDateTime } from '../utils/formatters';
import { Bot, User } from 'lucide-react';
import ClueCard from './ClueCard';
import MorningSummaryCard from './MorningSummaryCard';
import ScreeningResultCard from './ScreeningResultCard';
import ClueDetailCard from './ClueDetailCard';
import ProsecutionSuggestionCard from './ProsecutionSuggestionCard';
import RectificationTrackingCard from './RectificationTrackingCard';
import SituationOverviewCard from './SituationOverviewCard';
import DataSourceStatusCard from './DataSourceStatusCard';
import { useAppStore } from '../store/useAppStore';

interface ChatBubbleProps {
  message: ChatMessage;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const { clues } = useAppStore();
  const isUser = message.role === 'user';

  // Simple text formatter to handle basic markdown
  const formatText = (text: string) => {
    // Split text by newlines
    const lines = text.split('\n');
    
    return lines.map((line, lineIndex) => {
      // Handle bold text **text**
      let formattedLine = line;
      
      // Replace **bold** with markers
      const boldRegex = /\*\*(.*?)\*\*/g;
      formattedLine = formattedLine.replace(boldRegex, (_, content) => {
        return `__BOLD_START__${content}__BOLD_END__`;
      });
      
      // Split into parts
      const parts = formattedLine.split(/(__BOLD_START__|__BOLD_END__)/g);
      
      const jsxParts = parts.map((part, partIndex) => {
        if (part === '__BOLD_START__') return null;
        if (part === '__BOLD_END__') return null;
        
        const isBold = partIndex > 0 && parts[partIndex - 1] === '__BOLD_START__';
        
        return (
          <span 
            key={partIndex} 
            className={isBold ? 'font-semibold' : ''}
          >
            {part}
          </span>
        );
      });
      
      return (
        <div key={lineIndex} className={line.trim() === '' ? 'h-2' : ''}>
          {jsxParts}
        </div>
      );
    });
  };

  const renderCard = () => {
    switch (message.cardType) {
      case 'morning_summary':
        return <MorningSummaryCard data={message.cardData} />;
      case 'screening_result':
        return <ScreeningResultCard data={message.cardData} />;
      case 'clue_detail':
        return <ClueDetailCard data={message.cardData} />;
      case 'prosecution_suggestion':
        return <ProsecutionSuggestionCard data={message.cardData} />;
      case 'rectification_tracking':
        return <RectificationTrackingCard data={message.cardData} />;
      case 'situation_overview':
        return <SituationOverviewCard data={message.cardData} />;
      case 'data_source_status':
        return <DataSourceStatusCard data={message.cardData} />;
      default:
        return (
          <div className="space-y-4">
            {clues.slice(0, 3).map((clue) => (
              <ClueCard key={clue.id} clue={clue} />
            ))}
          </div>
        );
    }
  };

  return (
    <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'} mb-6`}>
      {/* Avatar */}
      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
        isUser ? 'bg-blue-600' : 'bg-gray-600'
      }`}>
        {isUser ? <User size={20} className="text-white" /> : <Bot size={20} className="text-white" />}
      </div>

      {/* Content */}
      <div className={`flex-1 max-w-5xl ${isUser ? 'flex justify-end' : ''}`}>
        <div className={`rounded-2xl px-4 py-3 ${
          isUser 
            ? 'bg-blue-600 text-white rounded-tr-none' 
            : 'bg-transparent text-gray-900'
        }`}>
          {/* Text Content */}
          {message.type === 'text' && (
            <div className={`whitespace-pre-wrap leading-relaxed ${
              isUser ? '' : 'bg-white rounded-2xl px-4 py-3 shadow-sm border border-gray-200 rounded-tl-none'
            }`}>
              {formatText(message.content)}
            </div>
          )}

          {/* Card Content */}
          {message.type === 'card' && (
            <div>
              {message.content && (
                <div className={`mb-4 whitespace-pre-wrap leading-relaxed ${
                  isUser ? '' : 'bg-white rounded-2xl px-4 py-3 shadow-sm border border-gray-200 rounded-tl-none'
                }`}>
                  {formatText(message.content)}
                </div>
              )}
              {renderCard()}
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
