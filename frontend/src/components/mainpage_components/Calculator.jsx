import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PersonIcon from '@mui/icons-material/Person';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import PercentIcon from '@mui/icons-material/Percent';
import calculator from '../../assets/icons/calculator.png';

const Calculator = () => {
  const [rangeValue, setRangeValue] = useState(0);
  const { t } = useTranslation('home/Calculator');

  // Получение URL бэкенда из переменной окружения
  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.area = Number(rangeValue);

    const payload = {
      buildingType: data.buildingType,
      roomType: data.roomType,
      repairType: data.repairType,
      area: data.area,
      urgency: data.urgency,
      additionalInfo: data.additionalInfo || '',
      name: data.name,
      phone: data.phone,
      promoCode: data.promoCode || '',
    };

    console.log('Отправляем данные:', payload);

    try {
      const res = await fetch(`${backendUrl}/api/submissions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Ошибка при отправке');
      }
      alert('Форма успешно отправлена');
      e.target.reset();
      setRangeValue(0);
    } catch (error) {
      alert('Ошибка отправки: ' + error.message);
    }
  };

  return (
    <div className="mt-20 w-full bg-cover bg-center py-10 relative z-10 home-calculator-bg-image">
      {/* Header */}
      <header className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 px-4 text-white text-center">
        <img src={calculator} alt="calculator" loading="lazy" className="w-16 h-16 mx-auto sm:mx-0" />
        <h1 className="text-4xl sm:text-5xl font-semibold">{t('h')}</h1>
      </header>

      {/* Description */}
      <p className="text-white text-center italic text-lg my-6 mx-auto px-4 max-w-4xl">{t('p')}</p>

      {/* Form */}
      <form
        className="flex flex-col lg:flex-row gap-10 px-4 max-w-[1400px] mx-auto"
        onSubmit={handleSubmit}
      >
        {/* Left Part */}
        <div className="w-full lg:w-2/3 space-y-10 text-white">
          {/* Select Fields */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex flex-col flex-1">
              <label className="text-yellow-400 font-semibold">{t('left_form.first_row.first_section.h')}</label>
              <select
                name="buildingType"
                className="h-[55px] border-[3px] bg-transparent text-white border-yellow-500 rounded px-3"
                required
              >
                <option value="option1">{t('left_form.first_row.first_section.selection.first_option')}</option>
                <option value="option2">{t('left_form.first_row.first_section.selection.second_option')}</option>
              </select>
            </div>

            <div className="flex flex-col flex-1">
              <label className="text-yellow-400 font-semibold">{t('left_form.first_row.second_section.h')}</label>
              <select
                name="roomType"
                className="h-[55px] border-[3px] bg-transparent text-white border-yellow-500 rounded px-3"
                required
              >
                <option value="option1">{t('left_form.first_row.second_section.selection.first_option')}</option>
                <option value="option2">{t('left_form.first_row.second_section.selection.second_option')}</option>
              </select>
            </div>

            <div className="flex flex-col flex-1">
              <label className="text-yellow-400 font-semibold">{t('left_form.first_row.third_section.h')}</label>
              <select
                name="repairType"
                className="h-[55px] border-[3px] bg-transparent text-white border-yellow-500 rounded px-3"
                required
              >
                <option value="option1">{t('left_form.first_row.third_section.selection.first_option')}</option>
                <option value="option2">{t('left_form.first_row.third_section.selection.second_option')}</option>
              </select>
            </div>
          </div>

          {/* Range & Urgency */}
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="flex flex-col flex-1 w-full">
              <label className="text-yellow-400 font-semibold mb-2">{t('left_form.second_row.first_section')}</label>
              <div className="flex items-center gap-3 w-full">
                <input
                  type="range"
                  name="area"
                  min="0"
                  max="300"
                  value={rangeValue}
                  onChange={(e) => setRangeValue(Number(e.target.value))}
                  className="w-full accent-blue-500"
                />
                <span className="bg-yellow-400 text-black px-3 py-1 rounded text-sm">{rangeValue}</span>
              </div>
            </div>

            <div className="flex flex-col flex-1 w-full">
              <label className="text-yellow-400 font-semibold">{t('left_form.second_row.second_section.h')}</label>
              <select
                name="urgency"
                className="h-[55px] border-[3px] bg-transparent text-white border-yellow-500 rounded px-3"
                required
              >
                <option value="option1">{t('left_form.second_row.second_section.selection.first_option')}</option>
                <option value="option2">{t('left_form.second_row.second_section.selection.second_option')}</option>
              </select>
            </div>
          </div>

          {/* Textarea */}
          <div>
            <label className="text-yellow-400 font-semibold block mb-2">{t('left_form.third_row.h')}</label>
            <textarea
              name="additionalInfo"
              className="w-full h-[100px] bg-white/30 border border-yellow-500 rounded px-3 py-2"
              placeholder={t('left_form.third_row.placeholder')}
            />
          </div>
        </div>

        {/* Разделитель */}
        <div className="hidden lg:flex w-[89px] h-[50px] border-r-[10px] border-l-[10px] border-yellow-500 items-center mt-[200px] mr-[20px]">
          <div className="w-full h-[10px] bg-yellow-500"></div>
        </div>

        {/* Right Part */}
        <div className="w-full lg:w-[400px] bg-white border-[3px] border-yellow-500 rounded-[10px] p-6 space-y-6">
          <div className="relative">
            <label className="block text-end font-semibold text-[18px]">{t('right_form.first_input')}</label>
            <input
              name="name"
              type="text"
              className="w-full h-[50px] border-b border-gray-400 focus:outline-none"
              required
            />
            <PersonIcon className="absolute top-[5px] right-[40px] text-gray-500" />
          </div>

          <div className="relative">
            <label className="block text-end font-semibold text-[18px]">{t('right_form.second_input')}</label>
            <input
              name="phone"
              type="tel"
              className="w-full h-[50px] border-b border-gray-400 focus:outline-none"
              required
            />
            <PhoneInTalkIcon className="absolute top-[5px] right-[70px] text-gray-500" />
          </div>

          <div className="relative">
            <label className="block text-end font-semibold text-[18px]">{t('right_form.third_input')}</label>
            <input
              name="promoCode"
              type="text"
              className="w-full h-[50px] border-b border-gray-400 focus:outline-none"
            />
            <PercentIcon className="absolute top-[5px] right-[90px] text-gray-500" />
          </div>

          <button
            type="submit"
            className="w-full h-[55px] bg-yellow-400 text-white font-bold rounded-[10px] mt-4 hover:bg-yellow-500 transition-colors"
          >
            {t('right_form.button')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Calculator;