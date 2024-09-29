"use client";
import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { z } from "zod";

// Define Zod schema for your data
const DataSchema = z.array(
  z.object({
    col1: z.string(),
    col2: z.string(),
  })
);

// Define your columns
const columns = [
  {
    accessorKey: "col1", // accessor is the key in the data object
    header: "Column 1",
  },
  {
    accessorKey: "col2",
    header: "Column 2",
  },
];

// Example data
const rawData = [
  {
    col1: "Hello",
    col2: "World",
  },
  {
    col1: "react-table",
    col2: "rocks",
  },
  {
    col1: "whatever",
    col2: "you want",
  },
];

export default function Table() {
  // Validate the data using Zod
  const data = DataSchema.parse(rawData);

  // Create the table instance
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="container">
      <div className="col-12">
        <table className="table">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
