import React from 'react'
import { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import PercentIcon from '@mui/icons-material/Percent';
import calculator from '../../assets/icons/calculator.png'



const Calculator = () => {
  const [rangeValue, setRangeValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    console.log('Значение range:', formData.get('range'));

    // можно отправить через fetch, axios и т.д.
  };

  return (
    // Добавлены классы 'relative' и 'z-10' для корректного z-index
    <div className='mt-20 w-full sm:h-[1630px] lg:h-[865px] border-2 home-calculator-bg-image bg-center bg-cover py-10 relative z-10'>
      {/* Заголовок */}
      <header className=' sm:px-5 flex lg:flex-row items-center sm:w-full lg:w-[1252px] lg:h-[85px] text-white mx-auto space-x-10'>
        <img src={calculator} alt='calculator' loading="lazy"  className='w-[64px] h-[64px]' />
        <h1 className='font-[600] sm:text-[50px] lg:text-[60px] '>Калькулятор стоимости ремонта</h1>
      </header>

      {/* Подзаголовок */}
      <p className='sm:px-4 lg:px-0 text-white lg:w-[1518px] h-[76px] mx-auto text-center my-10 p-light italic text-xl'>
        После заполнения калькулятора наш специалист свяжется с вами, чтобы уточнить детали и предложить точный расчет стоимости проекта. Мы учтем ваши пожелания и подберем оптимальное решение под ваш бюджет!
      </p>

      {/* Основной контейнер */}
      <main className='sm:w-full sm:h-[1200px]  border-white  lg:w-[1350px] lg:h-auto mx-auto flex sm:flex-col lg:flex-row sm:justify-between'>

        {/* Левая форма */}
        <form className="lg:w-2/3 h-[490px]  p-6 rounded-lg text-white">
          <div className="flex flex-col space-y-12">
            {/* Первая строка */}
            <div className='flex sm:flex-col sm:space-y-10 lg:space-y-0 lg:flex-row lg:space-x-8.5'>
              <div className='flex flex-col'>
                <label className="text-[18px] text-[#F9B33B] font-semibold">ТИП ЗДАНИЯ</label>
                  <select
                    className="sm:w-full lg:w-[250px] h-[63px] border-[3px] text-white border-yellow-500 rounded px-2 py-1 "
                  >
                    <option>Новое здание </option>
                    <option >Вторичка</option>
                  </select>
              </div>

              <div className='flex flex-col'>
                <label className="text-[18px] text-[#F9B33B] font-semibold">ТИП ПОМЕЩЕНИЯ</label>
                <select className="sm:w-full lg:w-[250px] h-[63px] border-[3px] bg-transparent border-yellow-500 rounded px-2 py-1">
                  <option>Квартира</option>
                  <option>Дом</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label className="text-[18px] text-[#F9B33B] font-semibold">ТИП РЕМОНТА</label>
                <select className="sm:w-full lg:w-[250px] h-[63px] border-[3px] bg-transparent border-yellow-500 rounded px-2 py-1">
                  <option>Косметический</option>
                  <option>Капитальный</option>
                </select>
              </div>
            </div>

            {/* Вторая строка */}
            <div className=' flex flex-row-reverse w-full'>
              <div className='flex flex-col'>
                <label className="text-[18px] text-[#F9B33B] font-semibold">СРОЧНОСТЬ РАБОТ</label>
                <select className="w-[250px] h-[63px] border-[3px] bg-transparent border-yellow-500 rounded px-2 py-1">
                  <option>Обычный</option>
                  <option>Срочный</option>
                </select>
              </div>

              <div className="mt-6 w-[80%]">
                <label className="text-[18px] text-[#F9B33B] block mb-1 font-semibold">ПЛОЩАДЬ, (М²)</label>
                <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 w-[94.5%]">
                  <input
                    type="range"
                    name="range"
                    min="0"
                    max="300"
                    value={rangeValue}
                    onChange={(e) => setRangeValue(e.target.value)}
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
              <label className="text-[18px] text-[#F9B33B] block mb-1 font-semibold">ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ</label>
              <textarea className="w-full h-[100px] bg-white/30 border border-yellow-500 rounded px-2 py-1" placeholder="Напишите текст"></textarea>
            </div>
          </div>
        </form>

        {/* Разделитель */}
        <div className='sm:hidden lg:flex w-[89px] h-[50px] border-r-[10px] border-r-[#F9B33B] border-l-[10px] border-l-[#F9B33B] items-center mt-[200px] mr-[20px]'>
          <div className='w-full h-[10px] bg-[#F9B33B]'></div>
        </div>

        {/* Правая форма */}
        <form className='relative bg-white border-[3px] border-[#F9B33B] rounded-[10px] sm:w-[93.5%] sm:mx-auto lg:mx-0 lg:w-[389px] h-[430px] p-10'>
          <div className="mb-4">
            <label className="text-[22px] font-semibold block text-end ">Имя</label>
            <input type="text" className="w-full h-[50px] border-b border-gray-400 focus:outline-none" />
            <PersonIcon className='absolute top-[85px] right-[40px] w-[20px] h-[20px]' />
          </div>

          <div className="mb-4">
            <label className="text-[22px] font-semibold block text-end">Телефон*</label>
            <input type="tel" className="w-full h-[50px] border-b border-gray-400 focus:outline-none" />
            <PhoneInTalkIcon className='absolute top-[185px] right-[40px] w-[20px] h-[20px]' />
          </div>

          <div className="mb-4">
            <label className="text-[22px] font-semibold block text-end">Промокод</label>
            <input type="text" className="w-full h-[50px] border-b border-gray-400 focus:outline-none" />
            <PercentIcon className='absolute top-[285px] right-[40px] w-[20px] h-[20px]' />
          </div>

          <button className="sm:w-full lg:w-[315px] h-[55px] mx-auto bg-[#F9B33B] button-scale-hover  text-white font-bold py-2 rounded-[10px] mt-4">
            РАССЧИТАТЬ СТОИМОСТЬ
          </button>
        </form>
      </main>
    </div>
  )
}

export default Calculator;