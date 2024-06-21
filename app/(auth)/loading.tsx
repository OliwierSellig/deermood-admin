import LoadingSpinner from '@/src/components/global/loadingSpinner/LoadingSpinner';

function loading() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-8 w-8">
        <LoadingSpinner fill={true} />
      </div>
    </div>
  );
}

export default loading;
