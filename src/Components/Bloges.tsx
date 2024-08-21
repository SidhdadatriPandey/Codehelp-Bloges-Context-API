import Spinner from './Spinner';
import useAppContext from '../useAppcontext';
import Card from './Card';


const Bloges: React.FC = () => {
  
  const context = useAppContext()

  
  if (context === undefined) {
    throw new Error('Bloges must be used within an AppContextProvider');
  }
 
  
  const { loading, posts } = context;

  

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        posts?.length === 0 ? (
          <div>Length is zero</div>
        ) : (
          <div className='cards-container'>
            {
              posts?.map((post, index) => (
                <Card key={index} post={post} />
            ))
            }
          </div>
        )
      )}
    </div>
  );
}

export default Bloges;
