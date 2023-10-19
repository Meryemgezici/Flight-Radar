import { useSelector } from "react-redux"
import ReactPaginate from 'react-paginate';
import { useState } from "react";

const ListView = ({openModel}) => {
  const state = useSelector((store) => store);
  const [itemOffset, setItemOffset] = useState(0);

  // sayfa başına eleman sayısı
  const itemsPerPage = 10;

  // gösterilecek sonucun eleman sayısı
  const endOffset = itemOffset + itemsPerPage;

  // gösterilecek aralıktaki elemanlar
  const currentItems=state?.flights.slice(itemOffset, endOffset);

  // toplam kaç sayfa olduğunu hesaplama
  const pageCount=Math.ceil(state?.flights.length/itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % state?.flights.length;
    
    setItemOffset(newOffset);
  };

  return (
    <div className="list-page">
      <table className="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th>id</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th></th>
          </tr>

        </thead>

        <tbody>
          {currentItems.map((flight) => (<tr key={flight.id}>
            <td>{flight.id}</td>
            <td>{flight.code}</td>
            <td>{flight.lat}</td>
            <td>{flight.lng}</td>
            <td>{flight.id}</td>
            <td>
              <button className="detail-btn" onClick={()=>openModel(flight.id)}>Detay</button>
            </td>
          </tr>)

          )

          }
          
        </tbody>
      </table>
      <ReactPaginate pageCount={pageCount}
      nextLabel="ileri >"
      previousLabel="< geri"
      onPageChange={handlePageClick}
      className="pagination"
      pageRangeDisplayed={2}
      activeClassName="active"
      />
     
    </div>
  )
}

export default ListView
