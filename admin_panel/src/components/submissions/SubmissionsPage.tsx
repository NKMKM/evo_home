import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SubmissionCard } from '../SubmissionCard';
import { FilterBar } from '../FilterBar';
import { Submission } from '../../utils/types';

export function SubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState<Submission[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const backendUrl = (import.meta as any).env?.VITE_BACKEND_URL || 'http://localhost:3001';

  // Map backend values to display text
  const buildingTypeMap: { [key: string]: string } = {
    option1: 'Новое здание',
    option2: 'Вторичка',
    unknown: 'Не указано'
  };

  const roomTypeMap: { [key: string]: string } = {
    option1: 'Квартира',
    option2: 'Дом',
    unknown: 'Не указано'
  };

  const repairTypeMap: { [key: string]: string } = {
    option1: 'Косметический',
    option2: 'Капитальный',
    unknown: 'Не указано'
  };

  const urgencyMap: { [key: string]: string } = {
    option1: 'Обычная',
    option2: 'Срочная',
    unknown: 'Не указано'
  };

  useEffect(() => {
    fetch(`${backendUrl}/api/submissions`, {
      credentials: 'include',
    })
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => {
        console.log('Raw API response:', data);
        // Minimal sanitization, only for missing fields
        const sanitizedData = data.map((submission: any) => ({
          ...submission,
          buildingType: submission.buildingType ?? submission.buildingtype ?? 'unknown',
          roomType: submission.roomType ?? submission.roomtype ?? 'unknown',
          repairType: submission.repairType ?? submission.repairtype ?? 'unknown',
          urgency: submission.urgency ?? 'unknown',
          additionalInfo: submission.additionalInfo ?? submission.additionalinfo ?? '',
          promoCode: submission.promoCode ?? submission.promocode ?? '',
          area: Number.isFinite(submission.area) ? submission.area : 0, // Handle null or invalid area
        }));
        console.log('Sanitized data:', sanitizedData);
        setSubmissions(sanitizedData);
        setFilteredSubmissions(sanitizedData);
      })
      .catch(err => {
        console.error('Ошибка при получении заявок:', err);
      });
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`${backendUrl}/api/submissions/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      
      if (response.ok) {
        setSubmissions(submissions.filter(submission => submission.id !== id));
        setFilteredSubmissions(filteredSubmissions.filter(submission => submission.id !== id));
        if (expandedId === id) {
          setExpandedId(null);
        }
      } else {
        console.error('Ошибка при удалении заявки:', response.status);
      }
    } catch (err) {
      console.error('Ошибка при удалении заявки:', err);
    }
  };

  const handleFilter = (filters: any) => {
    console.log('handleFilter - Received filters:', filters);
    
    let filtered = [...submissions];

    if (filters.buildingtype) {
      const backendBuildingType = Object.keys(buildingTypeMap).find(
        key => buildingTypeMap[key] === filters.buildingtype
      );
      console.log('handleFilter - buildingtype:', filters.buildingtype, 'Mapped to:', backendBuildingType);
      if (backendBuildingType) {
        filtered = filtered.filter(s => s.buildingType === backendBuildingType);
      }
    }

    if (filters.roomtype) {
      const backendRoomType = Object.keys(roomTypeMap).find(
        key => roomTypeMap[key] === filters.roomtype
      );
      console.log('handleFilter - roomtype:', filters.roomtype, 'Mapped to:', backendRoomType);
      if (backendRoomType) {
        filtered = filtered.filter(s => s.roomType === backendRoomType);
      }
    }

    if (filters.repairtype) {
      const backendRepairType = Object.keys(repairTypeMap).find(
        key => repairTypeMap[key] === filters.repairtype
      );
      console.log('handleFilter - repairtype:', filters.repairtype, 'Mapped to:', backendRepairType);
      if (backendRepairType) {
        filtered = filtered.filter(s => s.repairType === backendRepairType);
      }
    }

    if (filters.urgency) {
      const backendUrgency = Object.keys(urgencyMap).find(
        key => urgencyMap[key] === filters.urgency
      );
      console.log('handleFilter - urgency:', filters.urgency, 'Mapped to:', backendUrgency);
      if (backendUrgency) {
        filtered = filtered.filter(s => s.urgency === backendUrgency);
      }
    }

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      console.log('handleFilter - search:', searchLower);
      filtered = filtered.filter(s => 
        s.name.toLowerCase().includes(searchLower) || 
        s.phone.includes(searchLower) || 
        (s.additionalInfo && s.additionalInfo.toLowerCase().includes(searchLower))
      );
    }

    console.log('handleFilter - Filtered submissions:', filtered);
    setFilteredSubmissions(filtered);
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="px-6 py-8 w-full">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-2xl font-light text-gray-800 mb-1">
          Заявки на ремонт
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Просмотр и управление заявками из калькулятора ремонта
        </p>
        <FilterBar onFilter={handleFilter} />
        <div className="mt-6 grid gap-4">
          {filteredSubmissions.length > 0 ? (
            filteredSubmissions.map(submission => (
              <SubmissionCard 
                key={submission.id} 
                submission={submission} 
                isExpanded={expandedId === submission.id} 
                onToggle={() => toggleExpand(submission.id)}
                onDelete={() => handleDelete(submission.id)}
              />
            ))
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <p className="text-gray-500">
                Нет заявок, соответствующих фильтрам
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}