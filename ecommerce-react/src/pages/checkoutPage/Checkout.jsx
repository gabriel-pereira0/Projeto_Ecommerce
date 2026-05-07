import React from 'react';

import { FormImput } from '../../components/FormImput';

import { CartProducts } from '../../components/cart/CartProducts';
import { TotalPriceCell } from '../../components/cart/TotalPriceCell';

import { handleCardMask } from '../../components/utils/masks';
import { handlePhoneMask } from '../../components/utils/masks';
import { handleCvvMask } from '../../components/utils/masks';
import { handleExpirationMask } from '../../components/utils/masks';
import { handleCepMask } from '../../components/utils/masks';

export function Checkout() {
  return (
    <main className='bg-stone-200 h-[calc(100dvh-5rem)]'>
      <p className='text-center text-2xl font-bold text-slate-950 pt-8'>
        Finalizar Compra
      </p>
      <form className='grid grid-rows-[max-content_1fr_1fr_1fr_1fr_1fr] grid-cols-3 grid-flow-col gap-4 h-3/4 mt-5 px-8'>
        <p className='text-center text-sm font-bold font-slate-950'>
          Seus Dados
        </p>
        <FormImput
          fieldType='text'
          fieldName='Nome Completo'
          id='name'
          placeholder='John Lira'
          required
        />
        <FormImput
          fieldType='email'
          fieldName='Email'
          id='email'
          placeholder='johnlira@email.com'
          required
        />
        <FormImput
          fieldType='tel'
          fieldName='Telefone'
          id='phone'
          placeholder='(xx) 9999-9999'
          onChange={handlePhoneMask}
          required
        />
        <p className='text-center text-sm font-bold font-slate-950 row-start-1'>
          Pagamento e Entrega
        </p>
        <FormImput
          fieldType='text'
          fieldName='Número do cartão'
          id='credit-card'
          placeholder='9999 8888 7777 6666'
          onChange={handleCardMask}
          required
        />
        <div className='flex justify-center gap-3'>
          <FormImput
            fieldType='text'
            fieldName='CVV'
            id='cvv'
            placeholder='0000'
            onChange={handleCvvMask}
            required
          />
          <FormImput
            fieldType='text'
            fieldName='Data de Vencimento'
            id='expiration-date'
            placeholder='01/2026'
            onChange={handleExpirationMask}
            required
          />
        </div>
        <FormImput
          fieldType='text'
          fieldName='CEP'
          id='postal-code'
          placeholder='00000-000'
          onChange={handleCepMask}
          required
        />
        <FormImput
          fieldType='text'
          fieldName='Endereço'
          id='address'
          placeholder='Rua que sobe e desce'
          required
        />
        <div className='flex justify-center gap-3'>
          <FormImput
            fieldType='text'
            fieldName='Número'
            id='address-number'
            placeholder='12'
            required
          />
          <FormImput
            fieldType='text'
            fieldName='Complemento'
            id='apt-number'
            placeholder='Apt-202'
          />
        </div>

        <p className='text-center text-sm font-bold font-slate-950 row-start-1'>
          Seus Produtos
        </p>
        <section className='row-span-4 p-2 bg-neutral-100 rounded-md overflow-auto'>
          <CartProducts isHomePage={false} />
        </section>
        <section className='row-span-1 flex flex-col gap-2'>
          <TotalPriceCell />
          <button className='bg-slate-950 text-slate-100 rounded-md p-1 hover:bg-slate-600 text-center'>
            Finalizar Compra
          </button>
        </section>
      </form>
    </main>
  );
}
