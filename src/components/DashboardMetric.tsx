
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { formatNumber, formatPercent, formatChange } from '../utils/formatters';

interface DashboardMetricProps {
  title: string;
  value: number;
  change?: number;
  isPercent?: boolean;
  icon: LucideIcon;
  color: string;
}

const DashboardMetric: React.FC<DashboardMetricProps> = ({ 
  title, 
  value, 
  change, 
  isPercent = false, 
  icon: Icon, 
  color 
}) => {
  const formattedValue = isPercent ? formatPercent(value) : formatNumber(value);
  const changeData = change !== undefined ? formatChange(change) : null;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-gray-900">{formattedValue}</h3>
          {changeData && (
            <p className={`text-sm mt-2 flex items-center gap-1 ${
              changeData.isPositive ? 'text-green-600' : 'text-red-600'
            }`}>
              <span className={`inline-block w-2 h-2 ${
                changeData.isPositive ? 'border-t-2 border-r-2 border-green-600 rotate-[-45deg]' : 'border-b-2 border-r-2 border-red-600 rotate-45'
              }`}></span>
              {changeData.text} 较上月
            </p>
          )}
        </div>
        <div 
          className="w-12 h-12 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${color}15` }}
        >
          <Icon size={24} style={{ color }} />
        </div>
      </div>
    </div>
  );
};

export default DashboardMetric;
