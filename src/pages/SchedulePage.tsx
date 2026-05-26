import React, { useState } from 'react';
import { Clock, Plus, Edit, Trash2, Calendar, CheckCircle } from 'lucide-react';

export default function SchedulePage() {
  const [schedules, setSchedules] = useState([
    {
      id: '1',
      name: '每日巡检 - 美团',
      frequency: 'daily',
      time: '02:00',
      region: '全区',
      platforms: ['美团'],
      enabled: true,
      lastRun: '2026-05-26 02:00:00',
      nextRun: '2026-05-27 02:00:00'
    },
    {
      id: '2',
      name: '每日巡检 - 饿了么',
      frequency: 'daily',
      time: '03:00',
      region: '全区',
      platforms: ['饿了么'],
      enabled: true,
      lastRun: '2026-05-26 03:00:00',
      nextRun: '2026-05-27 03:00:00'
    },
    {
      id: '3',
      name: '每周重点检查',
      frequency: 'weekly',
      time: '周一 00:00',
      region: '高风险区域',
      platforms: ['美团', '饿了么', '抖音'],
      enabled: true,
      lastRun: '2026-05-20 00:00:00',
      nextRun: '2026-05-27 00:00:00'
    }
  ]);

  const frequencyLabels = {
    daily: '每日',
    weekly: '每周',
    monthly: '每月'
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">巡检计划</h1>
            <p className="text-gray-600">配置自动化巡检任务</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus size={20} />
            新建计划
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="divide-y divide-gray-200">
          {schedules.map((schedule) => (
            <div key={schedule.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-medium text-gray-900">{schedule.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      schedule.enabled 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      {schedule.enabled ? '已启用' : '已停用'}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{frequencyLabels[schedule.frequency]} {schedule.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{schedule.region}</span>
                    </div>
                    <div>
                      平台：{schedule.platforms.join('、')}
                    </div>
                  </div>

                  <div className="flex gap-6 text-xs text-gray-500">
                    <div>上次执行：{schedule.lastRun}</div>
                    <div>下次执行：{schedule.nextRun}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 ml-4">
                  <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Edit size={18} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">执行历史</h2>
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="divide-y divide-gray-200">
            {[
              { time: '2026-05-26 03:00:00', task: '每日巡检 - 饿了么', status: 'success', clues: 12 },
              { time: '2026-05-26 02:00:00', task: '每日巡检 - 美团', status: 'success', clues: 15 },
              { time: '2026-05-25 03:00:00', task: '每日巡检 - 饿了么', status: 'success', clues: 8 },
              { time: '2026-05-25 02:00:00', task: '每日巡检 - 美团', status: 'success', clues: 11 },
            ].map((history, index) => (
              <div key={index} className="p-4 flex items-center justify-between hover:bg-gray-50">
                <div className="flex items-center gap-4">
                  <CheckCircle size={20} className="text-green-500" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">{history.task}</div>
                    <div className="text-xs text-gray-500">{history.time}</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  发现线索 <span className="font-medium text-red-600">{history.clues}</span> 条
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
