import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import Chip from "@material-ui/core/Chip";
import MaterialDatatable from "material-datatable";

class App extends React.Component {
  render() {

    const columns = [
     {
      name: "Name",
      field: "name",
      options: {
       filter: true,
       sort: true,
      }
     },
     {
      name: "Company",
      field: "company",
      options: {
       filter: true,
       sort: false,
      }
     },
     {
      name: "City",
      field: "city",
      options: {
       filter: true,
       sort: false,
      }
     },
     {
      name: "State",
      field: "state",
      options: {
          filter: true,
      }
     },
    ];
    
    const data = [
        {name: "Name 1", company: "Title 1", city: "Location 1", state: 30},
        {name: "Name 2", company: "Title 2", city: "Location 2", state: 31},
    ];
    
    const options = {
      filter: true,
          filterType: 'multiselect',
          customBodyRender: (value) => {
              return value.map( (val, key) => {
                  return <Chip label={val} key={key} />;
              });
          },
          selectableRows: false ,
          resizableColumns: true
        
    };
    
   
    return (
      <MaterialDatatable
      title={"Employee List"}
      data={data}
      columns={columns}
      options={options}
      selectableRows="disable"
    />
  
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
