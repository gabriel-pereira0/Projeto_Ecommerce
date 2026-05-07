import React from 'react';

export function FormImput({
  id,
  fieldName,
  fieldType,
  placeholder,
  required,
  className = '',
  onChange,
}) {
  const handlePhoneMask = (e) => {
    let value = e.target.value.replace(/\D/g, '');

    value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
    value = value.replace(/(\d{5})(\d)/, '$1-$2');

    e.target.value = value.slice(0, 15);
  };

  const handleCardMask = (e) => {
    let value = e.target.value.replace(/\D/g, '');

    value = value.replace(/(\d{4})(?=\d)/g, '$1 ');

    e.target.value = value.slice(0, 19);
  };

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className='block mb-2 text-sm font-medium text-gray-900'
      >
        {fieldName}
      </label>
      <input
        id={id}
        type={fieldType}
        placeholder={placeholder}
        className=' block bg-gray-200 border border-gray-300 rounded-lg text-gray-900 text-sm w-full p-2.5 placeholder-slate-500'
        onChange={onChange}
        required={required}
      />
    </div>
  );
}
