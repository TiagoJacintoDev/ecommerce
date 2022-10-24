import LoadingCircle from '../assets/circle.796821d23ea8d31010095ff7edc39936.svg';

export default function LoadingScreen() {
  return (
    <div className='absolute top-1/2 w-full flex justify-center items-center'>
      <img src={LoadingCircle} className='animate-spin' />
    </div>
  );
}
