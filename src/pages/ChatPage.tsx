import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles } from 'lucide-react';
import ChatBubble from '../components/ChatBubble';
import { useAppStore } from '../store/useAppStore';
import { ChatMessage } from '../types';

const ChatPage: React.FC = () => {
  const { chatMessages, addChatMessage } = useAppStore();
  const [inputValue, setInputValue] = useState('');
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickReplies = [
    { category: '数据查询', items: [
      { text: '今天的态势如何？', icon: '📊' },
      { text: '有多少违规线索？', icon: '🔍' },
      { text: '高风险线索有哪些？', icon: '⚠️' },
      { text: '本周新增多少违规？', icon: '📈' },
    ]},
    { category: '业务操作', items: [
      { text: '查看巡检计划', icon: '📅' },
      { text: '导出今日报告', icon: '📄' },
      { text: '跟进整改进度', icon: '✅' },
      { text: '查询问题商家', icon: '🏪' },
    ]},
    { category: '系统帮助', items: [
      { text: '如何使用这个系统？', icon: '❓' },
      { text: '有哪些违规类型？', icon: '📋' },
      { text: '风险等级怎么划分？', icon: '🏷️' },
      { text: '线索如何处理？', icon: '⚙️' },
    ]},
    { category: '日常问候', items: [
      { text: '你好', icon: '👋' },
      { text: '谢谢', icon: '🙏' },
      { text: '再见', icon: '👋' },
    ]}
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const handleQuickReply = (text: string) => {
    setInputValue(text);
    setShowQuickReplies(false);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      type: 'text',
      timestamp: new Date().toISOString()
    };
    addChatMessage(userMessage);
    setInputValue('');

    setTimeout(() => {
      const input = inputValue.toLowerCase();
      let responseContent = '';

      if (input.includes('概述') || input.includes('情况') || input.includes('统计') || input.includes('态势')) {
        responseContent = '好的，为您提供当前态势概览：\n\n' +
          '📊 **今日统计**\n' +
          '- 扫描商家总数：1,285家\n' +
          '- 发现违规线索：243条\n' +
          '- 高风险线索：18条\n' +
          '- 整改率：73.2%\n\n' +
          '**风险趋势**：近6个月高风险线索呈下降趋势，从1月份的32条下降至本月的18条，说明监管措施成效显著。\n\n' +
          '您想查看具体哪方面的详细数据？';
      } else if (input.includes('线索') || input.includes('违规') || input.includes('问题')) {
        responseContent = '为您查询到相关违规线索情况：\n\n' +
          '🔴 **高风险线索（18条）**\n' +
          '1. [幽灵外卖] 张姐私房菜 - 地址与实际不符\n' +
          '2. [无证经营] 老王烧烤 - 营业执照过期\n' +
          '3. [超范围经营] 川味馆 - 售卖凉菜未取得许可\n\n' +
          '🟡 **中风险线索（45条）**\n' +
          '- 证照公示不规范：22条\n' +
          '- 卫生问题：15条\n' +
          '- 其他：8条\n\n' +
          '需要我为您生成详细的线索分析报告吗？';
      } else if (input.includes('商家') || input.includes('店铺')) {
        responseContent = '关于商家查询，您可以：\n\n' +
          '1. **按区域查询**：如"查看朝阳区的违规商家"\n' +
          '2. **按平台查询**：如"美团上的高风险商家"\n' +
          '3. **按违规类型查询**：如"幽灵外卖商家列表"\n\n' +
          '目前系统中共有1,285家商家在库，其中243家存在违规记录。您想了解哪类商家的具体信息？';
      } else if (input.includes('巡检') || input.includes('检查') || input.includes('计划')) {
        responseContent = '巡检计划管理功能说明：\n\n' +
          '📅 **当前计划**\n' +
          '- 每日巡检（美团）：每日凌晨2点执行\n' +
          '- 每日巡检（饿了么）：每日凌晨3点执行\n' +
          '- 每周重点检查：每周一凌晨0点执行\n\n' +
          '✅ **最近执行记录**\n' +
          '- 2026-05-26 03:00：饿了么巡检完成，发现12条线索\n' +
          '- 2026-05-26 02:00：美团巡检完成，发现15条线索\n\n' +
          '需要我帮您创建新的巡检任务吗？';
      } else if (input.includes('整改') || input.includes('处理') || input.includes('跟进')) {
        responseContent = '整改跟进情况：\n\n' +
          '📈 **整改进度**\n' +
          '- 已完成整改：178条线索\n' +
          '- 整改中：45条线索\n' +
          '- 待处理：20条线索\n' +
          '- 整改率：73.2%（较上月提升5.1%）\n\n' +
          '🔍 **待跟进重点**\n' +
          '1. 张姐私房菜 - 需核实地址变更情况\n' +
          '2. 老王烧烤 - 已要求重新办理营业执照\n' +
          '3. 川味馆 - 已下架凉菜类目\n\n' +
          '需要我为您生成整改建议书吗？';
      } else if (input.includes('报告') || input.includes('导出')) {
        responseContent = '报告导出功能可用：\n\n' +
          '📋 **可导出报告类型**\n' +
          '1. 每日巡检报告\n' +
          '2. 每周态势分析报告\n' +
          '3. 月度总结报告\n' +
          '4. 专项整治报告\n\n' +
          '📄 **导出格式**\n' +
          '- Excel (.xlsx)\n' +
          '- PDF (.pdf)\n' +
          '- Word (.docx)\n\n' +
          '请告诉我您需要哪类报告，我来为您生成！';
      } else if (input.includes('违规类型') || input.includes('类型')) {
        responseContent = '当前系统支持识别的违规类型：\n\n' +
          '🔴 **高风险**\n' +
          '- 幽灵外卖：商家地址与实际不符\n' +
          '- 无证经营：无营业执照或许可证\n' +
          '- 超范围经营：超出许可范围经营\n' +
          '- 证照过期：营业执照或许可证已过期\n\n' +
          '🟡 **中风险**\n' +
          '- 证照公示不规范：未按要求公示资质\n' +
          '- 卫生问题：店内卫生状况不佳\n' +
          '- 食品存放不当：食材存储不符合要求\n\n' +
          '🟢 **低风险**\n' +
          '- 信息更新不及时：商家信息未及时更新\n' +
          '- 其他轻微问题';
      } else if (input.includes('风险等级') || input.includes('等级')) {
        responseContent = '风险等级划分标准：\n\n' +
          '🔴 **高风险**（立即处理）\n' +
          '- 可能对消费者健康造成严重威胁\n' +
          '- 涉及违法行为\n' +
          '- 需要立即下架或处罚\n\n' +
          '🟡 **中风险**（限期整改）\n' +
          '- 存在一定安全隐患\n' +
          '- 需要在规定时间内整改\n' +
          '- 逾期未整改将升级为高风险\n\n' +
          '🟢 **低风险**（提醒改进）\n' +
          '- 轻微违规或信息不完善\n' +
          '- 给予提醒并要求完善\n' +
          '- 不影响正常经营';
      } else if (input.includes('线索处理') || input.includes('如何处理')) {
        responseContent = '线索处理流程：\n\n' +
          '1️⃣ **发现线索**：系统自动巡检或人工举报\n' +
          '2️⃣ **风险评估**：根据规则自动判定风险等级\n' +
          '3️⃣ **派发处理**：根据区域分配给对应监管人员\n' +
          '4️⃣ **现场核查**：监管人员到店核实情况\n' +
          '5️⃣ **整改要求**：下达整改通知书或行政处罚\n' +
          '6️⃣ **复查验收**：确认整改完成情况\n' +
          '7️⃣ **归档结案**：记录处理结果并存档';
      } else if (input.includes('你好') || input.includes('您好') || input.includes('hi') || input.includes('hello')) {
        responseContent = '您好！👋 我是网络餐饮巡检智能助手。\n\n' +
          '我可以帮您：\n' +
          '- 📊 查看态势概览和统计数据\n' +
          '- 🔍 查询违规线索和问题商家\n' +
          '- 📅 管理巡检计划\n' +
          '- ✅ 跟进整改进度\n' +
          '- 📋 生成各类报告\n\n' +
          '请问有什么可以帮您的？';
      } else if (input.includes('帮助') || input.includes('怎么') || input.includes('如何')) {
        responseContent = '使用帮助指南：\n\n' +
          '🗣️ **常用对话示例**\n\n' +
          '数据查询类：\n' +
          '- "今天的态势如何？"\n' +
          '- "有哪些高风险线索？"\n' +
          '- "本周新增了多少违规？"\n\n' +
          '业务操作类：\n' +
          '- "查看巡检计划"\n' +
          '- "导出本周报告"\n' +
          '- "跟进整改进度"\n\n' +
          '您可以尝试用自然语言提问，我会尽力为您提供帮助！';
      } else if (input.includes('谢谢') || input.includes('感谢') || input.includes('再见')) {
        responseContent = '不客气！😊 很高兴能帮到您。\n\n' +
          '如果还有其他问题，随时可以问我。祝您工作顺利！';
      } else {
        responseContent = '收到您的问题，正在处理中...\n\n' +
          '我理解您想了解相关信息。基于当前场景，我可以帮您：\n' +
          '- 查询态势概览和统计数据\n' +
          '- 查看违规线索列表\n' +
          '- 了解巡检计划执行情况\n' +
          '- 跟进整改进度\n\n' +
          '请告诉我您具体想了解哪方面的内容？';
      }

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responseContent,
        type: 'text',
        timestamp: new Date().toISOString()
      };
      addChatMessage(assistantMessage);
    }, 800 + Math.random() * 700);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-900">网络餐饮巡检助手</h1>
        <p className="text-sm text-gray-500">与智能助手对话，了解巡检情况</p>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-4xl mx-auto">
          {chatMessages.map((message) => (
            <ChatBubble key={message.id} message={message} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="bg-white border-t border-gray-200 p-4">
        <div className="max-w-4xl mx-auto">
          {showQuickReplies && (
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={16} className="text-yellow-500" />
                <span className="text-sm font-medium text-gray-700">快速提问</span>
              </div>
              <div className="space-y-3">
                {quickReplies.map((category, catIndex) => (
                  <div key={catIndex}>
                    <div className="text-xs text-gray-500 mb-1.5">{category.category}</div>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item, itemIndex) => (
                        <button
                          key={itemIndex}
                          onClick={() => handleQuickReply(item.text)}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 text-sm rounded-full transition-colors"
                        >
                          <span>{item.icon}</span>
                          <span>{item.text}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-gray-500">
              {chatMessages.length} 条消息
            </span>
            <button
              onClick={() => setShowQuickReplies(!showQuickReplies)}
              className="text-xs text-blue-600 hover:text-blue-700"
            >
              {showQuickReplies ? '收起快速提问' : '展开快速提问'}
            </button>
          </div>

          <div className="flex gap-3">
            <div className="flex-1 relative">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="输入您的问题..."
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={1}
                style={{ minHeight: '48px', maxHeight: '120px' }}
              />
            </div>
            <button
              onClick={handleSend}
              disabled={!inputValue.trim()}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
            >
              <Send size={20} />
              发送
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
