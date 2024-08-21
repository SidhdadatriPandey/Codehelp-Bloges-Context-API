import useAppContext from '../useAppcontext'

const Pagination: React.FC = () => {
  const context=useAppContext();
  const {page,handlePageChange,totalPages}=context;
  return (
    <div className='footer-parent'>
      <div className='footer-btns'>
      {
        page>1 && <button  onClick={()=>handlePageChange(page-1)}>Previous</button>
      }
      {
        page<6 && <button onClick={()=>handlePageChange(page+1)}>next</button>
      }
      </div>
      <p>Page {page} of {totalPages}</p>
    </div>
  )
}

export default Pagination
