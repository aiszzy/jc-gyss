
import React from 'react';
import { Clue } from '../types';
import { VIOLATION_TYPE_LABELS, RISK_LEVEL_LABELS, RISK_LEVEL_COLORS, RISK_LEVEL_BG_COLORS, STATUS_LABELS, STATUS_COLORS, PLATFORM_LABELS } from '../utils/constants';
import { formatDateTime } from '../utils/formatters';
import { Eye, FileText, AlertCircle } from 'lucide-react';

interface ClueCardProps {
  clue: Clue;
  onViewEvidence?: (clue: Clue) => void;
  onGenerateProposal?: (clue: Clue) => void;
}

const ClueCard: React.FC<ClueCardProps> = ({ clue, onViewEvidence, onGenerateProposal }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{clue.merchantName}</h3>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="px-2 py-1 bg-gray-100 rounded text-xs">{PLATFORM_LABELS[clue.platform]}</span>
            <span>{clue.address}</span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div 
            className={`px-3 py-1 rounded-full text-sm font-medium ${RISK_LEVEL_BG_COLORS[clue.riskLevel]}`}
            style={{ color: RISK_LEVEL_COLORS[clue.riskLevel] }}
          >
            {RISK_LEVEL_LABELS[clue.riskLevel]} {clue.riskScore}分
          </div>
          <div 
            className="px-2 py-1 rounded text-xs font-medium"
            style={{ color: STATUS_COLORS[clue.status], backgroundColor: `${STATUS_COLORS[clue.status]}15` }}
          >
            {STATUS_LABELS[clue.status]}
          </div>
        </div>
      </div>

      {/* Violation Types */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {clue.violationType.map((type, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm font-medium flex items-center gap-1"
            >
              <AlertCircle size={14} />
              {VIOLATION_TYPE_LABELS[type]}
            </span>
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
        {clue.evidence.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="text-xs text-gray-500">
          发现时间: {formatDateTime(clue.createdAt)}
        </span>
        <div className="flex gap-2">
          {onViewEvidence && (
            <button
              onClick={() => onViewEvidence(clue)}
              className="flex items-center gap-1 px-3 py-1.5 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <Eye size={16} />
              查看证据
            </button>
          )}
          {onGenerateProposal && (
            <button
              onClick={() => onGenerateProposal(clue)}
              className="flex items-center gap-1 px-3 py-1.5 text-sm bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors"
            >
              <FileText size={16} />
              生成建议
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClueCard;
