"use client"
import Beers from '@/components/test/beers';
import { LoadMore } from '@/components/test/loadMore';
import useFetchBeer from '@/components/test/useFetchBeer';
import React, { useState } from 'react'

const TestPage = () => {

  // const { data, mutate, isLoading, isError } = useFetchBeer(1, 60);

  return (
    <>
      <div className='row'>
        {/* <Beers beers={data} /> */}
        <LoadMore />
      </div>
    </>
  );
}

export default TestPage
