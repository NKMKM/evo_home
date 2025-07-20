import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layout } from './Layout';
import { SubmissionCard } from './SubmissionCard';
import { FilterBar } from './FilterBar';
import { Submission } from '../utils/types';

export function DashboardPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState<Submission[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/submissions', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(data => {
        setSubmissions(data);
        setFilteredSubmissions(data);
      });
  }, []);

  const handleFilter = (filters: any) => {
    let filtered = [...submissions];
    if (filters.buildingType) {
      filtered = filtered.filter(s => s.buildingType === filters.buildingType);
    }
    if (filters.roomType) {
      filtered = filtered.filter(s => s.roomType === filters.roomType);
    }
    if (filters.repairType) {
      filtered = filtered.filter(s => s.repairType === filters.repairType);
    }
    if (filters.urgency) {
      filtered = filtered.filter(s => s.urgency === filters.urgency);
    }
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(s => s.name.toLowerCase().includes(searchLower) || s.phone.includes(filters.search) || s.additionalInfo.toLowerCase().includes(searchLower));
    }
    setFilteredSubmissions(filtered);
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return <Layout>
      <div className="px-6 py-8 w-full">
        <motion.div initial={{
        opacity: 0,
        y: 10
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.3
      }}>
          <h1 className="text-2xl font-light text-gray-800 mb-1">
            Заявки на ремонт
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            Просмотр и управление заявками из калькулятора ремонта
          </p>
          <FilterBar onFilter={handleFilter} />
          <div className="mt-6 grid gap-4">
            {filteredSubmissions.length > 0 ? filteredSubmissions.map(submission => <SubmissionCard key={submission.id} submission={submission} isExpanded={expandedId === submission.id} onToggle={() => toggleExpand(submission.id)} />) : <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <p className="text-gray-500">
                  Нет заявок, соответствующих фильтрам
                </p>
              </div>}
          </div>
        </motion.div>
      </div>
    </Layout>;
}
