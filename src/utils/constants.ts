
import { ViolationType, RiskLevel, ClueStatus, Platform } from '../types';

// 违规类型显示名称
export const VIOLATION_TYPE_LABELS: Record<ViolationType, string> = {
  ghost: '幽灵外卖',
  license: '证照问题',
  expired: '证照过期',
  publicity: '公示不全',
  '超范围': '超范围经营',
  health: '卫生问题',
  transfer: '转单经营'
};

// 风险等级显示名称
export const RISK_LEVEL_LABELS: Record<RiskLevel, string> = {
  high: '高风险',
  medium: '中风险',
  low: '低风险'
};

// 风险等级颜色
export const RISK_LEVEL_COLORS: Record<RiskLevel, string> = {
  high: '#dc2626',
  medium: '#f59e0b',
  low: '#10b981'
};

// 风险等级背景色
export const RISK_LEVEL_BG_COLORS: Record<RiskLevel, string> = {
  high: 'bg-red-100',
  medium: 'bg-amber-100',
  low: 'bg-green-100'
};

// 状态显示名称
export const STATUS_LABELS: Record<ClueStatus, string> = {
  pending: '待核查',
  checked: '已核查',
  filed: '已立案',
  rectified: '已整改',
  rebounded: '已反弹'
};

// 状态颜色
export const STATUS_COLORS: Record<ClueStatus, string> = {
  pending: '#6b7280',
  checked: '#3b82f6',
  filed: '#8b5cf6',
  rectified: '#10b981',
  rebounded: '#ef4444'
};

// 平台显示名称
export const PLATFORM_LABELS: Record<Platform, string> = {
  meituan: '美团',
  eleme: '饿了么',
  douyin: '抖音'
};
