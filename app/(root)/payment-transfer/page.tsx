import HeaderBox from '@/components/Header'
import PaymentTransferForm from '@/components/PaymentTransferForm'
import { getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Transfer = async () => {
  const loggedIn = await getLoggedInUser();

  const accounts = await getAccounts({ userId: loggedIn.$id });

  if (!accounts) return;

  const accountsData = accounts.data;
  return (
    <section className='payments-transfer-home'>
      <div className='payment-transfer-content'>
      <HeaderBox title='Payment Transfer'
        subtext='Please provide any specific details or notes related to the payment transfer' />

      <section className='size-full pt-5'>
        <PaymentTransferForm accounts={accountsData} />
      </section>
      </div>
    </section>
  )
}

export default Transfer