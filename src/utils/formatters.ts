
// 格式化日期时间
export function formatDateTime(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
}

// 格式化数字（千分位）
export function formatNumber(num: number): string {
  return num.toLocaleString('zh-CN');
}

// 格式化百分比
export function formatPercent(num: number): string {
  return `${num.toFixed(1)}%`;
}

// 格式化变化趋势
export function formatChange(num: number): { text: string; isPositive: boolean } {
  const prefix = num > 0 ? '+' : '';
  return {
    text: `${prefix}${num.toFixed(1)}%`,
    isPositive: num >= 0
  };
}
