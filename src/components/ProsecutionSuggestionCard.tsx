
import React, { useState } from 'react';

interface ProsecutionSuggestionCardProps {
  data?: any;
}

const ProsecutionSuggestionCard: React.FC<ProsecutionSuggestionCardProps> = ({ data }) => {
  const [version, setVersion] = useState<'original' | 'consultation'>('original');

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
            <span className="text-blue-600 text-2xl">📄</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">批量检察建议</h3>
            <p className="text-sm text-gray-500">共5份 · XX区 · 2026-05-29</p>
          </div>
        </div>
        <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setVersion('original')}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              version === 'original' 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            检察建议
          </button>
          <button
            onClick={() => setVersion('consultation')}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              version === 'consultation' 
                ? 'bg-green-600 text-white' 
                : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            磋商函
          </button>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-800">XX烧烤</span>
            <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">高风险</span>
          </div>
          <p className="text-xs text-gray-600">幽灵外卖+证照共用 · 评分92</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-800">XX麻辣烫</span>
            <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">高风险</span>
          </div>
          <p className="text-xs text-gray-600">证照造假 · 评分88</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-800">XX小吃店</span>
            <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">高风险</span>
          </div>
          <p className="text-xs text-gray-600">超范围经营+证照过期 · 评分85</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-800">XX快餐店</span>
            <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">高风险</span>
          </div>
          <p className="text-xs text-gray-600">证照过期+公示不全 · 评分82</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-800">XX面馆</span>
            <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">高风险</span>
          </div>
          <p className="text-xs text-gray-600">幽灵外卖 · 评分80</p>
        </div>
      </div>

      <div className={`rounded-lg p-4 border ${version === 'consultation' ? 'bg-green-50 border-green-200' : 'bg-blue-50 border-blue-200'}`}>
        <div className="text-sm font-medium mb-3" style={{ color: version === 'consultation' ? '#15803d' : '#1e40af' }}>
          {version === 'consultation' ? '磋商函（第2版）' : '检察建议书（第1版）'}
        </div>
        <div className="text-sm text-gray-700 leading-relaxed space-y-3">
          {version === 'consultation' ? (
            <>
              <p>XX区市场监督管理局：</p>
              <p>我院在履行公益诉讼检察职责中发现，你区网络餐饮服务存在若干违法情形。为共同守护食品安全，现与贵局进行磋商沟通，就相关问题交换意见。</p>
              <p>经初步调查，XX烧烤等5家商家存在证照异常、经营场所不符等问题。建议贵局：</p>
              <ol className="list-decimal list-inside ml-4 space-y-1">
                <li>对上述商家开展现场核查</li>
                <li>督促平台加强资质审核</li>
                <li>建立信息共享机制</li>
              </ol>
              <p>请贵局研究上述建议，如有不同意见，我们可进一步沟通。</p>
              <p className="text-right">XX区人民检察院</p>
              <p className="text-right">2026年5月29日</p>
            </>
          ) : (
            <>
              <p>XX区市场监督管理局：</p>
              <p>我院在履行公益诉讼检察职责中发现，你区网络餐饮服务存在违法情形，现依法向你局提出检察建议。</p>
              <p>经查，XX烧烤等5家商家存在以下违法事实：</p>
              <ol className="list-decimal list-inside ml-4 space-y-1">
                <li>XX烧烤：证照造假、经营场所为住宅</li>
                <li>XX麻辣烫：证照过期、公示不全</li>
                <li>XX小吃店：超范围经营凉菜</li>
                <li>XX快餐店：未公示营业执照</li>
                <li>XX面馆：地址与实际不符</li>
              </ol>
              <p>依据《食品安全法》第131条、《网络餐饮服务食品安全监督管理办法》第4条，建议你局：</p>
              <ol className="list-decimal list-inside ml-4 space-y-1">
                <li>立即对上述商家立案调查</li>
                <li>依法作出行政处罚</li>
                <li>责令平台下架违法商家</li>
                <li>建立长效监管机制</li>
              </ol>
              <p>请你局在收到本建议书后一个月内，将处理情况书面回复我院。</p>
              <p className="text-right">XX区人民检察院</p>
              <p className="text-right">2026年5月29日</p>
            </>
          )}
        </div>
      </div>

      <div className="flex gap-3 mt-6">
        <button className="flex-1 py-3 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">下载Word</button>
        <button className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200">编辑文档</button>
      </div>
    </div>
  );
};

export default ProsecutionSuggestionCard;
