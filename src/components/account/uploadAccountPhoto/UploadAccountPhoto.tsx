import adminPhoto from '@/public/img/admin.jpg';
import Image from 'next/image';

function UploadAccountPhoto() {
  return (
    <>
      <label
        htmlFor="account-photo"
        className="relative block size-36 cursor-pointer overflow-hidden rounded-full border-2 border-primary-200"
      >
        <Image src={adminPhoto} alt="Admin Photo" fill />
      </label>
      <input
        tabIndex={-1}
        type="file"
        id="account-photo"
        className="pointer-events-none absolute -z-50"
      />
    </>
  );
}

export default UploadAccountPhoto;
