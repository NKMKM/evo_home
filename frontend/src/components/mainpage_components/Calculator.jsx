import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'
import PersonIcon from '@mui/icons-material/Person';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import PercentIcon from '@mui/icons-material/Percent';
import calculator from '../../assets/icons/calculator.png'

const Calculator = () => {
  const [rangeValue, setRangeValue] = useState(0);
  const { t } = useTranslation('home/Calculator');

  // Левая форма
  const [buildingType, setBuildingType] = useState('');
  const [roomType, setRoomType] = useState('');
  const [repairType, setRepairType] = useState('');
  const [urgency, setUrgency] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  // Правая форма
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [promoCode, setPromoCode] = useState('');

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError('');

    const submission = {
      buildingType,
      roomType,
      repairType,
      area: rangeValue,
      urgency,
      additionalInfo,
      name,
      phone,
      promoCode
    };

    try {
      const response = await fetch('http://localhost:3001/api/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submission),
      });

      if (response.ok) {
        setSuccess(true);
        // Очистить формы
        setBuildingType('');
        setRoomType('');
        setRepairType('');
        setUrgency('');
        setAdditionalInfo('');
        setName('');
        setPhone('');
        setPromoCode('');
        setRangeValue(0);
      } else {
        setError('Ошибка при отправке. Попробуйте еще раз.');
      }
    } catch (err) {
      setError('Ошибка сети. Попробуйте еще раз.');
    }
  };

  return (
    <div className='mt-20 w-full sm:h-[1630px] lg:h-[865px]  home-calculator-bg-image bg-center bg-cover py-10 relative z-10'>
      {/* Заголовок */}
      <header className=' sm:px-5  flex lg:flex-row items-center justify-center sm:w-full lg:w-[1100px] lg:h-[85px] text-white mx-auto space-x-10'>
        <img src={calculator} alt='calculator' loading="lazy"  className='w-[64px] h-[64px]' />
        <h1 className='font-[600] sm:text-[50px] lg:text-[52px] '>{t('h')}</h1>
      </header>

      {/* Подзаголовок */}
      <p className='sm:px-7 lg:px-0 text-white lg:w-[1518px] h-[76px] mx-auto text-center my-10 p-light italic text-xl'>
        {t('p')}
      </p>

      {/* Основной контейнер */}
      <main className='sm:w-full sm:px-3 lg:px-0 sm:h-[1200px]  border-white  lg:w-[1350px] lg:h-auto mx-auto flex sm:flex-col lg:flex-row sm:justify-between '>
        <form
          className="lg:w-2/3 h-[490px]  p-6 rounded-lg text-white"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col space-y-12">
            {/* Первая строка */}
            <div className='flex sm:flex-col sm:space-y-10 lg:space-y-0 lg:flex-row lg:space-x-8.5'>
              <div className='flex flex-col'>
                <label className="text-[18px] text-[#F9B33B] font-semibold">{t('left_form.first_row.first_section.h')}</label>
                <select
                  className="sm:w-full lg:w-[250px] h-[63px] border-[3px] text-white border-yellow-500 rounded px-2 py-1 "
                  value={buildingType}
                  onChange={e => setBuildingType(e.target.value)}
                  required
                >
                  <option value="">{t('left_form.first_row.first_section.selection.first_option')}</option>
                  <option value="option2">{t('left_form.first_row.first_section.selection.second_option')}</option>
                </select>
              </div>
              <div className='flex flex-col'>
                <label className="text-[18px] text-[#F9B33B] font-semibold">{t('left_form.first_row.second_section.h')}</label>
                <select
                  className="sm:w-full lg:w-[250px] h-[63px] border-[3px] bg-transparent border-yellow-500 rounded px-2 py-1"
                  value={roomType}
                  onChange={e => setRoomType(e.target.value)}
                  required
                >
                  <option value="">{t('left_form.first_row.second_section.selection.first_option')}</option>
                  <option value="option2">{t('left_form.first_row.second_section.selection.second_option')}</option>
                </select>
              </div>
              <div className='flex flex-col'>
                <label className="text-[18px] text-[#F9B33B] font-semibold">{t('left_form.first_row.third_section.h')}</label>
                <select
                  className="sm:w-full lg:w-[250px] h-[63px] border-[3px] bg-transparent border-yellow-500 rounded px-2 py-1"
                  value={repairType}
                  onChange={e => setRepairType(e.target.value)}
                  required
                >
                  <option value="">{t('left_form.first_row.third_section.selection.first_option')}</option>
                  <option value="option2">{t('left_form.first_row.third_section.selection.second_option')}</option>
                </select>
              </div>
            </div>
            {/* Вторая строка */}
            <div className=' flex flex-row-reverse w-full'>
              <div className='flex flex-col'>
                <label className="text-[18px] text-[#F9B33B] font-semibold">{t('left_form.second_row.second_section.h')}</label>
                <select
                  className="w-[250px] h-[63px] border-[3px] bg-transparent border-yellow-500 rounded px-2 py-1"
                  value={urgency}
                  onChange={e => setUrgency(e.target.value)}
                  required
                >
                  <option value="">{t('left_form.second_row.second_section.selection.first_option')}</option>
                  <option value="option2">{t('left_form.second_row.second_section.selection.second_option')}</option>
                </select>
              </div>
              <div className="mt-6 w-[80%]">
                <label className="text-[18px] text-[#F9B33B] block mb-1 font-semibold">{t('left_form.second_row.first_section')}</label>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 w-[94.5%]">
                    <input
                      type="range"
                      name="range"
                      min="0"
                      max="300"
                      value={rangeValue}
                      onChange={(e) => setRangeValue(Number(e.target.value))}
                      className='w-full accent-blue-500 '
                    />
                    <div className="bg-[#F9B33B] text-black px-2 py-1 rounded text-sm">
                      {rangeValue}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Третья строка */}
            <div className="">
              <label className="text-[18px] text-[#F9B33B] block mb-1 font-semibold">{t('left_form.third_row.h')}</label>
              <textarea
                className="w-full h-[100px] bg-white/30 border border-yellow-500 rounded px-2 py-1"
                placeholder={t('left_form.third_row.placeholder')}
                value={additionalInfo}
                onChange={e => setAdditionalInfo(e.target.value)}
              ></textarea>
            </div>
            {/* Правая форма */}
            <div className="flex flex-col space-y-4 mt-8">
              <label className="text-[22px] font-semibold block text-end ">{t('right_form.first_input')}</label>
              <input
                type="text"
                className="w-full h-[50px] border-b border-gray-400 focus:outline-none"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
              <PersonIcon className='absolute top-[85px] right-[40px] w-[20px] h-[20px]' />

              <label className="text-[22px] font-semibold block text-end">{t('right_form.second_input')}</label>
              <input
                type="tel"
                className="w-full h-[50px] border-b border-gray-400 focus:outline-none"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
              />
              <PhoneInTalkIcon className='absolute top-[185px] right-[40px] w-[20px] h-[20px]' />

              <label className="text-[22px] font-semibold block text-end">{t('right_form.third_input')}</label>
              <input
                type="text"
                className="w-full h-[50px] border-b border-gray-400 focus:outline-none"
                value={promoCode}
                onChange={e => setPromoCode(e.target.value)}
              />
              <PercentIcon className='absolute top-[285px] right-[40px] w-[20px] h-[20px]' />
            </div>
            <button className="sm:w-full lg:w-[315px] h-[55px] mx-auto bg-[#F9B33B] button-scale-hover  text-white font-bold py-2 rounded-[10px] mt-4">
              {t("right_form.button")}
            </button>
            {success && <div className="text-green-600 mt-2 text-center">Заявка отправлена!</div>}
            {error && <div className="text-red-600 mt-2 text-center">{error}</div>}
          </div>
        </form>
      </main>
    </div>
  )
}

export default Calculator;