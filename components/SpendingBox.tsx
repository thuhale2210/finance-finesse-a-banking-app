'use client'

import AnimatedCounter from './AnimatedCounter'
import React from 'react'
import { calculateSpendingByCategory, calculateSpendingLastSixMonths } from '@/lib/utils'
import SpendingPolarAreaChart from './SpendingPolarAreaChart'
import SpendingLineChart from './SpendingLineChart'

interface SpendingBoxProps {
    transactions: Transaction[],
    type: string
}

const SpendingBox: React.FC<SpendingBoxProps> = ({ transactions = [], type }: SpendingBoxProps) => {
    const categorySpending = calculateSpendingByCategory(transactions)
    const totalSpending = Object.values(categorySpending).reduce((acc, curr) => acc + curr, 0)
    const { labels, data } = calculateSpendingLastSixMonths(transactions);

    return (
        <section className='total-balance'>
            {type === 'spendingThisMonth' && (
                <>
                    <div className='total-balance-chart'>
                        <SpendingPolarAreaChart
                            categorySpending={categorySpending}
                        />
                    </div>

                    <div className='flex flex-col ml-2 gap-6'>
                        <div className='flex flex-col gap-2 header-2'>
                            <h2>Spending This Month</h2>
                            <div className='total-balance-amount flex-center gap-2'>
                                <AnimatedCounter amount={totalSpending} />
                            </div>
                        </div>
                    </div>
                </>
            )}
            {type === 'spendingLastSixMonths' && (
                <>
                    <div className='flex flex-col m-2 header-2'>
                        <h2>Spending Last 6 Months</h2>
                        <div className='mt-6'>
                            <SpendingLineChart labels={labels} data={data} />
                        </div>
                    </div>
                </>
            )}
        </section>
    )
}

export default SpendingBox