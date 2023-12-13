import './Hjem.css'
import Contents from './contents/contents';

export default function Hjem() {
  return (
    <>
      <div className='wrapper'>
        <div className='overSkrift'>
          <h1 className='title'>Tickets</h1>
        </div>
        <div className='contentLinjer'>
          <Contents />
        </div>
      </div>
    </>
  );
}
