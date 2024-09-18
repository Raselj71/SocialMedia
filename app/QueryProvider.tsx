'use client'
import React from 'react'
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from 'react-query'

function QueryProvider({ children }: { children: React.ReactNode }) {
    const queryClient = new QueryClient()

  return (
     <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default QueryProvider