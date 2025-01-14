import Link from "next/link";
import Photo from "../../../../components/frame";
import Modal from "../../../../components/modal";
import swagPhotos from "../../../../photos";

export default function PhotoModal({ params: { id: photoId } }) {
  const photos = swagPhotos;
  const photo = photoId && photos.find((p) => p.id === photoId);

  return (
    <Modal>
      <Photo photo={photo} />
      <Link className="text-white" href="/about">About Us Page</Link>
    </Modal>
  );
}
