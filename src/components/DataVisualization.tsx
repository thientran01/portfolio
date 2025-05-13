
import React from 'react';
import { motion } from 'framer-motion';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface DataPoint {
  name: string;
  value: number;
  color?: string;
}

interface DataVisualizationProps {
  title: string;
  data: DataPoint[];
  isEmotional?: boolean;
  type?: 'bar' | 'pie';
}

const DataVisualization = ({ 
  title, 
  data, 
  isEmotional = false,
  type = 'bar'
}: DataVisualizationProps) => {
  // Default colors based on theme
  const defaultColor = isEmotional ? '#7692FF' : '#1B2CC1';
  
  // Ensure all data points have a color
  const coloredData = data.map(point => ({
    ...point,
    color: point.color || defaultColor
  }));
  
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="my-24"
    >
      <h2 className="text-2xl mb-8">{title}</h2>
      
      <div className={`p-6 rounded-lg border ${
        isEmotional 
          ? 'border-portfolio-periwinkle/20 bg-black/30' 
          : 'border-portfolio-deepblue/20 bg-black/30'
      }`}>
        <div className="h-[400px]">
          <ChartContainer
            config={{
              primary: { color: isEmotional ? '#7692FF' : '#1B2CC1' },
              secondary: { color: '#555' },
            }}
          >
            {type === 'bar' ? (
              <BarChart data={coloredData} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
                <XAxis 
                  dataKey="name"
                  tick={{ fill: '#aaa' }}
                  axisLine={{ stroke: '#333' }}
                  tickLine={{ stroke: '#333' }}
                />
                <YAxis 
                  tick={{ fill: '#aaa' }}
                  axisLine={{ stroke: '#333' }}
                  tickLine={{ stroke: '#333' }}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {coloredData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            ) : (
              <PieChart margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
                <Pie
                  data={coloredData}
                  dataKey="value"
                  nameKey="name" 
                  cx="50%"
                  cy="50%"
                  outerRadius={150}
                  innerRadius={60}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {coloredData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            )}
          </ChartContainer>
        </div>
      </div>
    </motion.section>
  );
};

export default DataVisualization;
