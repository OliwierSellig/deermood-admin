import notFound from '@/public/img/not-found.png';
import Image from 'next/image';
import PrimaryButton from '../primaryButton/PrimaryButton';

// Vector taken from: https://www.vecteezy.com/vector-art/5962407-illustration-vector-graphic-cartoon-character-of-big-map-pointer

function PageNotFoundMain() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="relative flex flex-col items-start p-12 sm:p-8">
        <div className="absolute left-1/2 top-1/2 -z-10 aspect-square w-[36rem] -translate-y-1/4 animate-fade-in-medium self-center xl:static xl:w-full xl:max-w-[24rem] xl:translate-y-0">
          <Image
            src={notFound}
            sizes="(max-width: 420px) 95vw, (max-width: 620px) 16rem, (max-width: 1280px) 24rem, 36rem"
            quality={100}
            fill
            alt=""
          />
        </div>
        <p className="mb-6 animate-fade-in-fast text-6xl font-semibold sm:mb-4 sm:text-4xl">
          404
        </p>
        <p className="mb-12 animate-fade-in-fast text-lg font-medium text-primary-600 sm:mb-8 sm:text-base">
          We couldn’t find the page you were looking for.
        </p>

        <PrimaryButton
          content="Back to Login"
          additionalClass="px-20 animate-fade-in-fast sm:px-12"
        />
      </div>
    </main>
  );
}

export default PageNotFoundMain;
