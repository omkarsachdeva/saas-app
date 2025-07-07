import CompanionForm from '@/components/CompanionForm'
import { newCompanionPermissions } from '@/lib/actions/companion.actions';
import { auth } from '@clerk/nextjs/server'
import Link from 'next/link';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react'

const NewCompanion = async () => {

  const {userId}=await auth();
  if(!userId) redirect('/sign-in');

  const canCreateCompanion=await newCompanionPermissions();

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-2xl mx-auto'>
          
          {canCreateCompanion ? (
            <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-8'>
              <div className='mb-8'>
                <h1 className='text-3xl font-bold text-gray-900 mb-2'>Create Your Companion</h1>
                <p className='text-gray-600'>Build and customize your AI companion with unique personality and characteristics.</p>
              </div>
              <CompanionForm />
            </div>
          ) : (
            <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center'>
              <div className='mb-8'>
                <div className='relative w-80 h-52 mx-auto mb-6'>
                  <Image 
                    src="/images/limit.svg" 
                    alt="Companion limit reached" 
                    fill
                    className='object-contain'
                  />
                </div>
                
                <div className='mb-4'>
                  <span className='inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800'>
                    Upgrade your plan
                  </span>
                </div>
                
                <h1 className='text-3xl font-bold text-gray-900 mb-4'>
                  You've Reached Your Limit
                </h1>
                
                <p className='text-gray-600 mb-8 max-w-md mx-auto leading-relaxed'>
                  You've reached your companion limit. Upgrade to create more companions and access premium features.
                </p>
                
                <Link 
                  href="/subscription" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >
                  Upgrade My Plan
                </Link>
              </div>
              
             
            </div>
          )}
          
        </div>
      </div>
    </div>
  )
}

export default NewCompanion