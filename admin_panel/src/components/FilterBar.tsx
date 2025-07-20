import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SearchIcon, FilterIcon, XIcon } from 'lucide-react';
interface FilterBarProps {
  onFilter: (filters: any) => void;
}
export function FilterBar({
  onFilter
}: FilterBarProps) {
  const [search, setSearch] = useState('');
  const [buildingType, setBuildingType] = useState('');
  const [roomType, setRoomType] = useState('');
  const [repairType, setRepairType] = useState('');
  const [urgency, setUrgency] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    applyFilters({
      search: e.target.value
    });
  };
  const applyFilters = (overrides = {}) => {
    const filters = {
      search,
      buildingType,
      roomType,
      repairType,
      urgency,
      ...overrides
    };
    onFilter(filters);
  };
  const resetFilters = () => {
    setSearch('');
    setBuildingType('');
    setRoomType('');
    setRepairType('');
    setUrgency('');
    onFilter({});
  };
  return <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex flex-col md:flex-row md:items-center gap-3">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-4 w-4 text-gray-400" />
          </div>
          <input type="text" className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-100 focus:border-blue-200 transition-all duration-200" placeholder="Поиск заявок..." value={search} onChange={handleSearchChange} />
        </div>
        <button onClick={() => setIsFilterOpen(!isFilterOpen)} className="inline-flex items-center px-3 py-2 border border-gray-200 rounded-lg text-sm font-light text-gray-700 hover:bg-gray-50 transition-colors duration-200">
          <FilterIcon className="h-4 w-4 mr-2" />
          Фильтр
        </button>
      </div>
      <AnimateFilters isOpen={isFilterOpen}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
          <div>
            <label className="block text-sm font-light text-gray-600 mb-1">
              Building Type
            </label>
            <select className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-100 focus:border-blue-200 transition-all duration-200" value={buildingType} onChange={e => {
            setBuildingType(e.target.value);
            applyFilters({
              buildingType: e.target.value
            });
          }}>
              <option value="">All Types</option>
              <option value="Apartment">Apartment</option>
              <option value="House">House</option>
              <option value="Office">Office</option>
              <option value="Commercial">Commercial</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-light text-gray-600 mb-1">
              Room Type
            </label>
            <select className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-100 focus:border-blue-200 transition-all duration-200" value={roomType} onChange={e => {
            setRoomType(e.target.value);
            applyFilters({
              roomType: e.target.value
            });
          }}>
              <option value="">All Rooms</option>
              <option value="Living Room">Living Room</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Bathroom">Bathroom</option>
              <option value="Bedroom">Bedroom</option>
              <option value="Office">Office</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-light text-gray-600 mb-1">
              Тип ремонта
            </label>
            <select className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-100 focus:border-blue-200 transition-all duration-200" value={repairType} onChange={e => {
            setRepairType(e.target.value);
            applyFilters({
              repairType: e.target.value
            });
          }}>
              <option value="">Все ремонты</option>
              <option value="Cosmetic">Косметический</option>
              <option value="Standard">Стандартный</option>
              <option value="Premium">Премиум</option>
              <option value="Full Renovation">Капитальный</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-light text-gray-600 mb-1">
              Срочность
            </label>
            <select className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-100 focus:border-blue-200 transition-all duration-200" value={urgency} onChange={e => {
            setUrgency(e.target.value);
            applyFilters({
              urgency: e.target.value
            });
          }}>
              <option value="">Все</option>
              <option value="Urgent">Срочно</option>
              <option value="Standard">Стандарт</option>
              <option value="Not Urgent">Не срочно</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button onClick={resetFilters} className="inline-flex items-center px-3 py-1.5 text-sm font-light text-gray-600 hover:text-gray-800 transition-colors duration-200">
            <XIcon className="h-3 w-3 mr-1" />
            Сбросить фильтры
          </button>
        </div>
      </AnimateFilters>
    </div>;
}
function AnimateFilters({
  isOpen,
  children
}: {
  isOpen: boolean;
  children: React.ReactNode;
}) {
  return <AnimatePresence>
      {isOpen && <motion.div initial={{
      height: 0,
      opacity: 0
    }} animate={{
      height: 'auto',
      opacity: 1
    }} exit={{
      height: 0,
      opacity: 0
    }} transition={{
      duration: 0.2
    }} style={{
      overflow: 'hidden'
    }}>
          {children}
        </motion.div>}
    </AnimatePresence>;
}