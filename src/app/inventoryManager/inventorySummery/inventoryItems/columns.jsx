"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDownIcon} from "@radix-ui/react-icons";


export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    )
  },
  {
    accessorKey: "productImg",
    header: "",
    cell: ({row}) => {
        const imgPath = row.getValue("productImg");
        return <div className="h-10 w-10 border border-gray-300 rounded-lg bg-cover pr-0" style={{backgroundImage: `url(${imgPath})`}} role="productImgDiv"></div>
    }
  },
  {
    accessorKey: "productName",
    header: "Product Name",
  },
  {
    accessorKey: "category",
    header: "Category",
  },

  {
    accessorKey: "unitPrice",
    header: "Unit Price",
    cell: ({ row }) => {
      const unitPrice = parseFloat(row.getValue("unitPrice"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "INR",
      }).format(unitPrice);

      return <div className="font-medium">{formatted}</div>;
    },
  },

  {
    accessorKey: "inStock",
    header: "In-Stock",
  },
  {
    accessorKey: "discount",
    header: "Discount",
    cell: ({ row }) => {
      const discount = parseFloat(row.getValue("discount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "INR",
      }).format(discount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "totalValue",
    header: "Total Value",
    cell: ({ row }) => {
      const totalValue = parseFloat(row.getValue("totalValue"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "INR",
      }).format(totalValue);

      return <div className="font-medium">{formatted}</div>;
    },
  },

  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      const value = row.getValue("action");

      // Send actionVal value return to backend so that it get update there as well
      const [actionVal, setActionVal] = useState(value);

      return (
        <div className="font-medium">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">{actionVal} <ChevronDownIcon className="ml-2 h-4 w-4" /> </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Select Action</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={actionVal}
                onValueChange={setActionVal}
              >
                <DropdownMenuRadioItem value="publish">
                  Publish 
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Unpublished">
                  Unpublished 
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },

  {
    accessorKey: "status",
    header: "Status",
  },
];
