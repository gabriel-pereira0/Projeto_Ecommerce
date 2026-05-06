import React from 'react';
import { FormImput } from '../../components/utils/FormImput';

export function Checkout() {
  return (
    <main className='bg-stone-200 h-[calc(100dvh-5rem)]'>
      <p className='text-center text-2xl font-bold text-slate-950 pt-8'>
        Finalizar Compra
      </p>
      <form className='grid grid-rows-5 grid-cols-3 grid-flow-col gap-4 h-3/4 mt-5 px-8'>
        <FormImput
          fieldType='text'
          fieldName='Nome'
          id='name'
          placeholder='Digite seu nome'
          required
        />
      </form>
    </main>
  );
}
