import React from "react";
import { DataTable } from "./inventoryItems/data-table";
import { columns } from "@/app/inventoryManager/inventorySummery/inventoryItems/columns";
import { Button } from "@/components/ui/button";

// dummy data for the table
function getData() {
  return [
    {
      productName: "iPhone 13 Pro",
      productImg: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70",
      category: "Gadgets",
      unitPrice: 122500.00,
      inStock: "8",
      discount: 0.00,
      totalValue: 50000.00,
      action: "Publish",
      status: "Published",
    },
    {
      productName: "Electric Kettle",
      productImg: "https://rukminim2.flixcart.com/image/832/832/xif0q/electric-kettle/w/g/r/-original-imaggkhdr4thnypr.jpeg?q=70&crop=false",
      category: "Kitchen Appliances",
      unitPrice: 2000.00,
      inStock: "78",
      discount: 100.00,
      totalValue: 50000.00,
      action: "Publish",
      status: "Unpublished",
    },
    {
      productName: "Printed T-Shirt",
      productImg: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/r/z/2/-original-imaghhfgbudtrdgt.jpeg?q=70&crop=false",
      category: "Men's wear",
      unitPrice: 725.00,
      inStock: "120",
      discount: 0.00,
      totalValue: 50000.00,
      action: "Publish",
      status: "Published",
    },
    {
      productName: "Remote Control Remote Control",
      productImg: "https://rukminim2.flixcart.com/image/832/832/xif0q/shopsy-remote-control-toy/j/e/s/exceed-helicopter-remote-control-rechargeable-flying-unbreakable-original-imagsw4vhe2yvfar.jpeg?q=70&crop=false",
      category: "Toys",
      unitPrice: 999.00,
      inStock: "out of stock",
      discount: 0.00,
      totalValue: 50000.00,
      action: "Publish",
      status: "Published",
    },
    {
        productName: "Electric Kettle",
        productImg: "https://rukminim2.flixcart.com/image/832/832/xif0q/electric-kettle/w/g/r/-original-imaggkhdr4thnypr.jpeg?q=70&crop=false",
        category: "Kitchen Appliances",
        unitPrice: 2000.00,
        inStock: "78",
        discount: 100.00,
        totalValue: 50000.00,
        action: "Publish",
        status: "Unpublished",
      },
      {
        productName: "iPhone 13 Pro",
        productImg: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70",
        category: "Gadgets",
        unitPrice: 122500.00,
        inStock: "8",
        discount: 0.00,
        totalValue: 50000.00,
        action: "Publish",
        status: "Published",
      },
      {
        productName: "Remote Control Remote Control",
        productImg: "https://rukminim2.flixcart.com/image/832/832/xif0q/shopsy-remote-control-toy/j/e/s/exceed-helicopter-remote-control-rechargeable-flying-unbreakable-original-imagsw4vhe2yvfar.jpeg?q=70&crop=false",
        category: "Toys",
        unitPrice: 999.00,
        inStock: "out of stock",
        discount: 0.00,
        totalValue: 50000.00,
        action: "Publish",
        status: "Published",
      },
    {
        productName: "Printed T-Shirt",
        productImg: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/r/z/2/-original-imaghhfgbudtrdgt.jpeg?q=70&crop=false",
        category: "Men's wear",
        unitPrice: 725.00,
        inStock: "120",
        discount: 0.00,
        totalValue: 50000.00,
        action: "Publish",
        status: "Published",
      },
      {
        productName: "Electric Kettle",
        productImg: "https://rukminim2.flixcart.com/image/832/832/xif0q/electric-kettle/w/g/r/-original-imaggkhdr4thnypr.jpeg?q=70&crop=false",
        category: "Kitchen Appliances",
        unitPrice: 2000.00,
        inStock: "78",
        discount: 100.00,
        totalValue: 50000.00,
        action: "Publish",
        status: "Unpublished",
      },
    {
      productName: "iPhone 13 Pro",
      productImg: "https://images.pexels.com/photos/4065899/pexels-photo-4065899.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Gadgets",
      unitPrice: 1225000.00,
      inStock: "8",
      discount: 0.00,
      totalValue: 50000.00,
      action: "Publish",
      status: "Published",
    },
    {
        productName: "Printed T-Shirt",
        productImg: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/r/z/2/-original-imaghhfgbudtrdgt.jpeg?q=70&crop=false",
        category: "Men's wear",
        unitPrice: 725.00,
        inStock: "120",
        discount: 0.00,
        totalValue: 50000.00,
        action: "Publish",
        status: "Published",
      },
    {
        productName: "Electric Kettle",
        productImg: "https://rukminim2.flixcart.com/image/832/832/xif0q/electric-kettle/w/g/r/-original-imaggkhdr4thnypr.jpeg?q=70&crop=false",
        category: "Kitchen Appliances",
        unitPrice: 2000.00,
        inStock: "78",
        discount: 100.00,
        totalValue: 50000.00,
        action: "Publish",
        status: "Unpublished",
      },
  ];
}

function InventorySummary() {
  const data = getData();
  return (
    // main component of Inventory Summary
    <main className="h-screen w-screen p-6 bg-slate-100 grid gap-4 grid-cols-2 grid-rows-12">
      <div className="text-slate-900 col-start-1 p-4 col-end-2 row-start-1 row-end-2">
        Inventory Summary
      </div>

      <div className="col-start-2 p-4 col-end-3 row-start-1 row-end-2 justify-self-end">
        <Button variant="indigo"> + Add a New Product </Button>
      </div>

      <div className="bg-blue-700 opacity-80 p-4 rounded-xl text-white col-start-1 col-end-2 row-start-2 row-end-4 shadow grid grid-cols-2 grid-rows-2">
        <div className="col-start-1 col-end-3 row-start-1 row-end-2">icon</div>
        <div>All Proucts<br/>350</div>
        <div>Active<br/>316</div>
      </div>

      <div className="bg-white p-4 rounded-xl text-slate-900 col-start-2 col-end-3 row-start-2 row-end-4 shadow grid grid-cols-2 grid-rows-2">
        <div className="col-start-1 col-end-3 row-start-1 row-end-2">
            icon
        </div>
        <div className="text-red-700">Low Stock Alert<br/>23</div>
        <div>Expired<br/>3</div>
      </div>


      {/* Inventory Items Table, for more info you refer columns.jsx, data-table.jsx and table.jsx */}

      <div className="rounded-lg bg-white px-4 py-1 text-gray-500 col-start-1 col-end-3 row-start-4 row-end-13 shadow text-xs overflow-scroll">
        <DataTable columns={columns} data={data} /> 
      </div>
    </main>
  );
}

export default InventorySummary;
