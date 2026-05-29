
import { Clue, DashboardMetrics, ViolationDistribution, ChatMessage, RiskTrendData, RegionDistribution } from '../types';

// 模拟线索数据
export const mockClues: Clue[] = [
  {
    id: '1',
    merchantName: '老王烧烤',
    platform: 'meituan',
    address: 'XX区XX街道XX小区3栋502室',
    violationType: ['ghost', 'license'],
    riskLevel: 'high',
    riskScore: 92,
    status: 'pending',
    createdAt: '2026-05-25T14:30:00Z',
    updatedAt: '2026-05-25T14:30:00Z',
    evidence: {
      screenshots: ['screenshot1.jpg', 'screenshot2.jpg'],
      description: '注册地址为居民小区，与另外2家商家共用同一地址，门面照片经查重为网络图片，食品经营许可证号关联4家店铺',
      legalBasis: '《食品安全法》第131条'
    }
  },
  {
    id: '2',
    merchantName: '蜀湘人家',
    platform: 'meituan',
    address: 'XX区XX路88号',
    violationType: ['license'],
    riskLevel: 'high',
    riskScore: 88,
    status: 'checked',
    createdAt: '2026-05-25T12:15:00Z',
    updatedAt: '2026-05-25T16:45:00Z',
    evidence: {
      screenshots: ['screenshot3.jpg'],
      description: '许可证号在监管数据库中无记录，确认证照信息造假',
      legalBasis: '《食品安全法》第131条'
    }
  },
  {
    id: '3',
    merchantName: '好吃便当',
    platform: 'eleme',
    address: 'XX区XX广场12号',
    violationType: ['expired'],
    riskLevel: 'medium',
    riskScore: 65,
    status: 'rectified',
    createdAt: '2026-05-24T09:20:00Z',
    updatedAt: '2026-05-25T10:30:00Z',
    evidence: {
      screenshots: ['screenshot4.jpg'],
      description: '食品经营许可证已于2026-03-01过期，仍在经营',
      legalBasis: '《网络餐饮服务经营者落实食品安全主体责任监督管理规定》'
    }
  },
  {
    id: '4',
    merchantName: '甜品小站',
    platform: 'douyin',
    address: 'XX区XX街56号',
    violationType: ['publicity'],
    riskLevel: 'medium',
    riskScore: 58,
    status: 'pending',
    createdAt: '2026-05-24T15:40:00Z',
    updatedAt: '2026-05-24T15:40:00Z',
    evidence: {
      screenshots: ['screenshot5.jpg'],
      description: '未在页面公示食品经营许可证，未标注无堂食标识',
      legalBasis: '《网络餐饮服务经营者落实食品安全主体责任监督管理规定》第12条'
    }
  },
  {
    id: '5',
    merchantName: '潮汕牛肉火锅',
    platform: 'meituan',
    address: 'XX区XX大道234号',
    violationType: ['health'],
    riskLevel: 'medium',
    riskScore: 62,
    status: 'filed',
    createdAt: '2026-05-23T11:00:00Z',
    updatedAt: '2026-05-24T14:20:00Z',
    evidence: {
      screenshots: ['screenshot6.jpg', 'screenshot7.jpg'],
      description: '用户评价中多次提到食物不新鲜、吃后腹泻等问题',
      legalBasis: '《食品安全法》第148条'
    }
  },
  {
    id: '6',
    merchantName: '张记面馆',
    platform: 'eleme',
    address: 'XX区XX巷8号',
    violationType: ['超范围'],
    riskLevel: 'low',
    riskScore: 45,
    status: 'pending',
    createdAt: '2026-05-23T08:30:00Z',
    updatedAt: '2026-05-23T08:30:00Z',
    evidence: {
      screenshots: ['screenshot8.jpg'],
      description: '证照仅允许热食类制售，实际售卖凉菜',
      legalBasis: '《食品安全法》第122条'
    }
  }
];

// 模拟态势指标数据
export const mockDashboardMetrics: DashboardMetrics = {
  totalMerchants: 18247,
  totalClues: 412,
  highRiskCount: 67,
  rectificationRate: 73.2,
  monthlyChange: {
    totalMerchants: 12,
    totalClues: 8,
    highRiskCount: -3,
    rectificationRate: 5.1
  }
};

// 模拟违规类型分布数据
export const mockViolationDistribution: ViolationDistribution[] = [
  { type: '幽灵外卖', count: 115, percentage: 27.9, color: '#dc2626' },
  { type: '证照问题', count: 128, percentage: 31.1, color: '#ef4444' },
  { type: '证照过期', count: 91, percentage: 22.1, color: '#f59e0b' },
  { type: '公示不全', count: 58, percentage: 14.1, color: '#eab308' },
  { type: '超范围经营', count: 20, percentage: 4.8, color: '#10b981' }
];

