import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronDownIcon,
  ChevronUpIcon,
  BuildingIcon,
  DoorOpenIcon,
  SquareIcon,
  ClockIcon,
  FileTextIcon,
  UserIcon,
  PhoneIcon,
  GiftIcon,
  TrashIcon,
} from 'lucide-react'
import { Submission } from '../utils/types'

interface SubmissionCardProps {
  submission: Submission
  isExpanded: boolean
  onToggle: () => void
  onDelete?: () => void
}

export function SubmissionCard({
  submission,
  isExpanded,
  onToggle,
  onDelete,
}: SubmissionCardProps) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

  // Map backend values to display text
  const buildingTypeMap: { [key: string]: string } = {
    option1: 'Новое здание',
    option2: 'Вторичка',
    unknown: 'Не указано'
  }

  const roomTypeMap: { [key: string]: string } = {
    option1: 'Квартира',
    option2: 'Дом',
    unknown: 'Не указано'
  }

  const repairTypeMap: { [key: string]: string } = {
    option1: 'Косметический',
    option2: 'Капитальный',
    unknown: 'Не указано'
  }

  const urgencyMap: { [key: string]: string } = {
    option1: 'Обычная',
    option2: 'Срочная',
    unknown: 'Не указано'
  }

  // Detailed logging to debug the issue
  console.log('SubmissionCard - Raw submission:', submission);
  console.log('SubmissionCard - buildingType:', submission.buildingType, 'Mapped:', buildingTypeMap[submission.buildingType] || buildingTypeMap['unknown']);
  console.log('SubmissionCard - roomType:', submission.roomType, 'Mapped:', roomTypeMap[submission.roomType] || roomTypeMap['unknown']);
  console.log('SubmissionCard - repairType:', submission.repairType, 'Mapped:', repairTypeMap[submission.repairType] || repairTypeMap['unknown']);
  console.log('SubmissionCard - urgency:', submission.urgency, 'Mapped:', urgencyMap[submission.urgency] || urgencyMap['unknown']);
  console.log('SubmissionCard - additionalInfo:', submission.additionalInfo);
  console.log('SubmissionCard - promoCode:', submission.promoCode);
  console.log('SubmissionCard - area:', submission.area);

  // Get display values with explicit checks
  const displayBuildingType = buildingTypeMap[submission.buildingType] || buildingTypeMap['unknown']
  const displayRoomType = roomTypeMap[submission.roomType] || roomTypeMap['unknown']
  const displayRepairType = repairTypeMap[submission.repairType] || repairTypeMap['unknown']
  const displayUrgency = urgencyMap[submission.urgency] || urgencyMap['unknown']

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setShowDeleteConfirm(true)
  }

  const handleCancelDelete = (e: React.MouseEvent) => {
    e.stopPropagation()
    setShowDeleteConfirm(false)
  }

  const handleConfirmDelete = (e: React.MouseEvent) => {
    e.stopPropagation()
    setShowDeleteConfirm(false)
    if (onDelete) onDelete()
  }

  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -10,
      }}
      transition={{
        duration: 0.2,
      }}
      className="bg-white rounded-lg shadow-sm overflow-hidden"
    >
      <div
        className="p-4 cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
        onClick={onToggle}
      >
        <div className="flex items-center space-x-3">
          <div className="bg-blue-50 text-blue-600 p-2 rounded-md">
            <BuildingIcon size={18} />
          </div>
          <div>
            <h3 className="text-gray-800 font-medium">{submission.name}</h3>
            <p className="text-gray-500 text-sm">{submission.phone}</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="hidden md:block">
            <span className="text-xs text-gray-500">Тип здания</span>
            <p className="text-sm text-gray-700">{displayBuildingType}</p>
          </div>
          <div className="hidden md:block">
            <span className="text-xs text-gray-500">Тип помещения</span>
            <p className="text-sm text-gray-700">{displayRoomType}</p>
          </div>
          <div className="hidden md:block">
            <span className="text-xs text-gray-500">Площадь</span>
            <p className="text-sm text-gray-700">{submission.area} м²</p>
          </div>
          <div className="hidden md:block">
            <span className="text-xs text-gray-500">Срочность</span>
            <p className="text-sm text-gray-700">{displayUrgency}</p>
          </div>
          {showDeleteConfirm ? (
            <div
              className="flex items-center space-x-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="text-red-600 hover:text-red-700 text-xs font-medium px-2 py-1 rounded hover:bg-red-50 transition-colors duration-200"
                onClick={handleConfirmDelete}
              >
                Удалить
              </button>
              <button
                className="text-gray-500 hover:text-gray-700 text-xs font-medium px-2 py-1 rounded hover:bg-gray-100 transition-colors duration-200"
                onClick={handleCancelDelete}
              >
                Отмена
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <button
                className="text-gray-400 hover:text-red-600 transition-colors duration-200"
                onClick={handleDeleteClick}
              >
                <TrashIcon size={18} />
              </button>
              <button className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                {isExpanded ? (
                  <ChevronUpIcon size={20} />
                ) : (
                  <ChevronDownIcon size={20} />
                )}
              </button>
            </div>
          )}
        </div>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: 'auto',
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className="border-t border-gray-100"
          >
            <div className="p-4 bg-gray-50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-3 rounded-md shadow-sm">
                  <div className="flex items-start">
                    <BuildingIcon
                      size={16}
                      className="text-gray-400 mt-0.5 mr-2"
                    />
                    <div>
                      <span className="text-xs text-gray-500 block">
                        Тип здания
                      </span>
                      <span className="text-sm text-gray-800">
                        {displayBuildingType}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-md shadow-sm">
                  <div className="flex items-start">
                    <DoorOpenIcon
                      size={16}
                      className="text-gray-400 mt-0.5 mr-2"
                    />
                    <div>
                      <span className="text-xs text-gray-500 block">
                        Тип помещения
                      </span>
                      <span className="text-sm text-gray-800">
                        {displayRoomType}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-md shadow-sm">
                  <div className="flex items-start">
                    <SquareIcon
                      size={16}
                      className="text-gray-400 mt-0.5 mr-2"
                    />
                    <div>
                      <span className="text-xs text-gray-500 block">
                        Тип ремонта
                      </span>
                      <span className="text-sm text-gray-800">
                        {displayRepairType}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-md shadow-sm">
                  <div className="flex items-start">
                    <SquareIcon
                      size={16}
                      className="text-gray-400 mt-0.5 mr-2"
                    />
                    <div>
                      <span className="text-xs text-gray-500 block">Площадь</span>
                      <span className="text-sm text-gray-800">
                        {submission.area} м²
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-md shadow-sm">
                  <div className="flex items-start">
                    <ClockIcon
                      size={16}
                      className="text-gray-400 mt-0.5 mr-2"
                    />
                    <div>
                      <span className="text-xs text-gray-500 block">
                        Срочность
                      </span>
                      <span className="text-sm text-gray-800">
                        {displayUrgency}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-md shadow-sm">
                  <div className="flex items-start">
                    <GiftIcon size={16} className="text-gray-400 mt-0.5 mr-2" />
                    <div>
                      <span className="text-xs text-gray-500 block">
                        Промокод
                      </span>
                      <span className="text-sm text-gray-800">
                        {submission.promoCode || '—'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-white p-3 rounded-md shadow-sm">
                <div className="flex items-start">
                  <FileTextIcon
                    size={16}
                    className="text-gray-400 mt-0.5 mr-2"
                  />
                  <div>
                    <span className="text-xs text-gray-500 block">
                      Дополнительная информация
                    </span>
                    <p className="text-sm text-gray-800 whitespace-pre-line">
                      {submission.additionalInfo || 'Нет дополнительной информации'}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-4">
                <div className="bg-white p-3 rounded-md shadow-sm flex-1">
                  <div className="flex items-start">
                    <UserIcon size={16} className="text-gray-400 mt-0.5 mr-2" />
                    <div>
                      <span className="text-xs text-gray-500 block">Имя</span>
                      <span className="text-sm text-gray-800">
                        {submission.name}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-md shadow-sm flex-1">
                  <div className="flex items-start">
                    <PhoneIcon
                      size={16}
                      className="text-gray-400 mt-0.5 mr-2"
                    />
                    <div>
                      <span className="text-xs text-gray-500 block">Телефон</span>
                      <span className="text-sm text-gray-800">
                        {submission.phone}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}