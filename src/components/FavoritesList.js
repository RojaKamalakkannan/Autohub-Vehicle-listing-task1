import React,{useState} from "react";
import { useTable} from "react-table";

const FavoriteList = ({ columnList, favoriteList, updateFavoriteList }) => {
  const data = React.useMemo(() => favoriteList, []);
  const columns = React.useMemo(() => columnList, []);

  const [favoriteLists, setFavoriteList] = useState(favoriteList);

  const addToFavorites = (vehicle) => {
    const isFavorite = isVehicleInFavorites(vehicle);
    console.log("isFavorite check", isFavorite);
  
    if (isFavorite) {
      // Remove the vehicle from favorites
      const updatedList = favoriteLists.filter(
        (favVehicle) => favVehicle.vehicleid !== vehicle.vehicleid
      );
      console.log("Updated Favorites List (Remove):", updatedList);
      setFavoriteList(updatedList);
    } else {
      // Add the vehicle to favorites
      const updatedList = [...favoriteLists, vehicle];
      console.log("Updated Favorites List (Add):", updatedList);
      setFavoriteList(updatedList);
    }
  };
  
  const isVehicleInFavorites = (vehicle) => {
    console.log("FavoriteList:", favoriteLists);
    console.log("Vehicle:", vehicle);
    const isFavorite = favoriteLists.some(
      (favVehicle) => favVehicle.vehicleid === vehicle.vehicleid
    );
  
    console.log("IsFavorite:", isFavorite);
    return isFavorite;
  };
  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns: columnList, data: favoriteList });

  return (
    <div className="text-center mx-auto">
      {favoriteList.length > 0 && (
        <table
          {...getTableProps()}
          className="w-full border-collapse bg-linen m-2 align-left"
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className="bg-cadetblue"
              >
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>
                      {cell.column.Header === "IsFavorite" ? (
               <button
               onClick={() => addToFavorites(row.original)}
               className={`${
                 isVehicleInFavorites(row.original)
                   ? 'bg-green-500 hover:bg-green-700'
                   : 'bg-blue-500 hover:bg-blue-700'
               } text-white font-bold py-2 px-4 rounded`}
             >
               {isVehicleInFavorites(row.original) ? "Added to Favorites" : "Add to Favorites"}
             </button>
             
                
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
      )}
    </div>
  );
};

export default FavoriteList;