// 模拟对话消息 - 包含7个场景的完整对话流程
export const mockChatMessages: ChatMessage[] = [
  // 场景1：早安摘要卡片
  {
    id: '1',
    role: 'assistant',
    content: '',
    type: 'card',
    cardType: 'morning_summary',
    cardData: {
      date: '2026年5月26日',
      weekday: '星期二',
      todayTasks: {
        pendingCheck: 12,
        highPriority: 5,
        dueToday: 8
      },
      yesterdayOverview: {
        cluesDiscovered: 27,
        highRisk: 5,
        rectificationCompleted: 14,
        complianceRate: 73.2
      },
      suggestions: [
        '优先处理XX烧烤等5条高风险线索',
        '跟进8家商户的整改验收',
        '关注餐饮集聚区的合规情况'
      ]
    },
    timestamp: '2026-05-26T09:00:00Z'
  },
  
  // 场景2：今日筛查结果分析
  {
    id: '2',
    role: 'user',
    content: '今日筛查结果如何？',
    type: 'text',
    timestamp: '2026-05-26T09:05:00Z'
  },
  {
    id: '3',
    role: 'assistant',
    content: '',
    type: 'card',
    cardType: 'screening_result',
    cardData: {
      date: '2026-05-26',
      totalMerchants: 1842,
      cluesCount: 27,
      riskDistribution: {
        high: 5,
        medium: 12,
        low: 10
      },
      violationDistribution: [
        { type: '幽灵外卖', count: 3, color: '#dc2626' },
        { type: '证照造假', count: 2, color: '#ef4444' },
        { type: '证照过期', count: 8, color: '#f59e0b' },
        { type: '公示不全', count: 4, color: '#eab308' },
        { type: '超范围经营', count: 10, color: '#10b981' }
      ],
      clues: mockClues.slice(0, 5)
    },
    timestamp: '2026-05-26T09:06:00Z'
  },
  
  // 场景3：XX烧烤线索核查
  {
    id: '4',
    role: 'user',
    content: 'XX烧烤什么情况？',
    type: 'text',
    timestamp: '2026-05-26T09:10:00Z'
  },
  {
    id: '5',
    role: 'assistant',
    content: '',
    type: 'card',
    cardType: 'clue_detail',
    cardData: {
      clue: mockClues[0],
      illegalFacts: [
        '注册地址为居民小区（XX区XX街道XX小区3栋502室）',
        '与另外2家商家共用同一地址',
        '门面照片经查重为网络图片',
        '食品经营许可证号关联4家店铺'
      ],
      legalBasis: '《食品安全法》第131条',
      reasoningChain: [
        '地址异常：通过地址核验发现地址为居民住宅',
        '图片查重：门店照片与网络图片相似度98%',
        '证号关联：同一许可证号下存在4家店铺',
        '综合判定：高风险幽灵外卖'
      ],
      evidence: [
        { type: '门店照片', description: '网络来源图片' },
        { type: '地址核验', description: '居民小区现场照片' },
        { type: '许可证信息', description: '多店共用许可证' }
      ]
    },
    timestamp: '2026-05-26T09:11:00Z'
  },
  
  // 场景4：批量生成检察建议
  {
    id: '6',
    role: 'user',
    content: '5条高风险都出检察建议',
    type: 'text',
    timestamp: '2026-05-26T09:15:00Z'
  },
  {
    id: '7',
    role: 'assistant',
    content: '好的，已为您生成5条高风险线索的检察建议。需要调整措辞吗？',
    type: 'text',
    timestamp: '2026-05-26T09:16:00Z'
  },
  {
    id: '8',
    role: 'user',
    content: '可以',
    type: 'text',
    timestamp: '2026-05-26T09:17:00Z'
  },
  {
    id: '9',
    role: 'assistant',
    content: '',
    type: 'card',
    cardType: 'prosecution_suggestion',
    cardData: {
      title: '检察建议书',
      version: '1.0',
      suggestions: [
        {
          merchantName: '老王烧烤',
          riskLevel: 'high',
          suggestionType: 'inspection',
          content: '经调查，你单位存在涉嫌无证经营及地址虚假等违法行为。依据《食品安全法》第131条，建议立即停止经营活动，接受进一步调查处理。',
          requirements: ['停止经营', '接受调查', '整改报告'],
          deadline: '2026-06-02'
        },
        {
          merchantName: '蜀湘人家',
          riskLevel: 'high',
          suggestionType: 'inspection',
          content: '经查，你单位食品经营许可证涉嫌伪造。依据《食品安全法》第131条，建议立即下架平台，配合监管部门调查。',
          requirements: ['平台下架', '配合调查', '重新办证'],
          deadline: '2026-06-02'
        },
        {
          merchantName: '美味快餐',
          riskLevel: 'high',
          suggestionType: 'consultation',
          content: '近期监测发现你单位存在超范围经营凉菜的情况。建议你单位立即进行自查，下架超出许可范围的菜品。',
          requirements: ['自查整改', '下架超范围菜品', '完善许可'],
          deadline: '2026-06-05'
        }
      ],
      generateDate: '2026-05-26',
      caseCount: 5
    },
    timestamp: '2026-05-26T09:18:00Z'
  },
  
  // 场景5：整改跟踪与反弹预警
  {
    id: '10',
    role: 'user',
    content: '整改跟踪情况',
    type: 'text',
    timestamp: '2026-05-26T09:20:00Z'
  },
  {
    id: '11',
    role: 'assistant',
    content: '',
    type: 'card',
    cardType: 'rectification_tracking',
    cardData: {
      totalClues: 243,
      rectificationStats: {
        completed: 178,
        inProgress: 45,
        pending: 20,
        overdue: 3
      },
      reboundAlerts: [
        {
          merchantName: '张家菜馆',
          alertType: 'rebound',
          alertDate: '2026-05-25',
          reason: '超范围经营凉菜问题再次出现',
          suggestion: '建议现场核查'
        },
        {
          merchantName: '小李面馆',
          alertType: 'overdue',
          alertDate: '2026-05-24',
          reason: '整改期限已过，未提交整改报告',
          suggestion: '发送催告通知'
        }
      ],
      timeline: [
        { date: '2026-05-26', status: 'completed', count: 3 },
        { date: '2026-05-25', status: 'in_progress', count: 5 },
        { date: '2026-05-24', status: 'completed', count: 8 }
      ]
    },
    timestamp: '2026-05-26T09:21:00Z'
  },
  
  // 场景6：态势概览查询
  {
    id: '12',
    role: 'user',
    content: '最近一个月整体态势',
    type: 'text',
    timestamp: '2026-05-26T09:25:00Z'
  },
  {
    id: '13',
    role: 'assistant',
    content: '',
    type: 'card',
    cardType: 'situation_overview',
    cardData: {
      period: '2026年4月26日 - 2026年5月26日',
      metrics: mockDashboardMetrics,
      violationDistribution: mockViolationDistribution,
      riskTrend: mockRiskTrendData,
      regionDistribution: mockRegionDistribution,
      insights: [
        '高风险线索较上月下降4.3%，监管成效显著',
        '证照问题仍是主要违规类型，占比31.1%',
        'XX区违规线索较多，建议加强巡查'
      ]
    },
    timestamp: '2026-05-26T09:26:00Z'
  },
  
  // 场景7：文书修改交互
  {
    id: '14',
    role: 'user',
    content: '措辞太硬，改成磋商函语气',
    type: 'text',
    timestamp: '2026-05-26T09:30:00Z'
  },
  {
    id: '15',
    role: 'assistant',
    content: '',
    type: 'card',
    cardType: 'prosecution_suggestion',
    cardData: {
      title: '磋商函',
      version: '2.0',
      suggestions: [
        {
          merchantName: '老王烧烤',
          riskLevel: 'high',
          suggestionType: 'consultation',
          content: '您好！近期监测发现贵店存在一些合规性问题需要关注。为保障食品安全，共同维护良好的餐饮市场秩序，特致函与您沟通。建议您尽快进行自查整改。',
          requirements: ['自查整改', '提交报告', '接受指导'],
          deadline: '2026-06-09'
        }
      ],
      generateDate: '2026-05-26',
      caseCount: 5
    },
    timestamp: '2026-05-26T09:31:00Z'
  },
  
  // 场景8：数据源状态查询
  {
    id: '16',
    role: 'user',
    content: '许可数据多久没更新了？',
    type: 'text',
    timestamp: '2026-05-26T09:35:00Z'
  },
  {
    id: '17',
    role: 'assistant',
    content: '',
    type: 'card',
    cardType: 'data_source_status',
    cardData: {
      lastUpdated: '2026-05-20 14:30:00',
      systemHealth: 'normal',
      dataSources: [
        { name: '美团数据', status: 'normal', lastSync: '2026-05-26 08:00:00' },
        { name: '饿了么数据', status: 'normal', lastSync: '2026-05-26 08:15:00' },
        { name: '抖音数据', status: 'warning', lastSync: '2026-05-25 10:30:00' },
        { name: '许可数据库', status: 'error', lastSync: '2026-05-20 14:30:00' },
        { name: '处罚数据库', status: 'normal', lastSync: '2026-05-25 16:00:00' }
      ],
      alerts: [
        { type: 'error', message: '许可数据库已6天未同步，请及时更新', time: '2026-05-26 09:00:00' },
        { type: 'warning', message: '抖音数据超过24小时未同步', time: '2026-05-26 08:30:00' }
      ]
    },
    timestamp: '2026-05-26T09:36:00Z'
  }
];

// 模拟风险趋势数据
export const mockRiskTrendData: RiskTrendData[] = [
  { month: '1月', high: 45, medium: 78, low: 52 },
  { month: '2月', high: 52, medium: 85, low: 48 },
  { month: '3月', high: 58, medium: 92, low: 55 },
  { month: '4月', high: 62, medium: 88, low: 60 },
  { month: '5月', high: 67, medium: 95, low: 58 },
  { month: '6月', high: 65, medium: 90, low: 55 }
];

// 模拟区域分布数据
export const mockRegionDistribution: RegionDistribution[] = [
  { region: 'XX区', count: 18 },
  { region: 'YY区', count: 12 },
  { region: 'ZZ区', count: 9 },
  { region: 'AA区', count: 6 },
  { region: 'BB区', count: 3 }
];
