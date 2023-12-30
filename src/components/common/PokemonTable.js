import storageSingletonInstance from "../../services/singleton";
import { Box } from "@mui/material";
import MaterialTable from "material-table";
import { useState } from "react";
import useGetTableData from "../../hooks/useGetTableData";
import CustomCell from "./CustomCell";

export default function PokemonTable() {
  ///////material tabel/////////
  const [currentPage, setCurrentPage] = useState(1);
  const {
    pokemonData,
    pokemonList,
    setCurrentUrl,
    limit,
    setLimit,
    isLoading,
  } = useGetTableData();

  console.log(pokemonData?.count);
  console.log(limit);

  const totalCount = Math.ceil(pokemonData?.count / limit / 10) * 10;

  const [columnsMt, setColumnsMt] = useState([
    {
      title: "Name",
      field: "name",

      render: (props) => <CustomCell value={props.name} />,
    },
    {
      title: "Exp",
      field: "exp",
      editable: "never",
    },
    {
      title: "Ability",
      field: "ability",

      render: (props) => <CustomCell value={props.ability} />,
    },
    {
      title: "Type",
      field: "type",
      editable: "never",
      defaultGroupOrder: 0,
    },
  ]);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
      <Box
        sx={{
          height: 300,
          width: { xs: "90%", sm: "90%", md: "70%", lg: "60%", xl: "40%" },
          maxWidth: 611,
          "& .style--header": {
            backgroundColor: "#e4e6c3",
            color: "#003049",
            border: "1px solid lightgray",
          },
        }}
      >
        <MaterialTable
          title="Pokemon List"
          columns={columnsMt}
          data={pokemonList}
          components={
            {
              // Row: (props) => <TableRow {...props} />,
              //Cell: (props) => <CustomCell {...props} />,
            }
          }
          totalCount={totalCount}
          page={currentPage - 1}
          options={{
            paging: true,
            pageSize: 20,
            pageSizeOptions: [5, 10, 15, 20],
            emptyRowsWhenPaging: false,
            grouping: true,
            rowStyle: {
              border: "3px solid lightgray",
              textUnderlineOffset: true,
            },
            headerStyle: { backgroundColor: "lightgray" },
          }}
          onChangeRowsPerPage={(pageSize) => setLimit(pageSize)}
          onChangePage={() => {}}
          // cellEditable={{
          //   onCellEditApproved: (newValue, oldValue, rowData, columnDef) => {
          //     return new Promise((resolve, reject) => {
          //       console.log("newValue: " + newValue);
          //       console.log("oldvalue: " + oldValue);
          //       setTimeout(resolve, 1000);
          //     });
          //   },
          // }}
        />
      </Box>
    </Box>
  );
}
