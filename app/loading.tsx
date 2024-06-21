import LoadingSpinner from '@/src/components/global/loadingSpinner/LoadingSpinner';

function Loading() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="mb-8 h-12 w-12">
        <LoadingSpinner fill={true} />
      </div>
      <p className="mb-2 text-2xl font-medium text-primary-600 sm:text-xl">
        Loading the page
      </p>
      <p className="text-base text-primary-500 sm:text-sm">
        Please stay patient...
      </p>
    </main>
  );
}

export default Loading;
