
import React, { useState } from 'react';
import { Filter, Download, Search, MoreHorizontal, Eye, Check, FileText, TrendingUp, X } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';
import { Clue } from '../types';
import { VIOLATION_TYPE_LABELS, RISK_LEVEL_LABELS, RISK_LEVEL_COLORS, STATUS_LABELS, STATUS_COLORS, PLATFORM_LABELS } from '../utils/constants';
import { formatDateTime } from '../utils/formatters';
import ClueCard from '../components/ClueCard';

const CluesPage: React.FC = () => {
  const { clues, getFilteredClues, setSelectedViolationType, setSelectedRiskLevel, setSelectedStatus, updateClueStatus, selectedViolationType, selectedRiskLevel, selectedStatus } = useAppStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'list' | 'card'>('list');
  const [selectedClue, setSelectedClue] = useState<Clue | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredClues = getFilteredClues().filter(clue => 
    clue.merchantName.includes(searchTerm) || 
    clue.address.includes(searchTerm)
  );

  const handleViewEvidence = (clue: Clue) => {
    setSelectedClue(clue);
  };

  const handleStatusChange = (clueId: string, status: Clue['status']) => {
    updateClueStatus(clueId, status);
  };

  const clearFilters = () => {
    setSelectedViolationType(null);
    setSelectedRiskLevel(null);
    setSelectedStatus(null);
    setSearchTerm('');
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">线索看板</h1>
            <p className="text-gray-600">管理和处理所有巡检发现的线索</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Filter size={20} />
              筛选
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Download size={20} />
              导出
            </button>
          </div>
        </div>

        {/* Search and View Toggle */}
        <div className="flex items-center gap-4">
          <div className="flex-1 max-w-md relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="搜索商家名称或地址..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex bg-white border border-gray-300 rounded-lg p-1">
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-1 rounded ${viewMode === 'list' ? 'bg-gray-100' : ''}`}
            >
              列表
            </button>
            <button
              onClick={() => setViewMode('card')}
              className={`px-3 py-1 rounded ${viewMode === 'card' ? 'bg-gray-100' : ''}`}
            >
              卡片
            </button>
          </div>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="mt-4 bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-900">筛选条件</h3>
              <button onClick={clearFilters} className="text-sm text-blue-600 hover:text-blue-700">
                清除全部
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">违规类型</label>
                <select
                  value={selectedViolationType || ''}
                  onChange={(e) => setSelectedViolationType(e.target.value || null)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">全部</option>
                  {Object.entries(VIOLATION_TYPE_LABELS).map(([key, label]) => (
                    <option key={key} value={key}>{label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">风险等级</label>
                <select
                  value={selectedRiskLevel || ''}
                  onChange={(e) => setSelectedRiskLevel(e.target.value || null)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">全部</option>
                  {Object.entries(RISK_LEVEL_LABELS).map(([key, label]) => (
                    <option key={key} value={key}>{label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">处理状态</label>
                <select
                  value={selectedStatus || ''}
                  onChange={(e) => setSelectedStatus(e.target.value || null)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">全部</option>
                  {Object.entries(STATUS_LABELS).map(([key, label]) => (
                    <option key={key} value={key}>{label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600">总线索数</p>
          <p className="text-2xl font-bold text-gray-900">{filteredClues.length}</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600">高风险</p>
          <p className="text-2xl font-bold text-red-600">{filteredClues.filter(c => c.riskLevel === 'high').length}</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600">待处理</p>
          <p className="text-2xl font-bold text-yellow-600">{filteredClues.filter(c => c.status === 'pending').length}</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600">已整改</p>
          <p className="text-2xl font-bold text-green-600">{filteredClues.filter(c => c.status === 'rectified').length}</p>
        </div>
      </div>

      {/* Content */}
      {viewMode === 'card' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredClues.map((clue) => (
            <ClueCard
              key={clue.id}
              clue={clue}
              onViewEvidence={handleViewEvidence}
              onGenerateProposal={() => {}}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">商家</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">违规类型</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">风险等级</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">发现时间</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredClues.map((clue) => (
                <tr key={clue.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium text-gray-900">{clue.merchantName}</div>
                      <div className="text-sm text-gray-500 flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-gray-100 rounded text-xs">{PLATFORM_LABELS[clue.platform]}</span>
                        {clue.address}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {clue.violationType.map((type, index) => (
                        <span key={index} className="px-2 py-1 bg-red-50 text-red-700 rounded text-xs">
                          {VIOLATION_TYPE_LABELS[type]}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className="px-2 py-1 rounded-full text-xs font-medium"
                      style={{ 
                        color: RISK_LEVEL_COLORS[clue.riskLevel], 
                        backgroundColor: `${RISK_LEVEL_COLORS[clue.riskLevel]}15` 
                      }}
                    >
                      {RISK_LEVEL_LABELS[clue.riskLevel]} {clue.riskScore}分
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className="px-2 py-1 rounded text-xs font-medium"
                      style={{ 
                        color: STATUS_COLORS[clue.status], 
                        backgroundColor: `${STATUS_COLORS[clue.status]}15` 
                      }}
                    >
                      {STATUS_LABELS[clue.status]}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {formatDateTime(clue.createdAt)}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleViewEvidence(clue)}
                        className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded"
                      >
                        <Eye size={16} />
                      </button>
                      <select
                        value={clue.status}
                        onChange={(e) => handleStatusChange(clue.id, e.target.value as Clue['status'])}
                        className="text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {Object.entries(STATUS_LABELS).map(([key, label]) => (
                          <option key={key} value={key}>{label}</option>
                        ))}
                      </select>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredClues.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search size={48} className="mx-auto" />
              </div>
              <p className="text-gray-500">没有找到符合条件的线索</p>
            </div>
          )}
        </div>
      )}

      {/* Evidence Modal */}
      {selectedClue && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">线索详情</h2>
              <button onClick={() => setSelectedClue(null)} className="p-2 hover:bg-gray-100 rounded-lg">
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{selectedClue.merchantName}</h3>
                <p className="text-gray-600">{selectedClue.address}</p>
              </div>
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-2">违规事实</h4>
                <p className="text-gray-700">{selectedClue.evidence.description}</p>
              </div>
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-2">法律依据</h4>
                <p className="text-gray-700">{selectedClue.evidence.legalBasis}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">证据材料</h4>
                <div className="grid grid-cols-2 gap-4">
                  {selectedClue.evidence.screenshots.map((screenshot, index) => (
                    <div key={index} className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">截图 {index + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CluesPage;
