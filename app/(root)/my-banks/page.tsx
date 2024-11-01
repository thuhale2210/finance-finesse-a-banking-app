import BankCard from '@/components/BankCard';
import HeaderBox from '@/components/Header'
import { getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const MyBanks = async () => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ userId: loggedIn.$id });

  return (
    <section className='my-banks-home'>
      <div className='my-banks-content'>
        <HeaderBox
          title='My Bank Accounts'
          subtext='View and manage your bank accounts'
        />

        <div className='space-y-4'>
          <h2 className='header-2'>
            Your cards
          </h2>
          <div className='flex flex-wrap gap-6'>
            {accounts && accounts.data.map((account: Account) => (
              <BankCard key={accounts?.id}
                account={account}
                userName={loggedIn?.firstName} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyBanks