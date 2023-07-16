const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='mx-auto max-w-screen px-3 sm:px-4 md:px-8'>
      {children}
    </main>
  )
}

export default PageWrapper
