import { textAlign } from "@mui/system";
import React, { useState, useEffect } from "react";
import { useTable, usePagination, useSortBy } from "react-table";
import VehicleModal from "./Modal";
import FavoriteList from "./FavoritesList";
import AddVehicleForm from "./AddVehicleForm";


const columnData = [
  {
    Header: "Images",
    accessor: "images",
    Cell: ({ value }) => (
      <img src={value} alt="Vehicle" style={{ width: "100px" }} />
    ),
  },
  {
    Header: "Make",
    accessor: "make",
  },
  {
    Header: "Model",
    accessor: "model",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Year",
    accessor: "year",
  },
  {
    Header: "Mileage ",
    accessor: "mileage",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "IsFavorite",
    accessor: "isFavorite",
  },
];
const rowData = [
  {
    vehicleid: 1,
    make: "Toyato",
    model: "Corolla",
    year: 2020,
    mileage: 15000,
    price: 200000,
    images:
      "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Toyota-Glanza-060520221539.jpg&w=872&h=578&q=75&c=1",
    status: "AVAILABLE",
    isFavorite: false,
  },
  {
    vehicleid: 2,
    make: "Audi",
    model: "Audi X1",
    year: 2020,
    mileage: 15000,
    price: 188000,
    images:
      "https://imgd.aeplcdn.com/0X0/n/cw/ec/51909/a4-exterior-right-front-three-quarter-2.jpeg?q=80",
    status: "AVAILABLE",
    isFavorite: false,
  },
  {
    vehicleid: 3,
    make: "BMW",
    model: "BMW X5",
    year: 2020,
    mileage: 15000,
    price: 1445000,
    images:
      "https://images.hindustantimes.com/auto/img/2023/03/21/1600x900/rolls-royce-black_1679377493896_1679377772569_1679377772569.jpg",
    status: "AVAILABLE",
    isFavorite: false,
  },
  {
    vehicleid: 4,
    make: "Tata",
    model: "Tata X1",
    year: 2020,
    mileage: 15000,
    price: 100000,
    images:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/149123/nexon-ev-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80&q=80",
    status: "AVAILABLE",
    isFavorite: false,
  },
  {
    vehicleid: 5,
    make: "Hundai",
    model: "Corolla",
    year: 2020,
    mileage: 1115000,
    price: 18000,
    images:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/149123/nexon-ev-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80&q=80",
    status: "SOLD",
    isFavorite: false,
  },
  {
    vehicleid: 6,
    make: "TATA",
    model: "Corolla",
    year: 2020,
    mileage: 1115000,
    price: 18000,
    images:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Harrier/9850/1681887437871/front-left-side-47.jpg?impolicy=resize&imwidth=420",
    status: "SOLD",
    isFavorite: false,
  },
  {
    vehicleid: 7,
    make: "Crysta",
    model: "Corolla",
    year: 2020,
    mileage: 1115000,
    price: 18000,
    images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSijfoyUZk-parabR1bkg6MQquMbxWIpBPpLw&usqp=CAU",
    status: "AVAILABLE",
    isFavorite: false,
  },
  {
    vehicleid: 8,
    make: "Verna",
    model: "Corolla",
    year: 2020,
    mileage: 1115000,
    price: 18000,
    images:
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/146195/tata-nexon-left-front-three-quarter0.jpeg?isig=0&wm=0",
    status: "AVAILABLE",
    isFavorite: false,
  },
  {
    vehicleid: 9,
    make: "Inova",
    model: "Corolla",
    year: 2020,
    mileage: 15000,
    price: 1445000,
    images:
      "https://images.hindustantimes.com/auto/img/2023/03/21/1600x900/rolls-royce-black_1679377493896_1679377772569_1679377772569.jpg",
    status: "BLOCKED",
    isFavorite: false,
  },
  {
    vehicleid: 10,
    make: "Toyato",
    model: "Corolla",
    year: 2020,
    mileage: 15000,
    price: 200000,
    images:
      "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Toyota-Glanza-060520221539.jpg&w=872&h=578&q=75&c=1",
    status: "BLOCKED",
    isFavorite: false,
  },
  {
    vehicleid: 11,
    make: "Toyato",
    model: "Corolla",
    year: 2020,
    mileage: 15000,
    price: 200000,
    images:
      "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Toyota-Glanza-060520221539.jpg&w=872&h=578&q=75&c=1",
    status: "AVAILABLE",
    isFavorite: false,
  },
  {
    vehicleid: 12,
    make: "Audi",
    model: "Corolla",
    year: 2020,
    mileage: 15000,
    price: 188000,
    images:
      "https://imgd.aeplcdn.com/0X0/n/cw/ec/51909/a4-exterior-right-front-three-quarter-2.jpeg?q=80",
    status: "SOLD",
    isFavorite: false,
  },
  {
    vehicleid: 13,
    make: "BMW",
    model: "Corolla",
    year: 2020,
    mileage: 15000,
    price: 1445000,
    images:
      "https://images.hindustantimes.com/auto/img/2023/03/21/1600x900/rolls-royce-black_1679377493896_1679377772569_1679377772569.jpg",
    status: "AVAILABLE",
    isFavorite: false,
  },
  {
    vehicleid: 14,
    make: "Tata",
    model: "Corolla",
    year: 2020,
    mileage: 15000,
    price: 100000,
    images:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/149123/nexon-ev-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80&q=80",
    status: "SOLD",
    isFavorite: false,
  },
  {
    vehicleid: 15,
    make: "Hundai",
    model: "Corolla",
    year: 2020,
    mileage: 1115000,
    price: 18000,
    images:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/149123/nexon-ev-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80&q=80",
    status: "AVAILABLE",
    isFavorite: false,
  },
  {
    vehicleid: 16,
    make: "TATA",
    model: "Corolla",
    year: 2020,
    mileage: 1115000,
    price: 18000,
    images:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Harrier/9850/1681887437871/front-left-side-47.jpg?impolicy=resize&imwidth=420",
    status: "SOLD",
    isFavorite: false,
  },
];
const VechileList = () => {
  const [filter, setFilter] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState({});
  const [favoriteList, setFavoriteList] = useState([]);
//   const [filteredData, setFilteredData] = useState(data);
  const [disabledVehicles, setDisabledVehicles] = useState([]);
  const [isAddFormVisible, setAddFormVisible] = useState(false);
  
  
  const initialStates = {
    pageSize: 5,
    pageIndex: 0,
  };

const data = React.useMemo(() => rowData, []);
  const columns = React.useMemo(() => columnData, []);
  const initialState = React.useMemo(() => initialStates);

  const [addVehicle, setAddVehicle] = useState([data]);

  const addNewVehicle = (newVehicle) => {
    setAddVehicle([...addVehicle, newVehicle]);
    setAddFormVisible(false); 
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

//   const addToFavorites = (vehicle) => {
//     setFavoriteList([...favoriteList, vehicle]);
//     // setFilteredData([...filteredData, vehicle]);
//   };

const addToFavorites = (vehicle) => {
    const updatedList = [...favoriteList, vehicle];
    setFavoriteList(updatedList);
  };
  


  const isVehicleDisabled = (vehicle) => {
    return disabledVehicles.some((v) => v.vehicleid === vehicle.vehicleid);
  };


const getStatusCellStyle = (status) => {
  switch (status) {
    case "AVAILABLE":
      return "border-green-500 text-green-500 font-bold py-1 px-2 rounded-full";
    case "SOLD":
      return "border-red-500 text-red-500 font-bold py-1 px-2 rounded-full";
    default:
      return "border-blue-500 text-blue-500 font-bold py-1 px-2 rounded-full";
  }
};
  

  const favoriteListColumns = columns.filter((column) => {
    return column.Header !== "Status" && column.Header !== "IsFavorite";
  });

    // setFilteredData([...filteredData, ...favoriteList]);

    // const filteredData = data.filter((item) => {
    //   return (
    //     item.make.toLowerCase().includes(filter.toLowerCase()) ||
    //     item.model.toLowerCase().includes(filter.toLowerCase())
    //   );
    // });
 
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable({ columns, data, initialState }, useSortBy,usePagination);

  const openModal = (vehicle) => {
    setSelectedVehicle(vehicle);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
   
    <div className="text-center">
        <div>
         <button className="align-left text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"onClick={() => setAddFormVisible(true)}>Add Car</button>
    {isAddFormVisible && (<AddVehicleForm addVehicle={addNewVehicle} />)}
    </div>
      <div className="container border-9 mx-auto mb-8">
        <input
          className="w-full m-1 p-2 border border-gray-400  text-lg outline-black"
          type="text"
          placeholder="Filter by make or model"
          value={filter}
          onChange={handleFilterChange}
        />
      </div>

      <table
        {...getTableProps()}
        className="w-full border-collapse bg-linen m-2 align-left"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className="bg-cadetblue">
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render("Header")}
                 <span>
                  {column.isSorted ? (column.isSortedDesc ? "🔽" : " 🔼") : ""}
                </span></th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>
                  
                    {cell.column.Header === "Images" ? (
                      <img src={cell.value} alt="Vehicle" className="w-32 cursor-pointer flex justify-center mx-auto"
                      onClick={() => openModal(row.original)}
                      /> ) : cell.column.Header === "IsFavorite" ? (
                      isVehicleDisabled(row.original) ? ( "Disabled") : (
                        <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"onClick={() => addToFavorites(row.original)}>
                          Add to Favorite
                        </button>
                      )
                    ) : cell.column.Header === "Status" ? (
                        <span className={getStatusCellStyle(cell.value)}>
                        {cell.render("Cell")}
                      </span>
                    ) : (
                      cell.render("Cell")
                      
                    )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <VehicleModal isOpen={modalIsOpen} closeModal={closeModal} data={selectedVehicle}/>
      <br />

      <div>
    <h1 className="text-current text-left text-2xl px-2" >Favorites List</h1>
    <FavoriteList columnList={favoriteListColumns} favoriteList={favoriteList} updateFavoriteList={setFavoriteList} />
    
  </div><br/>

      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()}>{">"}</button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input className="border-10 border-red-200"
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[5, 7, 10].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default VechileList;
